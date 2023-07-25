import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const {id} = useParams();
    const navigate = useNavigate()
    useEffect(()=> {
        axios.get('http://localhost:8081/read/'+id)
        .then(res => {
            console.log(res)
            setValues({...values, usn: res.data[0].usn, name: res.data[0].name, email: res.data[0].email, mobile: res.data[0].mobile})
        })
        .catch(err => console.log(err))
        // eslint-disable-next-line
    }, [])
    const [values, setValues] = useState({
        usn: '',
        name: '',
        email: '',
        mobile: ''
    })
    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id, values)
        .then(res => {
            console.log(res)
            navigate('/')
        }).catch(err => console.log(err));
    }
  return (
    <div className='container p-4 bg-body-light'>
        <h2 className='text-center mb-4'>Update Student Information</h2>
        <form onSubmit={handleUpdate}>
            <div className="mb-3">
                <label htmlFor="usn" className="form-label">USN No.</label>
                <input type="text" className="form-control" id="usn" placeholder='Enter USN No.' required
                onChange={e => setValues({...values, usn: e.target.value})} value={values.usn} />
            </div>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder='Enter Full Name' required
                onChange={e => setValues({...values, name: e.target.value})} value={values.name} />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='Enter Email Address' required
                onChange={e => setValues({...values, email: e.target.value})} value={values.email} />
            </div>

            <div className="mb-3">
                <label htmlFor="mobile" className="form-label">Contact No</label>
                <input type="text" className="form-control" id="mobile" placeholder='Enter Contact No.' maxLength="10" required
                onChange={e => setValues({...values, mobile: e.target.value})} value={values.mobile} />
            </div>

            <div className="text-center">
                <button type="submit" className="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
  )
}

export default Update