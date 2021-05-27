import React, { useState , useEffect } from 'react';


const DateTime = () => {
    const [date, setDate]= useState(new Date ());

    useEffect(()=>{
        const timer = setInterval(()=> setDate(new Date ()), 1000)
        const day = setInterval(()=> setDate(new Date ()),  86400)
        return function cleanup(){
            clearInterval(timer)
        }
    });
    return (
        <div>
            <p>Time : {date.toLocaleTimeString()}</p>
            <p> Date : {date.toLocaleDateString()}</p>
        </div>
    );
}
 
export default DateTime;