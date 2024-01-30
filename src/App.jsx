import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import QnA from './components/QnA';
import TaskPlanner from './components/TaskPlanner';
import Home from './components/Home';

const router = createBrowserRouter([
    {
      path: '/',
      children: [
      
        {
          index: true,
          element: <Home/>
        },
        {
          path: '/qna',
          element: <QnA />
        },
        {
          path: '/taskplan',
          element: <TaskPlanner />
        }
      ]
    }
  ])
  
  function App() {
    return (
         
      <RouterProvider router={router} />
    );
  }
  
  export default App;