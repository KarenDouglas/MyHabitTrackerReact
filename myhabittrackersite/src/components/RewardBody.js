import React from "react";
import Rewards from "./Rewards";


const RewardBody = ({rewards, points, setPoints, setRewards}) => {
    return (
        <div className="reward-container">
            <ul className ="rewards-list">
            {rewards.map(reward => (
                <Rewards
                reward={reward}
                rewards={rewards}
                setRewards={setRewards}
                points={points}
                setPoints={setPoints}
                />
            ))}

            </ul>
        </div>

    );
}
 
export default RewardBody;