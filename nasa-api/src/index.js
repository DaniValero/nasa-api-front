import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Potd from "./routes/Potd";
import Landing from "./routes/Landing"
import Neas from './routes/Neas'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root /> ,
    children: [
      {
        path: "/",
        element: <Potd />,
      },
      {
        path: "/landing",
        element: <Landing />,
      },
      {
        path: "/neas",
        element: <Neas />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

