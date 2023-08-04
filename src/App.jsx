import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import Signup from './components/signup';
import AppBar from './components/Appbar';
import AddCourse from './components/AddCourse';
import Courses from './components/Courses';
import Course from './components/Course';
function App() {
    return (
      <div style={{
        width:"100vw",
        height:"100vh",
        backgroundColor:"#eeeeee"
      }}>
        <AppBar/>
        <Router>
            <Routes>
                <Route path="/SignUp" element={<Signup />} />
                <Route path="/SignIn" element={<SignIn/>} />
                <Route path="/addcourse" element={<AddCourse/>} />
                <Route path="/course/:courseId" element={<Course/>} />
                <Route path="/courses" element={<Courses/>} />
            </Routes>
        </Router>
        </div>
    );
}

export default App;