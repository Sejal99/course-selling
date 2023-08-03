import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import axios from "axios";
const AppBar = () => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    const emailName = async () => {
      try {
        const email = await axios.get("http://localhost:3000/admin/me", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        console.log(email);
        setEmail(email.data.username);

        console.log(email);
      } catch (err) {
        console.log("error at appbar.jsx");
        console.log(err);
      }
    };

    emailName();
  }, []);

  
  if (email) {
    
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 4,
        }}
      >
        <div>
          <Typography variant={"h6"}>Coursera</Typography>
        </div>

        <div style={{ display: "flex" }}>
        <div>{email}</div>
          <div style={{ marginRight: 10 }}>
            <Button
              variant="contained"
              onClick={() => {
               localStorage.setItem("token",null);
               window.location="/"
              }}
            >
           Logout
            </Button>
          </div>

          
       
      </div>
      </div>
    
    )
    
  } 
   
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 4,
        }}
      >
        <div>
          <Typography variant={"h6"}>Coursera</Typography>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 10 }}>
            <Button
              variant="contained"
              onClick={() => {
                window.location = "/signup";
              }}
            >
              SignUp
            </Button>
          </div>

          <div>
            <Button
              variant="contained"
              onClick={() => {
                window.location = "/signin";
              }}
            >
              SignIn
            </Button>
          </div>
        </div>
      </div>
    );
  
            }
          


export default AppBar;
