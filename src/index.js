import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import configureStore from './store/configureStore';
import * as PostActions from './actions/PostActions';

import { Provider } from 'react-redux';

const store = configureStore();
//store.dispatch(PostActions.fetchPosts());

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>, document.getElementById('root'));

