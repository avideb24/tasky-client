import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import Dashboard from './Dashboard.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import TaskForm from './TaskForm.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'


const queryClient = new QueryClient()

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/addTask',
        element: <TaskForm></TaskForm>
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={routes}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
