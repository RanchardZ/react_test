import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { productapp } from './reducers/index'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import App from './components/App';

const logger = createLogger();
const store = createStore(productapp, 
	applyMiddleware(thunk, promise, logger)
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
