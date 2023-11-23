import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Header from './Component/Header/Header.jsx';
import Home from './Component/Home/Home.jsx';
const router= createBrowserRouter([
  {   
    path:"/",
  element: <App></App>,
  children: [
    {
      path: "about",
      element: <About></About>
    },
    {
      path: "/contact",
      element: <Contact></Contact>
    },
  ]

  }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
