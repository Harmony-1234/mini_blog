import { useEffect, useState } from "react";
import BlogList from "./bloglist";
import useFetch from "./usefetch";


const Home = () => {
   const {data: blog, isLoading, error} = 
   useFetch("http://localhost:8000/blogs");
// const [blog, setBlog]= useState(null)
// const [isLoading, setIsLoading] =useState(true)
// const [error, setError] = useState(null)
    
//    const[blog, setBlog] = useState([
//     {title: "my new story",
//         body: "lorem ispum",
//         author: "Tunchi",
//         id:1
//     },
//      {title: "Welcome back",
//         body: "lorem ispum",
//         author: "Malvin",
//         id:2
//     },
//      {title: "good bye",
//         body: "lorem ispum",
//         author: "Harmony",
//         id:3
//     },
//      {title: "fall apart",
//         body: "lorem ispum",
//         author: "Precious",
//         id:4
//     } 
//    ])

//    const HandleDelete = (id) => {
//     const newblog = blog.filter((blog) => blog.id !== id)
//     setBlog(newblog)
// }


    return ( 
        <div className="Home">
            {error && <div>{error}</div>}
          {isLoading && <div>loading...</div>}
       { blog &&
        (<BlogList blog={blog}  title="All blogs"/>)}
             
        </div>

     );
}
 
export default Home;