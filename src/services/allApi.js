import apiServices from "../api/apiServices";

//get all students
export const getAllStudentAPI=async()=>{
    return await apiServices("GET","/student",{})
}

//delete student
export const deleteStudentAPI=async(id)=>{
    return await apiServices("DELETE",`/student/${id}`,{})
} 

//add student
export const addStudentAPI=async(student)=>{
    return await apiServices("POST",'/student',student)
} 