import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import App from './App.js';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports.js';
Amplify.configure(awsExports);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);