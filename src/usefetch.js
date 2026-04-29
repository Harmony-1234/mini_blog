import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setdata]= useState(null)
    const [isLoading, setIsLoading] =useState(true)
    const [error, setError] = useState(null);
    // const url ="http://localhost:8000/blogs"
    useEffect(() =>{
    setTimeout(() => {
         fetch(url)
    .then((response) =>{
        return response.json();
        if(!response.ok){
            throw Error("waiting for data to load")
        }
    })
    .then((data) => 
     { setdata(data)
        setIsLoading(false)
        setError(null);})

        .catch((error) =>
            {setIsLoading(false);
            setError(error.message);})
    }, 1000);

   
}, []);

return {data, isLoading, error}

};
  
export default useFetch;