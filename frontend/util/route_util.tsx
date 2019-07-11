import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';

//Logged out can go to component
const Auth = ({ component: Component, path, loggedIn, exact }) => {
    return (
        <Route path={path} exact={exact} render={(props) => (
            loggedIn ? (<Redirect to="/" />) : (<Component {...props} />)
        )} />
    )
};

//Logged in can go to component
const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (<Component {...props} />) : (<Redirect to="/" />)
    )} />
);

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));