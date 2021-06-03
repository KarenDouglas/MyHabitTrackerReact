import {useState, useEffect} from "react";




const useFetch = (url) => {
    
    const [isLoading, setIsLoading]= useState(true);
    const [error, setError]= useState(null);
    const [data, setData]= useState(null);
    
    

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout (()=> {
            fetch(url, {signal: abortCont.signal})
                .then(res=> {
                    if(!res.ok){
                        throw Error("oops ... something went wrong :(");
                    }
                return res.json();
                })
                .then(data =>{
                    console.log(data);
                    setData(data);
                    setIsLoading(false);
                    setError(false);
                })
                .catch(err =>{
                    if (err.name === "AbortError"){
                        console.log("fetch aborted")
                    }else{
                        setError(err.message);
                        setIsLoading(false);
                    }
                })
        }, 1000);

      return () => abortCont.abort();
    },[url]);
    return {data, isLoading, error}
}

export default useFetch;