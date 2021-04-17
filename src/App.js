import React, { createContext, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Login from "./Components/Login/Login/Login";
import AddWashman from "./Components/Dashboard/AddWashman/AddWashman";
import AddService from "./Components/Dashboard/AddService/AddService";
import AddReview from "./Components/Dashboard/AddReview/AddReview";
import Settings from "./Components/Dashboard/Settings/Settings";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute"

export const UserContext = createContext();

function App() {

    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/home">
                        <Home></Home>
                    </Route>

                    <PrivateRoute exact path="/dashboard/">
                        <Dashboard></Dashboard>
                    </PrivateRoute>

                    <PrivateRoute path="/appointment">
                        <Appointment></Appointment>
                    </PrivateRoute>

                    <PrivateRoute path="/dashboard/appointment">
                        <Dashboard></Dashboard>
                    </PrivateRoute>

                    <Route path="/dashboard/addService">
                        <AddService></AddService>
                    </Route>

                    <Route path="/dashboard/addWashman">
                        <AddWashman></AddWashman>
                    </Route>

                    <Route path="/dashboard/addTestimonial">
                        <AddReview></AddReview>
                    </Route>    

                    <Route path="/dashboard/settings">
                       <Settings></Settings>
                    </Route>            
                    
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;