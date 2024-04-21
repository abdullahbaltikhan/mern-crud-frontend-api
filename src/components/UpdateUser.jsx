import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'


export default function UpdateUser() {
  const {id} = useParams()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()

const Navigate = useNavigate();

  useEffect(() =>{
    axios.get('https://mern-crud-backend-api.vercel.app/getuser/'+id)
    .then(result => {
      console.log(result.data)
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
    })
    .catch(error => console.log(error))
  },[])


  const updateuser = (e)=>{
    e.preventDefault();
    console.log(name, email, age)
    axios.put('https://mern-crud-backend-api.vercel.app/updateuser/'+id, {name, email, age})
    .then(resutl => console.log(result))
    .catch(error => console.log(error))
    Navigate('/')

  }
  return (
    <div className='create-new-user text-start'>
      <div className="form-header d-flex justify-content-between">
        <h2>Update User</h2>
        <Link to={'/'} className="btn btn-outline-primary" >View All User</Link>
      </div>
      <form onSubmit={updateuser}>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">User Name</label>
          <input type="text" className="form-control" value={name} placeholder="user name" onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">User Email</label>
          <input type="text" className="form-control" value={email} placeholder="user email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">User Age</label>
          <input type="text" className="form-control" value={age} placeholder="user age" onChange={e => setAge(e.target.value)} />
        </div>
        <button className="btn btn-primary mt-2">Update User</button>
      </form>
      
    </div>
  )
}
