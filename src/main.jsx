import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './Home.jsx';
import Connect from './Contact/Connect.jsx';
import About from './about file/About.jsx';
import Gallery from './gallery file/Gallery.jsx';
import Places from './places/Places.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path: "/contact",
        element:   <Connect></Connect>    ,
      },
      {
        path: "/about",
        element:  <About></About>     ,
      },
      {
        path: "/gallery",
        element:  <Gallery></Gallery>  ,
      },
      {
        path: "/places",
        element:  <Places></Places>   ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
