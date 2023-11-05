import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from './Components/User/Login.jsx';
import Registration from './Components/User/Registration.jsx';
import AddItem from './Components/AddItem/AddItem.jsx';
import Errorpage from './Components/ErrorPage/Errorpage.jsx';
import ContextAPI from './Components/ContextAPI/ContextAPI.jsx';
import Assignments from './Components/Assignments/Assignments.jsx';
import Home from './Components/Home/Home.jsx';
import AssignmentInfo from './Components/Assignments/AssignmentInfo.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path: '/add-assignment',
        element: <AddItem></AddItem>
      },
      {
        path : '/assignments',
        element : <Assignments></Assignments>,
        loader : async()=> await fetch('http://localhost:5000/items')
      },
      {
        path :'/assignment/info/:title',
        element : <AssignmentInfo></AssignmentInfo>,
        loader : async()=> await fetch(``)
      },
      {
        path :'/assignment/update/:id',
        element : <AssignmentInfo></AssignmentInfo>,
        loader : async()=> await fetch(``)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextAPI>
      <RouterProvider router={router}></RouterProvider>
    </ContextAPI>
  </React.StrictMode>,
)
