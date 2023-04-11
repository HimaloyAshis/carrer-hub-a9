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
import ViewDetail from './components/VeiwDetail/ViewDetail'
import AppliedAllJob from './components/AppliedAllJob/AppliedAllJob'
import { jobDetail } from './components/jobDetails/jobDetail'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    errorElement : <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=>fetch('/category.json'),

      },
      {
        path:'feature',
        element: <FeatureJob></FeatureJob>,
        // loader: ()=>fetch('/featureJobs.json'),
      },
      {
        path:'viewDetail/:DetailId',
        element:<ViewDetail></ViewDetail>,
        loader: ()=>fetch('/featureJobs.json')
      },
      {
        path:'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: 'appliedJob',
        element: <AppliedAllJob></AppliedAllJob>,
        loader:jobDetail,
      },
      {
        path:'blog',
        element:<Blog></Blog>,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router}></RouterProvider>
  
)
