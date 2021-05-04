import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { GridPage, WorkoutDetailPage } from './containers';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={GridPage} />
      <Route path="/workout/:id" exact component={WorkoutDetailPage} />
    </Switch>
  );
};

export default withRouter(App);
