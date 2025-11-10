import HomePage from './Components/HomePage'
import { Route, Routes } from 'react-router'
import LoginPage from './Components/LoginPage'
import Register from './Components/Register.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Collaborate from './Components/Collaborate.jsx'
import AddNewIdea from './Components/AddNewIdea.jsx'
import Allideas from './Components/Allideas.jsx'
import Progress from './Components/Progress.jsx'
import User from './Components/User.jsx'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/Collaborate' element={<Collaborate/>} />
      <Route path='/AddNewIdea' element={<AddNewIdea/>} />
      <Route path='/Allideas' element={<Allideas/>} />
      <Route path='/Progress' element={<Progress/>} />
      <Route path='/User' element={<User/>} />
    </Routes>
    </>
  )
}

export default App
