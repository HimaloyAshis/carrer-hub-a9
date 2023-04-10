import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter,RouterProvider}  from 'react-router-dom'

import ErrorPage from './components/ErrorPage/ErrorPage'
import Statistics from './components/Statistics/Statistics'
import Blog from './components/Blog/Blog'
import Home from './components/Home/Home'
import JobCategory from './components/JobCategory/JobCategory'
import FeatureJob from './components/FeatureJob/FeatureJob'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    errorElement : <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=>fetch('category.json'),

      },
      {
        path:'feature',
        element: <FeatureJob></FeatureJob>,
        loader: ()=>fetch('featureJobs.json')
      },
      {
        path:'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path:'blog',
        element:<Blog></Blog>,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
