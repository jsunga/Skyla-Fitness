import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Routes from './components/Routes'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Routes />, document.getElementById('root'))

serviceWorker.unregister()
