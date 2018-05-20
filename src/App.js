import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AllPosts from './components/AllPosts';
import PostDetails from './components/PostDetails';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={AllPosts} />
        <Route exact path="/:category/:post_id" component={PostDetails} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </Router>

  </Provider>
);

export default App;
