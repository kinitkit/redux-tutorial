import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { authenticate } from '../../functions/Authenticator';

const AppPublicRouter = ({ component: Component, ...rest }) => {

    const isLoggedIn = true;

    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ? (
                    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                ) : (
                        <Component {...props} />
                    )
            }
        />
    )
}

export default AppPublicRouter;