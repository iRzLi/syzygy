import * as React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

import SplashComponent from './splash/splash';
import LoginFormComponent from './session/login';
import SignupFormContainer from './session/signup_container';


const App = () => (

    <Switch>
        <AuthRoute path="/login" component={LoginFormComponent} />
        <AuthRoute path="/register" component={SignupFormContainer} />
        <Route path="/" component={SplashComponent} />
    </Switch>
);
export default App;