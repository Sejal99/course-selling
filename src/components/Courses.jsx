import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";
import { Card, Typography } from "@mui/material";
const Courses = () => {

    const [courses,setCourses]=useState([]);
    useEffect(() => {
        const courseName = async () => {
          try {
            const courses = await axios.get("http://localhost:3000/admin/courses", {
              headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            
            console.log(courses);
            setCourses(courses.data.courses)
          } catch (err) {
            console.log("error at courses.jsx");
            console.log(err);
          }
        };
    
        courseName();
      }, []);

  return (

    <div>
      {courses.map((course)=>{
        return <Course course={course}/>
      }
      
      )}
    </div>
  )
}

function Course({course}){
    return <Card style={{
      border: "2px solid black",
      margin:10,
      width:300,
      minHeight:200
    }}>

       <Typography textAlign={"center"} variant="h6"> {course.title} </Typography>
       <Typography textAlign={"center"} variant="subtitle1"> {course.description} </Typography>
    </Card>
}
export default Courses
