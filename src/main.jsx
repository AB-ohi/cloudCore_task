import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import './index.css';
import Router from './Router/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
