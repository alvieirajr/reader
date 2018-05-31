import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PostList from './components/PostList';
import Post from './components/Post';
import PostListByCategory from './components/PostListByCategory';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route exact path="/:category" component={PostListByCategory} />        
        <Route exact path="/:category/:post_id" component={Post} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </Router>

  </Provider>
);

export default App;
