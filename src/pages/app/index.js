import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';
import Layout from '../layout/index';
import Main from '../main';
import NotFound from '../404';
import DataTable from '../table';
import AddData from '../add-data';
import DeleteData from '../delete-data';
import './index.less';

export const routeNames = {
  MAIN: '/',
  TABLE: '/table',
  ADD_DATA: '/add-data',
  DELETE_DATA: '/delete-data',
  NOT_FOUND_DEFAULT: '**'
};

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path={routeNames.MAIN} exact component={Main} />
            <Route path={routeNames.TABLE} exact component={DataTable} />
            <Route path={routeNames.ADD_DATA} exact component={AddData} />
            <Route path={routeNames.DELETE_DATA} exact component={DeleteData} />
            <Route path={routeNames.NOT_FOUND_DEFAULT} component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
