import React ,{useState} from "react";
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import axios from "axios";
import Navbar from "../components/Navbar";
import {useNavigate} from "react-router-dom";

function Login(){
  
  const navigate = useNavigate();
  
  const [loginData , setData] = useState({
    email : "",
    password : ""
  })

    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
  
  
  function handleChange(event){
    const {name : key , value} = event.target;
    setData( prevValue => {
      return {
        ...prevValue,
        [key] : value
      }
    })
  }

  async function handleSubmit(event){
    event.preventDefault();
    try{
    const res = await axios.post("http://localhost:5000/api/login" , loginData);
    localStorage.setItem("email", loginData.email);
    setMessage(res.data.message || "login Successfull")
    
    navigate("/dashboard");
        setError(false);
      }catch(err){
    setMessage(err.response?.data?.message || 'login failed');
    setError(true);
  };

}

    return (<div>
      <Navbar />
        <div className="container">
             
        <h1>Login</h1>
        
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' , margin : 2 }}>
        <form onSubmit={handleSubmit}>
      <TextField placeholder="Email" name="email" onChange={handleChange} value={loginData.email}  />
      <br/>
      <TextField placeholder="Password" name="password" onChange={handleChange} value={loginData.password} />
      <br/>
      <Button type="submit" variant="outlined" onSubmit={handleSubmit} >Login</Button>
    </form>
    </Box>
    {message && (<p style={{ color: error ? 'red' : 'green' }}>{message}</p>)}
    </div>
    
    </div>
    )
}

export default Login;