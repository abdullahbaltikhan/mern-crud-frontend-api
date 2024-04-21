import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function CreateUser() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  
  const Navigate = useNavigate();

  const addUser = (e) => {
      e.preventDefault();
      console.log(name, email, age)
      axios.post('https://mern-crud-backend-api.vercel.app/newuser', {name, email, age})
      .then(result => {
        console.log(result)        
      })
      .catch(error => console.log(error))
      Navigate('/')
  }
  return (
    <div className='create-new-user text-start'>
      <div className="form-header d-flex justify-content-between">
        <h2>Add New User</h2>
        <Link to={'/'} className="btn btn-outline-primary" >View All User</Link>
      </div>
      <form onSubmit={addUser}>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">User Name</label>
          <input type="text" className="form-control"  placeholder="user name" onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">User Email</label>
          <input type="text" className="form-control"  placeholder="user email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">User Age</label>
          <input type="text" className="form-control"  placeholder="user age" onChange={e => setAge(e.target.value)} />
        </div>
        <button className="btn btn-primary mt-2">+ Add New User</button>
      </form>
      
    </div>
  )
}
