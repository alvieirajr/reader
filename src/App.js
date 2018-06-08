import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PagePostsList from './components/PagePostsList';
import PageSinglePost from './components/PageSinglePost';
import PagePostsByCategory from './components/PagePostsByCategory';
import PageError from './components/PageError';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>      
        <Route exact path="/" component={PagePostsList} />
        <Route exact path="/:category" component={PagePostsByCategory} />
        <Route exact path="/:category/:post_id" component={PageSinglePost} />
        <Route render={() => <PageError/>} />
      </Switch>
    </Router>

  </Provider>
);

export default App;
