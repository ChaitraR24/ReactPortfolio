import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.js";
import Home from "./Components/Home/Home.js"
import Contact from "./Components/Contacts/Contact.js"
import About from "./Components/About/About.js";
// import Projects from "./Components/Projects/Projects.js";
import Education from "./Components/Education/Education.js"



function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="education" element={<Education/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Routes>
   </Router>
  );
}
export default App;
