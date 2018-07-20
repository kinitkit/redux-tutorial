import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Home from '../../pages/home';
import Sidebar from '../../includes/sidebar';

const PrivateLayout = () => (
    <div className="wrapper">
        <Sidebar />
        <main id="main-container">
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </main>
    </div>
)

export default PrivateLayout;