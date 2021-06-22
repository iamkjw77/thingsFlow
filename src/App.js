import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../src/components/Header';
import Home from '../src/pages/Home';
import IssueDetail from '../src/pages/IssueDetail';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/:issueNumber" component={IssueDetail} />
      </Switch>
    </>
  );
}

export default App;
