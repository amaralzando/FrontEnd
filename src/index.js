import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './input.css';

import Home from './pages/Home';
import Layout from './containers/Layout';
import EncurtadorLink from './pages/EncurtadorLink';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />, 
    children: [
      { path: '/', element: <Home /> },
      { path: '/Home', element: <Home />},
      { path: '/EncurtadorLink', element: <EncurtadorLink /> },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
