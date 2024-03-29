import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initFirebase } from './firebase/firebaseConfig.js'

initFirebase()
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
