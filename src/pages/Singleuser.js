import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Singleuser = () => {

   const[name, setName] = useState()
   const[email, setEmail] = useState()
   const[password, setPassword] = useState()
   const[address, setAddress] = useState()
   const[phone, setPhone] = useState()

   let params = useParams()

   let navigate = useNavigate()

  const updateUser = async(e) =>{
    e.preventDefault()
    let result = await fetch(`http://localhost:7001/updatesingle/${params.id}`,{
        method: 'put',
        body: JSON.stringify({name, email, password, address, phone}),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    result = await result.json()
    navigate('/lists')
     
  }

  console.log(params)

  const getSingleUSer = async() =>{
        let result = await fetch(`http://localhost:7001/singleuser/${params.id}`)
        result = await result.json()
        setName(result.name)
        setEmail(result.email)
        setPassword(result.password)
        setAddress(result.address)
        setPhone(result.phone)
  }

  useEffect(()=>{
    getSingleUSer()    
  },[])



  return (
    <div>
      
<div className="container h-100">
  <div className="row h-100">
    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
      <div className="d-table-cell align-middle">
        <div className="text-center mt-4">
          <h1 className="h2">Edit / Update Record</h1>
     
        </div>
        <div className="card">
          <div className="card-body">
            <div className="m-sm-4">
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input className="form-control form-control-lg" name="name" value={name} onChange={(e)=>setName(e.target.value)} type="text" name="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input className="form-control form-control-lg" type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input className="form-control form-control-lg" type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="Enter password" />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input className="form-control form-control-lg" name="address" type="text" value={address} onChange={(e)=>setAddress(e.target.value)} name="address" placeholder="Enter your Address" />
                </div>
              
                <div className="form-group">
                  <label>Phone</label>
                  <input className="form-control form-control-lg" name="phone" type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} name="phone" placeholder="Enter your Phone" />
                </div>
              
               
                <div className="text-center mt-3">
                  <button onClick={updateUser} className="btn btn-lg btn-primary">Update Record</button>
                  {/* <button type="submit" class="btn btn-lg btn-primary">Sign up</button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Singleuser
