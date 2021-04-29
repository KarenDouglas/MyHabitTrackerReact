import React from 'react';
import SignUpForm from './signup';





const Features = () => {
    

    return (
        <React.Fragment>
        <div className="background-gamify">
            <div className="container">
                <div className="row">
                    <div className="col-6 features-gamify">
                        <h4 className="text-center blurb-header">Gamify Your  Habits</h4>
                            <p className="d-xs-none d-md-block text-center blurb-body">Building habits is difficult, but so is the Hero's Journey. Let's gamify the adventure!</p>    
                    </div>
                </div>
            </div>
        </div>
        <div className="background-cards">
            <div id="features" className="card-deck">
                <div className="card">
                    <div className="card-body features-card1">
                        <h5 className="card-title">Add Daily Tasks</h5>
                        <p className="d-xs-none d-md-block card-text">Plan your adventures, add tasks to your todo list to map out your journey!</p>
                    </div>
                </div>  
                <div className="card">
                    <div className="card-body features-card2">
                    <h5 className="card-title">Add Habits</h5>
                        <p className="d-xs-none d-md-block card-text">Heade the hero's call, add your habits to begin your quest!</p>
                        
                    </div>
                </div>
                <div className="card">
                    <div className="card-body features-card3">
                    <h5 className="card-title">Check Your Progress</h5>
                        <p className="d-xs-none d-md-block card-text">Track progression with live metrics! Meet your goals to gain INFINITE POWER!</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="background-signup">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 col-12 get-start">
                    <p>Get Started On Your Journey Today!</p>
                    </div>
                    <div className="col col-md-6 col-12">
                        <SignUpForm/>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}
 
export default Features;