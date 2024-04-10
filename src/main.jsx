import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import Privacy from '../pages/Privacy.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { TermsConditions } from '../pages/TermsConditions.jsx';
import Refund from '../pages/Refund.jsx';
import CustomerSupport from '../pages/CustomerSupport.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/privacy',
    element:<Privacy />
  },
  {
    path:"/terms-and-conditions",
    element:<TermsConditions />
  },
  {
    path:"/refund",
    element:<Refund/>
  },
  {path:"/customerSupport",
element:<CustomerSupport/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
