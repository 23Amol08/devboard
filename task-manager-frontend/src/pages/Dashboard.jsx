import React, { useState , useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Dashboard(){

    const [user , setUser] = useState(null);
    const [message , setMessage] = useState("");

    useEffect(()=>{
        const email = localStorage.getItem("email");

        if(!email){
            setMessage("User not logged in")
            return;
        }

        try{
        const res = axios.get(`http://localhost:5000/api/user/${email}`);
        setUser(res.data.user);
        setMessage("");
        }catch(err){
            console.error(err);
        setMessage("Failed to load user info");
        }
    })

    return (<div>
        <Navbar />
    <div style={{ padding: "2rem" }}>
        <h1>Dashboard</h1>
        {message && <p>{message}</p>}
        {user && (<div><h2>Welcome, {user.name}!</h2>
            <p>Email: {user.email}</p>
        </div>)}
    </div>
    </div>)
}

export default Dashboard;