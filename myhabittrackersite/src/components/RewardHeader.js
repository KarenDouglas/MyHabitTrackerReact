import React, { useContext} from "react";
import { postRewards, deleteReward , addRewards} from "../actions/rewards";
import { useDispatch } from "react-redux";
import { AuthContext } from "../shared/auth-context";
import { useHttpClient } from '../shared/http-hook';



const RewardHeader = ({rewardInputText,rewardCostInput,setRewardInputText,setRewardCostInput, rewards, setRewards,points, setPoints, }) => {
    const auth = useContext(AuthContext);
   const{ isLoading, error, sendRequest, clearError} = useHttpClient();

    const dispatch = useDispatch();
    const rewardInputTextHandler =(e) =>{
        console.log(e.target.value);
        setRewardInputText(e.target.value)
        
       
    }

    const rewardCostInputTextHandler =(e) =>{
        console.log(e.target.value);
        setRewardCostInput(e.target.value)
       
    }

    const submitRewards = async (e) => {
        e.preventDefault();
        setRewards([...rewards, { text: rewardInputText , cost: rewardCostInput, purchased: false}]);
       
        const formData= {text: rewardInputText , cost: rewardCostInput, purchased: false , user: auth.userId}
    try {
        await sendRequest('http://localhost:5000/rewards', 
        'Post',
        JSON.stringify(formData),
        {
          'Content-Type': 'application/json'            
        },
    );
  
      } catch (err) {
        alert(err.message)
      }
        
        setRewardInputText("");


        
        // dispatch(postRewards(rewardInputText, rewardCostInput,null));
        // setTimeout( ()=> {
        //     fetch('http://localhost:8001/rewards/')
        //     .then(response => {
        //         if (response.ok) {
        //             return response;
        //         } else {
        //             const error = new Error(`Error ${response.status}: ${response.statusText}`);
        //             error.response = response;
        //             throw error;
        //         }
        //     },
        //     error => {
        //         const errMess = new Error(error.message);
        //         throw errMess;
        //     }
        // )
        //         .then(response => response.json())
        //         .then(rewards => {
        //          setRewards(rewards);
        //      })
        //         .then(rewards => { 
        //             dispatch(addRewards(rewards));
        //          })
                
                
        //         .catch(error => {
        //             console.log('post reward', error.message);
        //         });
        // }, 3000)
       
    }
    return (
        <React.Fragment>
        <div>Total Points:  {points} </div>
        <form className="rewards-form">
          <input placeholder= "Enter Reward" value={rewardInputText}onChange ={rewardInputTextHandler} required type="text" className="reward-input"/>
          <input placeholder= "add pts" required type="number" value= {rewardCostInput} onChange={rewardCostInputTextHandler} className="rewardCost-input"/>
          <button className= "rewards-button" type="submit" onClick ={submitRewards}><i className="fa fa-plus-circle fa-lg"/></button>
        </form>
        </React.Fragment>

    );
}
 
export default RewardHeader;