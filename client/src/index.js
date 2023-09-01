import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './styles/theme.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'
import './styles/common.scss'

import App from './App';
import Login from './views/Login/login';
import Layout from './views/Layout/layout';
import Home from './views/Home/home';
import Category from './views/Category/category';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },{
        path: "/category",
        element: <Category />,
      },
    ],
  },{
    path: "/login",
    element: <Login />,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);


// import { getCategory } from './apis/testAPI'

// getCategory().then(res => {
//   console.log(res)
// })

