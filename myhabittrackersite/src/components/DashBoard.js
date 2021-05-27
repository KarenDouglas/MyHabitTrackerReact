import React from "react";
import { addTodo } from "../redux/ActionCreators";
import DashboardGrid from "./DashboardGrid";
import Header from "./Header";


const Dashboard = () => {
    return (
        <React.Fragment>
            <Header/>
            <DashboardGrid
                
            />
        </React.Fragment>
    );
}
 
export default Dashboard;