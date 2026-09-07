import React, { useEffect, useState } from 'react'
import { deleteStudentAPI, getAllStudentAPI } from '../services/allApi'
import { Link } from 'react-router-dom';

function StudentList() {

  const [allStudents,setAllStudents]=useState([])
console.log(allStudents);

  useEffect(()=>{
   getAllStudent()
  },[])

  const getAllStudent=async ()=>{
    const response=await getAllStudentAPI()
    if(response.status==200){
      setAllStudents(response.data)
    }
  }


    //delete appointment
  const deleteStudent= async (id) => {
    if (confirm("Are you sure, Do you want to delete?")) {
      const response = await deleteStudentAPI(id)
      if (response.status == 200) {
        getAllStudent()
      }
    }
  }

  return (
    <div className='container my-5'>
        <div className='d-flex justify-content-between align-items-center'>
            <h1>All Student List</h1>
            <Link to={'/add'} className='btn btn-info'>Add student</Link>
        </div>
      <table className='table table-hover'>
        <thead>
          <tr className='table-dark'>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Age</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            allStudents?.map((student,index)=>(
              <tr key={student?.id}>
            <td>{index+1}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.course}</td>
            <td>{student.age}</td>
            <td>
              <button className='btn btn-danger' onClick={() => deleteStudent(student?.id)}>delete</button>
            </td>
          </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default StudentList
