import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = () => {

   const[name, setName] = useState()
   const[email, setEmail] = useState()
   const[password, setPassword] = useState()
   const[address, setAddress] = useState()
   const[phone, setPhone] = useState()


   let navigate = useNavigate()

  const registerUser = async(e) =>{
    e.preventDefault()
    console.log({name, email, password, address, phone})

      let result = await fetch("http://localhost:7001/register",{
        method: 'post',
        body: JSON.stringify({name, email, password, address, phone}),
        headers: {
          'Content-Type': "application/json"
        }
      })
      result = await result.json()
      console.log(result)
      // if(result){
      //   alert("data saved successfully...!!")
      // }


    navigate('/login')

  }


  return (
    <div>
      
<div className="container h-100">
  <div className="row h-100">
    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
      <div className="d-table-cell align-middle">
        <div className="text-center mt-4">
          <h1 className="h2">Sign Account here</h1>
     
        </div>
        <div className="card">
          <div className="card-body">
            <div className="m-sm-4">
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input className="form-control form-control-lg" value={name} onChange={(e)=>setName(e.target.value)} type="text" name="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input className="form-control form-control-lg" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input className="form-control form-control-lg" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="Enter password" />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input className="form-control form-control-lg" type="text" value={address} onChange={(e)=>setAddress(e.target.value)} name="address" placeholder="Enter your Address" />
                </div>
              
                <div className="form-group">
                  <label>Phone</label>
                  <input className="form-control form-control-lg" type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} name="phone" placeholder="Enter your Phone" />
                </div>
              
               
                <div className="text-center mt-3">
                  <button onClick={registerUser} className="btn btn-lg btn-primary">Sign up</button>
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

export default Signup
