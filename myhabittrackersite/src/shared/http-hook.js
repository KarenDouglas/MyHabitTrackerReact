import React, {useState, useCallback, useRef, useEffect} from 'react';

export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const activeHttpRequests = useRef([]);

    const sendRequest = useCallback(async (url, method = 'GET', body  = null, headers = {}) => {
            setIsLoading(true);
            const httpAbortCtrl = new AbortController();
            activeHttpRequests.current.push(httpAbortCtrl)
        try{
            const response = await fetch(url, {
                method,
                body,
                headers,
                signal: httpAbortCtrl.signal
                  
              })
      
              const responseData = await response.json();

              activeHttpRequests.current =  activeHttpRequests.current.filter(reqCtrl => reqCtrl !== httpAbortCtrl.abort());
      
              if(!response.ok){
                  throw new Error(responseData.message)
                }
                return responseData;
        } catch(err){
            setError(err.message || 'Something went wrong! Please, try again.')
            throw err
            setIsLoading(false)
        }
       setIsLoading(false)
    }, [])

    const clearError = () =>{
        setError(null);
    }

    useEffect(() => {
      return () => {
        activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort())
      };  
    },[])
    return { isLoading, error, sendRequest};
};