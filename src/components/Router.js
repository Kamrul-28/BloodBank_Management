import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AddDonor from "./pages/AddDonor";
import Banner from "./Banner";
import Home from "./Home";
class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/addDonor" component={AddDonor}/>
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default Router;