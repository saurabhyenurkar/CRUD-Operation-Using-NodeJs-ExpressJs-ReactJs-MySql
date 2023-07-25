import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {
    const {id} = useParams();
    const [student, setStudent] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8081/read/'+id)
        .then(res => {
            console.log(res)
            setStudent(res.data[0])
        })
        .catch(err => console.log(err))
        // eslint-disable-next-line
    }, [])    
  return (
    <div className='container bg-body-light '>
        <h1 className='text-center mt-3 mb-4'>Student Detaild</h1>
        <table className="table border">
            <thead>
                <tr>
                  <th scope="col" className='text-muted'>USN</th>
                  <th scope="col">{student.usn}</th>
                </tr>
                <tr>
                  <th scope="col">Full Name</th>
                  <th scope="col">{student.name}</th>
                </tr>
                <tr>
                  <th scope="col">Email Address</th>
                  <th scope="col">{student.email}</th>
                </tr>
                <tr>
                  <th scope="col">Contact No.</th>
                  <th scope="col">{student.mobile}</th>
                </tr>
            </thead>
        </table>
        <div className="text-center mb-4 mt-4">
                <Link to="/" className="btn btn-lg btn-success">Back</Link>
            </div>
    </div>
  )
}

export default Read