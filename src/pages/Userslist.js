import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Userslist = () => {

    const[users, setUsers] = useState([])

    const getUsers = async() =>{
        let result = await fetch("http://localhost:7001/userslist")
        result = await result.json()
        console.log(result)
        setUsers(result)
    }


useEffect(()=>{
    getUsers()
},[])


const deleleteUser = async(id) =>{
    // console.log(id)
    let result = await fetch(`http://localhost:7001/users/${id}`,{
        method: 'delete'
    })
    result = await result.json()
    if(result){
        getUsers()
    }
}


// function add(x){
//     return x + 1;
// }

// add(5)

  return (
    <div>
        <h3>List of Users</h3>
        <div className='container'>

        <table class="table table-bordered table-striped hover">
            <thead>
                <tr className='bg-primary text-light'>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Operation</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item, index) =>{
                        return(
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>{item.address}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <Link to={`/lists/${item._id}`} className='btn btn-success btn-sm me-2'>Edit</Link>
                                    <button onClick={()=>deleleteUser(item._id)} className='btn btn-danger btn-sm'>Delete</button>
                                </td>
                        </tr>
                        )
                    })
                }
        
            </tbody>
            </table>


        </div>
    </div>
  )
}

export default Userslist
