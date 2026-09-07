import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { addStudentAPI } from '../services/allApi'

function AddStudent() {
  const { id } = useParams()

  const [student, setstudent] = useState({
    name: "", age: "", course: "", email: ""
  })

  const handlesubmit = async (e) => {
    e.preventDefault();

    const response = await addStudentAPI(student)
    if (response.status == 201) {
      alert("student added")
    }
  }
  return (
    <div className='container my-5 '>
      <div className='d-flex align-items-center justify-content-center'>
        <form>
          <h1 className='mb-2'>Add student</h1>
          <input onChange={(e) => setstudent({ ...student, name: e.target.value })} type='text' className='form-control mb-3' placeholder='name'></input>
          <input onChange={(e) => setstudent({ ...student, age: e.target.value })} type='number' className='form-control mb-3' placeholder='age'></input>
          <input onChange={(e) => setstudent({ ...student, course: e.target.value })} type='text' className='form-control mb-3' placeholder='course'></input>
          <input onChange={(e) => setstudent({ ...student, email: e.target.value })} type='email' className='form-control mb-3' placeholder='email'></input>
          <div>
            <button onClick={handlesubmit} className='btn btn-info '>ADD</button>
            <Link to={'/'}  className='btn btn-dark  '>BACK</Link>
          </div>
        </form>
      </div>
    </div >
  )
}

export default AddStudent
