import * as React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

import SplashComponent from './splash/splash';
import LoginFormComponent from './session/login';
import SignupFormComponent from './session/signup';


const App = () => (

    <Switch>
        <AuthRoute path="/login" component={LoginFormComponent} />
        <AuthRoute path="/register" component={SignupFormComponent} />
        <Route path="/" component={SplashComponent} />
    </Switch>
);
export default App;