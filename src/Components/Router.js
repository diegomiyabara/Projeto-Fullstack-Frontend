import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from "./Home/index";
import LoginPage from "./LoginPage/index";
import SignupPage from "./SignUpPage/index"

function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = "/login">
                    <LoginPage/>
                </Route>
                <Route exact path = "/signup">
                    <SignupPage/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router 