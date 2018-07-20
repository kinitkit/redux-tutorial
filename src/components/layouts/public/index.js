import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Login from '../../pages/login';


const PublicLayout = () => (
    <main id="main-container">
        <Switch>
            <Route exact path='/login' component={Login} />
        </Switch>
    </main>
)

export default PublicLayout;