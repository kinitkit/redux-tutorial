import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { authenticate } from '../../functions/Authenticator';

const AppPrivateRouter = ({ component: Component, ...rest }) => {

    // const isLoggedIn = authenticate();
    const isLoggedIn = true;

    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                    )
            }
        />
    )
}

export default AppPrivateRouter;
