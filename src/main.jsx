import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Home from './pages/Home.jsx';
import './index.css'

import { ThemeProvider } from '@material-tailwind/react';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
)
