import React, { useState , useEffect } from 'react';
import moment from 'moment';


const DateTime = () => {
    const [date, setDate]= useState(new Date ());
    const [dateM, setDateM]= useState(moment().toString());
     
   
       
    
    useEffect(()=>{
        const timer = setInterval(()=> setDate(new Date ()), 1000)
        const day = setInterval(()=> setDate(new Date ()),  86400)
        return function cleanup(){
            clearInterval(timer)
        }
    });
    
   
    const monday= moment().day("Monday").startOf('day');
    const tuesday= moment().day("Tuesday").startOf('day');
    const wednesday= moment().day("Wednesday").startOf('day');
    const thursday= moment().day("Thursday").startOf('day');
    const friday= moment().day("Friday").startOf('day');
    const saturday= moment().day("Saturday").startOf('day');
    const sunday= moment().day("Sunday").startOf('day');
    if( moment().isAfter(moment().startOf("day")) && moment().isBefore(moment().startOf("day").add(3000)) ){
        console.log("this is better than torture")
    }

   if (saturday.isBefore(moment()) && moment().isBefore( saturday.add(3000))){
    console.log("this is the torture")
    console.log("this is the torture")
    console.log("this is the torture")
    console.log("this is the torture")
   }

    if(saturday == moment()){
        console.log("it's Saturday")
        console.log("it's Saturday")
        console.log("it's Saturday")
        console.log("it's Saturday")
    }

    //calender test
    // moment().calendar(null, {
    //     sameDay: function (now) {
    //       if (this.isBefore(now)) {
    //         return console.log("day 0");
    //       } else {
    //         return console.log("day 1");
    //       }
    //       /* ... */
    //     },
    //     nextDay: function(now){
    //         if (this.isBefore(now)) {
    //             return console.log("day 2");
                
    //           } else {
    //             return console.log("it didn't compute next day");
    //           }
    //     }
    //   });
    return (
        <div>
            <p>Time : {date.toLocaleTimeString()}</p>
            <p> Date : {date.toLocaleDateString()}</p>
           
        </div>
    );
}
 
export default DateTime;