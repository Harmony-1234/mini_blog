import Navbar from "./navbar.js";
import Home from "./home.js";
import Bloglist from "./bloglist.js";
// import Home1 from "./home1";

function App() {

  
  return (
   <div className="App">
     <Navbar />
     <div className="content"
     ><Home />
     </div>
     {/* <Home1/> */}
  </div>
 
  );
}

export default App;
