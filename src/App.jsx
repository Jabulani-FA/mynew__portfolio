import "./App.css";
import HomeBody from "./components/HomeBody";
import {Routes, Route} from 'react-router'
import ErrorPage from "./components/404";
import Profile from "./components/Profile";
import Testimonial from "./components/Testimonial"
import Contact from "./components/Contact"
import Certification from "./components/Certification"

function App() {
  // const [theme, settheme] = useState("dark")

  // <div className={theme === "dark"?"main": "main-light"}>
  // <p>change theme: <span onClick={() => settheme(theme==="dark"?"light":"dark")}>{theme && theme==="dark"?"light": "dark"}</span></p>
  return (
    <div className="main jura-uniq">
      <Routes>
        <Route path="/" element={<HomeBody/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/testimonial" element={<Testimonial/>}/>
        <Route path="/certification" element={<Certification/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
