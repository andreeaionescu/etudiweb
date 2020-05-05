import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';

const store = createStore(
    rootReducer,
    composeWithDevTools()
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);