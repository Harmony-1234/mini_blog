import { useState } from "react";

const Home = () => {
     const [name, setName] = useState("Harmony"); 
     const HandleClick = () => {
        setName("Jahwenma")
        setAge(16)
     }
     const [age, setAge] = useState("20")
    return ( 
        <div>
            <h2>Welcome Back</h2>
            {/* <p>Welcome to the home page of my blog!</p> */}
            <p>My name is {name}</p>
              <p>and I am {age } years old</p>
            <button onClick={HandleClick}>click me</button>
            
        </div>
     );
}
 
export default Home;