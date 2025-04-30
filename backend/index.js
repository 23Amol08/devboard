import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import {db} from "./db.js";
import userRouter from "./routes/users.js"
import taskRouter from "./routes/tasks.js"
import authRouter from "./routes/auth.js"

dotenv.config();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.use( "/api/users", userRouter);
app.use( "/api/tasks", taskRouter);
app.use("/api", authRouter);

app.get("/" , (req,res) => {
    res.send('API running');
});



app.listen(port , () => {
    console.log(`Server running on port: ${port}`);
});


// app.get("/dbtest" , async(req,res) =>{

//     try{
//         const result = await db.query("SELECT * FROM login_info");
//         res.send(result.rows);
    
//     }catch(err){
//         console.log(err.message);
//         res.status(500).send("db error")
//     }

// });


