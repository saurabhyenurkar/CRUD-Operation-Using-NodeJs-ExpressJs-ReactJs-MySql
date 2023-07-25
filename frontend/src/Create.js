import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
    const [values, setValues] = useState({
        usn: '',
        name: '',
        email: '',
        mobile: ''
    })
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/student',values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='container p-4 bg-body-light'>
        <h2 className='text-center mb-4'>Add Student Information</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="usn" className="form-label">USN No.</label>
                <input type="text" className="form-control" id="usn" placeholder='Enter USN No.' required
                onChange={e => setValues({...values, usn: e.target.value})} />
            </div>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder='Enter Full Name' required
                onChange={e => setValues({...values, name: e.target.value})} />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='Enter Email Address' required
                onChange={e => setValues({...values, email: e.target.value})} />
            </div>

            <div className="mb-3">
                <label htmlFor="mobile" className="form-label">Contact No</label>
                <input type="text" className="form-control" id="mobile" placeholder='Enter Contact No.' maxLength="10" required
                onChange={e => setValues({...values, mobile: e.target.value})} />
            </div>

            <div className="text-center">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Create