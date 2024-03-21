import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import {Greeting, Greeting2, App2} from './Greeting.jsx'
import './index.css'


import {SyncedInputs} from './exercise.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <SyncedInputs/>
  </React.StrictMode>,
)
