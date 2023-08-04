import axios from 'axios';
import React from 'react'
import { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom';
const Course = () => {
    let {courseId}=useParams();
    const [courses,setCourses]=useState([]);
    useEffect(() => {
        const courseName = async () => {
          try {
            const courses = await axios.get("http://localhost:3000/admin/courses", {
              headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            
            // const d= courses.data.courses[1];
            // console.log(d);
            setCourses(courses.data.courses)
          } catch (err) {
            console.log("error at courses.jsx");
            console.log(err);
          }
        };
    
        courseName();
      }, []);


      
      console.log(courses.length);
     

      let course=null;
      if(courses.length == 0 ){
        console.log("rrrrrrrrrrrr");
        return <>Loading..</>
      }
      
      console.log(courses[0]._id);
      console.log(courseId);
      for(let i=0;i<courses.length;i++){
        if(courses[i]._id == courseId ){
        course=courses[i]
        }
      
    }

   
  
    
  return (
    <div>
      
      {JSON.stringify(courses)}
      <br /><br />
      {JSON.stringify(course)}
    </div>
  )
}

export default Course
