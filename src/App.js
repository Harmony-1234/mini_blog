import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Navbar from "./navbar.js";
import Home from "./home.js";
import Bloglist from "./bloglist.js";
import Contact from "./contact.js";
import Newblog from "./newblog.js";
// import Home1 from "./home1";

function App() {

  
  return (

    <Router>
      <div className="App">
     <Navbar />
     <div className="content">
      <Routes>
        <Route path="/" element={<Home />} ></Route>
      </Routes>
      
     </div>
    <Routes>
      <Route path="/contact" element={<Contact/>}> </Route>
      <Route path="/newblog" element={<Newblog/>}></Route>

    </Routes>
   
  </div>
  </Router>

   
 
  );
}

export default App;
