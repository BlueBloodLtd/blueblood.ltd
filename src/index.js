import 'react-app-polyfill/ie11'
import React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from 'reducers'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from 'containers/App'
import registerServiceWorker from './registerServiceWorker'
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
