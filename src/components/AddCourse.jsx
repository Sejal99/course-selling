import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import axios from 'axios'
const AddCourse = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
  return (
    <div>
        <center>
       <Card variant={"outlined"} style={{ width: 400, padding: 20,marginTop:10 }}>
        <TextField
          fullWidth={true}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          onChange={(e)=> {
            setTitle(e.target.value)
          }}
        />
        <br /> <br />
        <TextField
          fullWidth={true}
          id="outlined-basic"
          label="Description"
          variant="outlined"
          onChange={(e)=> {
            setDescription(e.target.value)
          }}
        />
        <br />
        <br />
        <Button size={"large"} 
        variant="contained"
        onClick={async()=>{
           
            try{
                await axios.post('http://localhost:3000/admin/courses', {title:title, description:description},{headers:{Authorization:'bearer '+ localStorage.getItem('token')}});
                alert('course added successfully')
            }catch(err){
                console.log("error something");
                console.log(err);
            }
                   }}
        >
          AddCourse
        </Button>
      </Card>
      </center>
    </div>
  )
}

export default AddCourse
