import axios from 'axios';
import React from 'react'
import { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom';
import { Card, Typography,TextField,Button} from "@mui/material";
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
    
      
      // console.log(courses[0]._id);
      // console.log(courseId);
      for(let i=0;i<courses.length;i++){
        if(courses[i]._id == courseId ){
        course=courses[i]
        }
      
    }
    if(!course){
      console.log("rrrrrrrrrrrr");
      return <>Loading..</>
    }
   
  
    
  return (
    <div>
     <CourseCard course={course}/>
     <UpdateCard course={course}/>
    </div>
  )
}



function UpdateCard({course}){
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  
return <div>
<center>
<Card variant={"outlined"} style={{ width: 400, padding: 20,marginTop:10 }}>
<Typography>Update course details</Typography>
<TextField
  fullWidth={true}
  id="outlined-basic"
  label="Title"
  variant="outlined"
  onChange={(e)=> {
    setTitle(e.target.value)
  }}
/>
   <TextField
  fullWidth={true}
  id="outlined-basic"
  label="Description"
  variant="outlined"
  onChange={(e)=> {
    setDescription(e.target.value)
  }}
/>

<TextField
  
  onChange={(e)=> {
    setImage(e.target.value)
  }}
  fullWidth={true}
  label="Image Link"
  variant="outlined"
/>


<Button size={"large"} 
variant="contained"
onClick={async()=>{
   
    try{
        await axios.put('http://localhost:3000/admin/courses/'+course._id, {title:title, description:description,imageLink:image},{headers:{Authorization:'bearer '+ localStorage.getItem('token')}});
        alert('course updated successfully')
        window.location="/course/"+course._id;
    }catch(err){
        console.log("error something");
        console.log(err);
    }
           }}
>
  Update Course
</Button>
</Card>
</center>
</div>

}
 
function CourseCard({course}){
  
  return <div style={{display:"flex",justifyContent:"center"}}>
   <Card style={{
    border: "2px solid black",
    margin:10,
    width:300,
   height:200
  }}>

     <Typography textAlign={"center"} variant="h6"> {course.title} </Typography>
     <Typography textAlign={"center"} variant="subtitle1"> {course.description} </Typography>
  <img src= {course.imageLink} style={{width:150}}></img> 
 
  </Card>
  </div>
}

export default Course
