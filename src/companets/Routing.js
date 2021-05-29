import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Hooks from "./hooks";
import emploer from "./emploer";
import lifecikle from "./lifecikle";
import NavBar from "./navBar";
const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={Hooks}/>
                    <Route path="/emploer" exact component={emploer}/>
                    <Route path="/lifecikle" exact  component={lifecikle}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Routing;