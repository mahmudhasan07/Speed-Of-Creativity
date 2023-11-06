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
import UpdateInfo from './Components/Assignments/UpdateInfo.jsx';
import Privetrouter from './Components/Router/Privetrouter.jsx';
import Takeassignment from './Components/Takeassignment/Takeassignment.jsx';
import Submittedassignment from './Components/Submitassignment/Submittedassignment.jsx';
import GivenMarks from './Components/GiverMarks/GivenMarks.jsx';
import MyAssignment from './Components/MyAssignment/MyAssignment.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/add-assignment',
        element: <Privetrouter><AddItem></AddItem></Privetrouter>
      },
      {
        path: '/assignments',
        element: <Assignments></Assignments>,
        loader: async () => await fetch('http://localhost:5000/items')
      },
      {
        path: '/my-assignment',
        element : <MyAssignment></MyAssignment>,
        loader : ()=> fetch(`http://localhost:5000/submitted-assignment`)
      },
      {
        path: '/search/:text',
        element: <Assignments></Assignments>,
        loader: async () => await fetch('http://localhost:5000/items')
      },
      {
        path: '/assignment/info/:title',
        element: <Privetrouter><AssignmentInfo></AssignmentInfo></Privetrouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/items/info/${params.title}`)
      },
      {
        path: '/assignment/update/:id',
        element: <Privetrouter><UpdateInfo></UpdateInfo></Privetrouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/items/update/${params.id}`)
      },
      {
        path: "/submit-assignment/:id",
        element: <Privetrouter><Takeassignment></Takeassignment></Privetrouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/items/${params.id}`)
      },
      {
        path: "/submitted",
        element: <Privetrouter><Submittedassignment></Submittedassignment></Privetrouter>,
        loader: () => fetch('http://localhost:5000/submitted-assignment')
      },
      {
        path: `/given-marks/:id`,
        element: <GivenMarks></GivenMarks>,
        loader: ({ params }) => fetch(`http://localhost:5000/submitted-assignment/${params.id}`)
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
