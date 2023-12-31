import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from './component/Login.jsx';
import SignUp from './component/SignUp.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App/>} >
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
