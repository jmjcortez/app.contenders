import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Homepage from "../components/homepage";
import Login from "../components/login";

const isTokenVerified = () => window.localStorage.getItem("JWT");

const PrivateRoute = ({ component: Component, isTokenVerified, ...rest }) => (
    <Route
    {...rest}
    render={props =>
        isTokenVerified() ? (
        <Component {...props} />
        ) : (
        <Redirect
            to={{
            pathname: "/"
            }}
        />
        )
    }
    />
);

const Router = () => (
    <Switch>
        <Route exact path='/login' isTokenVerified={isTokenVerified} component={Login}/>
        <PrivateRoute path="/homepage" isTokenVerified={isTokenVerified} component={Homepage} />
    </Switch>
)

export default Router;