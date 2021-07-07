import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AddDonor from "./components/pages/AddDonor";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Donors from "./components/Donors"
import Login from "./components/pages/Login";
import BloodRequest from "./components/pages/BloodRequest";
import Search from "./components/pages/Search";
import EditProfile from "./components/pages/EditProfile";
import Profile from "./components/pages/Profile";
import Dashboard from "./components/admin/dashboard/dashboard";

class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/editProfile" component={EditProfile}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/addDonor" component={AddDonor}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/team" component={Team}/>
                    <Route path="/donors" component={Donors}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/bloodRequest" component={BloodRequest}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/:profile" component={Profile}/>
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default Router;