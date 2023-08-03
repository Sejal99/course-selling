import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import axios from 'axios'
const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  return (
    <div>
        <center>
      <div style={{
        marginTop:150,
          marginBottom:10}}>
            <Typography variant={"h6"}>
        Welcome To Coursera
        </Typography>
        </div>
     
      <Card variant={"outlined"} style={{ width: 400, padding: 20,marginTop:10 }}>
        <TextField
          fullWidth={true}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={(e)=> {
            setEmail(e.target.value)
          }}
        />
        <br /> <br />
        <TextField
          fullWidth={true}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={(e)=> {
            setPassword(e.target.value)
          }}
        />
        <br />
        <br />
        <Button size={"large"} 
        variant="contained"
        onClick={async()=>{
            console.log(email);
            console.log(password);
            
            try{
                await axios.post('http://localhost:3000/admin/signup', {username: email, password: password} );
                alert('Admin signedUp successfully')
                window.location="/"
               
            }catch(err){
                console.log("error something");
                console.log(err);
                
            }
           

        }}
        >
          SignUp
        </Button>
      </Card>
      </center>
    </div>
  );
};

export default Signup;
