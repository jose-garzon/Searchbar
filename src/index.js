import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { App } from '@components/App'
import { generateStore } from '@store'

const store = generateStore()

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()

if (module.hot) {
  module.hot.accept('@components/App', () => render())
}
