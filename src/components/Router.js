import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AddDonor from "./pages/AddDonor";
import Home from "./Home";
import Contact from "./Contact";
import Team from "./Team";
import Donors from "./Donors"
import Login from "./pages/Login";
import BloodRequest from "./pages/BloodRequest";
import Search from "./pages/Search";

class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/addDonor" component={AddDonor}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/team" component={Team}/>
                    <Route path="/donors" component={Donors}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/bloodRequest" component={BloodRequest}/>
                    <Route path="/search" component={Search}/>
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default Router;