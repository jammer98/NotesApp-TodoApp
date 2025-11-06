import HomePage from './Components/HomePage'
import { Route, Routes } from 'react-router'
import LoginPage from './Components/LoginPage'
import Register from './Components/Register.jsx'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </>
  )
}

export default App
