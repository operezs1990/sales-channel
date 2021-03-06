import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { ClientRouter, RoutePropagator } from '@shopify/app-bridge-react';
import Account from './app/account/Account';
import Products from './app/products/Products';


const Routes = (props) => {
  const { history, location } = props;

  return (
    <>
      <ClientRouter history={history} />
      <RoutePropagator location={location} />
      <Switch>

        <Route path="/account">
          <Account />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route
          exact
          path="*"
          render={() => {
            return (
                <Redirect to="/account" />
            )
          }}
        />
      </Switch>
      
    </>
  );
};

export default withRouter(Routes);