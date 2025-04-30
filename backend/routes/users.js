import {Router} from "express";
import {db} from "../db.js"
import bodyParser from "body-parser";


const router = Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post("/register" , async (req,res) => {
//insert new user
try{    
    const { username : email , password} = req.body;
    await db.query("INSERT INTO users (username , password) VALUES ($1 , $2)",[email, password]);
    res.send("user registered successfully");
    
}catch(err){
    res.status(500).send('error registering user');
}
});

router.get("/users" , async (req,res)=>{
//select all users from db
   const result = await db.query("SELECT * FROM users");
   res.send(result.rows);
});

export default router;
