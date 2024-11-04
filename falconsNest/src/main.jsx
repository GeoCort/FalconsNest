import { StrictMode } from 'react'
import { createRoot} from "react-dom/client"
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './error-page.jsx'
import Authors from "./components/Authors.jsx"
import About from "./components/About.jsx"
import Login from './components/Login.jsx'
import './output.css'
import SpecificBlog from './components/SpecificBlog.jsx'
import Signup from './components/Signup.jsx'
const router = createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<ErrorPage/>
},
{
  path:"/signup",
  element:<Signup/>,
  errorElement:<ErrorPage/>
},
{
  path:'/login',
  element:<Login/>,
  errorElement:<ErrorPage/>
},
{
  path:"/authors",
  element:<Authors/>,
  errorElement:<ErrorPage/>
},
{
  path:'/about',
  element:<About/>,
  errorElement:<ErrorPage/>
},{
  path:"/blog/",
  element:<SpecificBlog/>,
  errorElement:<ErrorPage/>
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
