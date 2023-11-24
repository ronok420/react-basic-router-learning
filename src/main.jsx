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
import First from './Component/Fist/First.jsx';
import Loaddata from './Component/Loaddata/Loaddata.jsx';
import Userdetails from './Component/Userdetail/Userdetails.jsx';
import Post from './Component/Post/Post.jsx';
import Singlepost from './Component/Singlepost/Singlepost.jsx';

const router= createBrowserRouter([
  {   
    path:"/",
  element: <Home></Home>,
  children: [
    {
      path: "/",
      element: <First></First>
    },
    {
      path: "about",
      element: <About></About>
    },
    {
      path: "/contact",
      element: <Contact></Contact>
    },
    
    {
      path: "/data",
      element: <Loaddata></Loaddata>,
      
      loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      
  
      
    },
    {
      path: "/userdetais/:id",
      element: <Userdetails></Userdetails>,
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    },
    {
      path:"/post",
      element:<Post></Post>,
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts')
    },
    {
      path:"/post/:id",
      element:<Singlepost></Singlepost>,
      loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    }
  ]

  }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
