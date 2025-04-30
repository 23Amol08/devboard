import React , {useState} from "react";
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import axios from "axios";

function Signup(){

  const [signupData , setData] = useState({
    name : "",
    email : "",
    password : ""
  })

  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  function handleChange(event){
    const { name : key , value} = event.target;
    setData( prevValue => {
      return {
        ...prevValue,
        [key] : value
      }
    }) 
  }

 async function handleSubmit(e){
  e.preventDefault();    
  try{
        const res = await axios.post("http://localhost:5000/api/signup" , signupData);
            setMessage(res.data.message || "Signup Successfull")
            setError(false);
          }catch(err){
        setMessage(err.response?.data?.message || 'Signup failed');
        setError(true);
      };
      
  }

    return (
     <div className="container">   
        <h1>SignUp</h1>
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' , margin : 2 }}>
      <form onSubmit={handleSubmit} >
      <TextField placeholder="Name" name="name" onChange={handleChange} value={signupData.name} />
      <br/>
      <TextField placeholder="Email" name="email" onChange={handleChange} value={signupData.email} />
      <br/>
      <TextField placeholder="Password" name="password" onChange={handleChange} value={signupData.password} />
      <br/>
      <Button type="submit" variant="contained" color="primary" >Signup</Button>
      </form>
    </Box>
    </div>
    )
}

export default Signup;