import './assets/css/_main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './app/store'

import App from './app/'

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware( thunk )
)

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('app')
)