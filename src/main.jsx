import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(

 // <React.StrictMode>
 <Provider store={store} >
  <GoogleOAuthProvider clientId="367151147494-j6lk75r66jqi8k7kdn09vi9fb9vgdrco.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </Provider>
  //</React.StrictMode>,
)
