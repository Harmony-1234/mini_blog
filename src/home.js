import { useState } from "react";



const Home = () => {
   const[blog, setBlog] = useState([
    {title: "my new story",
        body: "lorem ispum",
        author: "Tunchi",
        id:1
    },
     {title: "Welcome back",
        body: "lorem ispum",
        author: "Malvin",
        id:2
    },
     {title: "good bye",
        body: "lorem ispum",
        author: "Harmony",
        id:3
    },
     {title: "fall apart",
        body: "lorem ispum",
        author: "Precious",
        id:4
    } 
   ])
   const HandleDelete = (id) => {
    const newblog = blog.filter((blog) => blog.id !== id)
    setBlog(newblog)
}

 
   const HandleDeleteauthor = (id) => {
    const newblog = blog.filter((blog) => blog.author !== id)
    setBlog(newblog)
}
    
    return ( 
        <div className="Home">
          <div>{blog.map((blog) =>(
            <div className="blog-preview" key={blog.id}>
                             <h2>{blog.title}</h2>
                             <p>written be {blog.author}</p>
                 
                 <button onClick={() => HandleDelete(blog.id)}>Delete Blog</button>
                 <button onClick={() => HandleDeleteauthor(blog.author)}>Delete author</button>
            </div>
        
            ) )}</div>
            
        </div>
     );
}
 
export default Home;