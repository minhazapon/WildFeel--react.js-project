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
import AuthContext from './firebaseFile/AuthContext.jsx';
import Login from './firebaseFile/Login.jsx'
import SignUp from './firebaseFile/SignUp.jsx';
import PrivateRoute from './firebaseFile/PrivateRoute.jsx'

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
        element: <PrivateRoute><Connect></Connect></PrivateRoute>       ,
      },
      {
        path: "/about",
        element:  <About></About>     ,
      },
      {
        path: "/gallery",
        element:  <PrivateRoute><Gallery></Gallery></PrivateRoute>   ,
      },
      {
        path: "/places",
        element: <PrivateRoute><Places></Places></PrivateRoute>     ,
      },
      {
        path: "/in",
        element:  <Login></Login>   ,
      },
      {
        path: "/up",
        element:   <SignUp></SignUp>   ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     
     <AuthContext>

     <RouterProvider router={router} />

     </AuthContext>

    
  </StrictMode>,
)
