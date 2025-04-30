import express from "express";
import {db} from '../db.js';

const router = express.Router();

router.post("/signup" , async (req , res) => {
    const {name , email , password} = req.body;

    try{
        const existing = await db.query("SELECT * FROM users WHERE email = $1", [email]);
        
        if(existing.rows.length > 0){
           return res.status(400).json({message:'Email already registered'});
        }
        
        await db.query("INSERT INTO users (name , email ,password) VALUES ($1,$2,$3)" , 
            [name , email , password]);
        
        res.status(201).json({message:"Signup successful!"})
    
    }catch(err){
        console.log(err.message);
        res.status(500).json({message: "server error"});    
    }
})

export default router;