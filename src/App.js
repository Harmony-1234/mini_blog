import Navbar from "./navbar.js";
import Home from "./home.js";

function App() {
//   const name = "John Doe"; // Example name, replace with actual name variable if needed
//   const age = 30; // Example age, replace with actual age variable if needed
//  const numbers = [1, 2, 3, 4, 5]; // Example array of numbers, replace with actual data if needed
// const person = {
//   name: "John Doe",
//   age: 30,
  
// }; // Example person object, replace with actual data if needed
  return (
   <div className="App">
     <Navbar />
     <div className="content"><Home /> </div>
    







    {/* <div>
      <h1>My Blog</h1>
      <p>My name is {name}
      </p>
      <p>{name} is {age} years old</p>
      <p>{numbers}</p>
      <p>my name is {person.name} and i am  {person.age} years old</p>
    // </div> */}
   </div> 

  );
}

export default App;
