import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Category from "./views/Category/Category";

const router =  createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
{ 
  path: '/about',
    element: <About />
},
{
  path: '/category',
  element: <Category />
},
{
  path: '/contact',
  element: <Contact />
}])

// function App() {
//   const path = window.location.pathname;

//   switch (path) {
//     case "/":
//       return <Home />
//     case "/about":
//       return <About />
//     case "/contact":
//       return <Contact />
//     default:
//       return <h1>Ye Path Galat Hai.....</h1>
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< RouterProvider router={ router} />);


