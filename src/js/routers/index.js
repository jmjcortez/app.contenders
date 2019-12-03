import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LandingPage from "../components/landing-page";
import Login from "../components/login";
import Homepage from '../components/homepage';
import Register from '../components/register';

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
        <Route exact path='/register' isTokenVerified={isTokenVerified} component={Register}/>
        <Route exact path='/' isTokenVerified={isTokenVerified} component={LandingPage}/>
        <PrivateRoute path="/homepage" isTokenVerified={isTokenVerified} component={Homepage} />
    </Switch>
)

export default Router;