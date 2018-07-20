import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Routers
import AppPublicRouter from './components/routes/public';
import AppPrivateRouter from './components/routes/private';

// Layouts
import PublicLayout from './components/layouts/public';
import PrivateLayout from './components/layouts/private';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser, apiRequest } from './actions/user-actions';
import { createSelector } from 'reselect';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <AppPublicRouter path='/login' component={PublicLayout} />
          <AppPrivateRouter path='/' component={PrivateLayout} />
        </div>
      </BrowserRouter>
    );
  }
}

const productsSelector = createSelector(
  state => state.products,
  products => products
),
  userSelector = createSelector(
    state => state.user,
    user => user
  );

const mapStateToProps = createSelector(
  productsSelector,
  userSelector,
  (products, user) => ({
    products,
    user
  })
),
  mapActionsToProps = {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
  };

export default connect(mapStateToProps, mapActionsToProps)(App);
