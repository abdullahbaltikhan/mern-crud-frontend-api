import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserList from './components/UserList'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList />}></Route>
        <Route path='/createuser' element={<CreateUser />}></Route>
        <Route path='/update/:id' element={<UpdateUser />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
