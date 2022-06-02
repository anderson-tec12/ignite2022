import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'


const ElementInBody = document.getElementById('root')

ReactDOM.createRoot(ElementInBody).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
