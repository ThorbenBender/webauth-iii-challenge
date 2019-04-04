import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import * as types from './components/actions/index';
import rootReducer from './components/reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const customMiddleWareToSaveUserToken = (store) => (next) => (action) => {
	if (action.type === types.LOGIN_SUCCESS) {
		localStorage.setItem('token', action.payload);
	}
	next(action);
};

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, logger, customMiddleWareToSaveUserToken),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
