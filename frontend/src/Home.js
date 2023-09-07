import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Home() {
    var i =1;
    const [data, setData] = useState()
    useEffect(()=> {
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:8081/delete/'+id)
        .then(res => {
            window.location.reload();
        })
        .catch(err => console.log(err));
    }
  return (
    <div className='container bg-body-light'>
        <h1 className='text-center mt-4 mb-3'>Student List</h1>
        <div className='justify-content-end d-flex m-3 mt-3'>
            <Link to="/create" className="btn btn-outline-danger">Add Student+</Link>
        </div>
        <table className="table">
            <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">USN No.</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((student, index)=> {
                    return <tr key={index}>
                    <th scope="row">{i++}</th>
                    <td>{student.usn}</td>
                    <td>{student.name}</td>
                    <td>
                        <div className=''>
                            <Link to={`/read/${student.id}`} className='me-4'><img src='/assets/logo/view.png' alt='view' width="25px" height="25px" /></Link>
                            <Link to={`/edit/${student.id}`} className='me-4'><img src='/assets/logo/edit.png' alt='edit' width="25px" height="25px" /></Link>
                            <Link onClick={() => handleDelete(student.id)}><img src='/assets/logo/delete.png' alt='delete' width="29px" height="29px" /></Link>
                        </div>
                    </td>
                  </tr>
                })}
              
            </tbody>
        </table>
    </div>
  )
}

export default Home