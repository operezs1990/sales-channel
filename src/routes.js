import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { ClientRouter, RoutePropagator } from '@shopify/app-bridge-react';

import Account from './components/Account';

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
      </Switch>
    </>
  );
};

export default withRouter(Routes);