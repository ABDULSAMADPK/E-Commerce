import { useEffect, useState } from "react";

function useFetch(url) {
    const [products,setProducts] = useState([])
    const [isLoading,setIsLoading]= useState(true)
    useEffect(()=>{
      fetch(url)
      .then(response=>response.json())
      .then(result=>setProducts(result))
      .catch(error=>console.log('Error',error))
      setTimeout(() => {
        setIsLoading(false)
      }, 3000);
    },[url])
    return [products,isLoading]
}

export default useFetch