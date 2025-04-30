import React ,{useState} from "react";
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import axios from "axios";

function Login(){

  const [loginData , setData] = useState({
    email : "",
    password : ""
  })
  
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
    

}

    return (
        <div className="container">   
        <h1>Login</h1>
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' , margin : 2 }}>
      <TextField placeholder="Email" name="email" onChange={handleChange} value={loginData.email}  />
      <br/>
      <TextField placeholder="Password" name="password" onChange={handleChange} value={loginData.password} />
      <br/>
      <Button type="submit" variant="outlined" onSubmit={handleSubmit} >Login</Button>
    </Box>
    </div>
    )
}

export default Login;