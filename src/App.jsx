
import { Route, Routes } from 'react-router-dom'
import './App.css'
import StudentList from './pages/StudentList'
import AddStudent from './pages/AddStudent'


function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<StudentList/>}/>
      <Route path='/add' element={<AddStudent/>}/>
     </Routes>
    </>
  )
}

export default App
