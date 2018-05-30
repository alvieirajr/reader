import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PostCollections from './components/PostCollections';


const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={PostCollections} />
        <Route exact path="/:category/:post_id" component={PostCollections} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </Router>

  </Provider>
);

export default App;
