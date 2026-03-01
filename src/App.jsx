import { Routes, Route, useLocation } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"


function App() {
  return (


    <Routes >

      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />


      <Route path='/home' element={<Home />} />
      <Route path='*' element={<div>Page Not Found</div>} />
    </Routes>


  )
}

export default App