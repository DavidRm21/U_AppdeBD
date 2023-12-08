import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import './styles/App.sass'
import { useState } from 'react'



function App() {

  return (
    <div className='app'>

      <RouterProvider router={router}/>
      
    </div>
  )
}

export default App
