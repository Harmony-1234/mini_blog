const BlogList = (props) => {
    const blog = props.blog;
    const title = props.title;
    return ( 
        <div> 
            <p className="allblogs">{title}

                             </p>
   {blog.map((blog) =>(
            <div className="blog-preview" key={blog.id}>
                             <h2>{blog.title}</h2>
                             <p>written by {blog.author}</p>
                 
                 {/* <button onClick={() => HandleDelete(blog.id)}>Delete Blog</button> */}
                
            </div>
        
            ) )}</div>
        
     );
}
 
export default BlogList;