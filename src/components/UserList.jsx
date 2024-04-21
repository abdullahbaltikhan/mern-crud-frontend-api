import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function UserList() {

    const [users, setUsers] = useState([])


useEffect(() =>{
  axios.get('https://mern-crud-backend-api.vercel.app')
  .then(result => setUsers(result.data))
  .catch(error => console.log(error))
},[])

const delUser = (id) =>{
  console.log(id)
  axios.delete('https://mern-crud-backend-api.vercel.app/deleteUser/'+id)
  .then(result => {
    console.log(result)
    window.location.reload('/');
  })
  .catch(error => console.log(error))
}

  return (
    <div className="table-responsive user-list-table  text-start">
    <Link to='/createuser' className='btn btn-outline-primary'>Add New User</Link>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Age</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        { users.map((user)=>{
        return    <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <Link to={`/update/${user._id}`} className="btn btn-outline-primary" >Edit</Link>
                  <button className="btn btn-outline-danger" onClick={e => delUser(user._id)}>Delete</button>
                </td>
              </tr>
                        
                })
        }
      </tbody>
    </table>
    </div>
    
  )
}
