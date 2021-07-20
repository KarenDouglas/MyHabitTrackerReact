import React from "react";
import { useDispatch } from "react-redux";
import { postRewards, deleteReward , addRewards} from "../actions/rewards";
import {setTotalPoints} from "../actions/points"


const Rewards = ({reward, points, setPoints, rewardCost, setRewardCost, rewardText, setRewardText,rewardInputText, rewardCostInput,setRewardInputText,setRewardCostInput, rewards, setRewards}) => {
    const dispatch = useDispatch();
    
    // rewards.map(reward=>{
    //  const  text = reward.text
    //    const cost= reward.cost
    //    const purchased= reward.purchased
    //    const id= reward.id
    //  return(text,cost,purchased, id)
    // })
    // const rewardInputTextHandler =(e) =>{
    //     console.log(e.target.value);
    //     setRewardInputText(e.target.value)
        
       
    // }

    // const rewardCostInputTextHandler =(e) =>{
    //     console.log(e.target.value);
    //     setRewardCostInput(e.target.value)
       
    // }
    
    // const submitRewards = (e) => {
    //     e.preventDefault();
    //     setRewards([...rewards, { text: rewardInputText , cost: rewardCostInput, purchased: false}]);
    //     console.log(JSON.stringify(rewards))
    //         dispatch(postRewards(rewardInputText, rewardCostInput,null));
           
        
    //     setRewardInputText("");
       
    // }
    const purchaseReward = () => {
        if(points >= reward.cost){
            setPoints(points - reward.cost)
        }else{
            alert("not enough points!!")
        }
                
        dispatch(setTotalPoints(points))  
      
        
    }
    const deleteRewards = () =>{
       setRewards(rewards.filter((el) => el.id !== reward.id));
        dispatch(deleteReward(reward.id))
        setTimeout( ()=> {
            fetch('http://localhost:8001/rewards/')
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
                .then(response => response.json())
                .then(rewards => {
                 setRewards(rewards);
             })
                .then(rewards => { 
                    dispatch(addRewards(rewards));
                 })
                
                
                .catch(error => {
                    console.log('post reward', error.message);
                });
        }, 3000)
      
    }

    return (

        <React.Fragment>
        {/* <div>Total Points:  {points} </div>
        <form className="rewards-form">
          <input placeholder= "Enter Reward" value={rewardInputText}onChange ={rewardInputTextHandler} required type="text" className="reward-input"/>
          <input placeholder= "add pts" required type="number" value= {rewardCostInput} onChange={rewardCostInputTextHandler} className="rewardCost-input"/>
          <button className= "rewards-button" type="submit" onClick ={submitRewards}><i className="fa fa-plus-circle fa-lg"/></button>
        </form> */}



        
                 
                   
                    <div className="rewards">
                        
                    <button 
                        className = "delete-btn"
                        onClick={deleteRewards}
                    >
                        <i className="fa fa-times-circle fa-lg"/>
                    </button>
                        <li className= "rewards-item">{reward.text}</li>
                    <button 
                       onClick= {purchaseReward}
                        className = "purchase-btn"
                    >
                        <i className="fa fa-check-circle fa-lg"/>
                        {reward.cost}
                    </button>
                    
                </div>
        </React.Fragment>
    );
}
 
export default Rewards;