import React, {useState}  from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {NavLink} from 'react-router-dom'




const Features = () => {
    

    return (
        <React.Fragment>
        <div className="background">
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3">
                        <h4 className="text-center blurb-header">Gamify / Habits</h4>
                            <p className="d-xs-none d-md-block text-center blurb-body">Building habits is difficult, but so is the Hero's Journey. Let's gamify the adventure!</p>    
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div id="features" className="card-deck">
                <div className="card bg-transparent ">
                    <div className="card-body">
                        <h5 className="card-title">Add Daily Tasks</h5>
                        <p className="d-xs-none d-md-block card-text">Plan your adventures, add tasks to your todo list to map out your journey!</p>
                    </div>
                </div>  
                <div className="card bg-transparent ">
                    <div className="card-body">
                    <h5 className="card-title">Add Habits</h5>
                        <p className="d-xs-none d-md-block card-text">Heade the hero's call, add your habits to begin your quest!</p>
                        
                    </div>
                </div>
                <div className="card bg-transparent ">
                    <div className="card-body">
                    <h5 className="card-title">Check Your Progress</h5>
                        <p className="d-xs-none d-md-block card-text">Track progression with live metrics! Meet your goals to gain INFINITE POWER!</p>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}
 
export default Features;