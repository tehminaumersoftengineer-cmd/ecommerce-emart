// import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Datapage = () => {

    const[name, setName] = useState()
    const[desc, setDesc] = useState()
    const[brand, setBrand] = useState()
    const[price, setPrice] = useState()

    let navigate = useNavigate()

    const productUser = async(e) => {
      e.preventDefault()
      // console.log({name,desc,brand,price})

      let result = await fetch("http://localhost:7001/products",{
        method: 'post',
        body: JSON.stringify({name, desc, brand, price}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      result = await result.json()
      if(result){
        navigate('/')
      }
      console.log(result)
    }

  return (
    <>
      {/* Datapage */}
      
     <div className="container h-100">
  <div className="row h-100">
    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
      <div className="d-table-cell align-middle">
        <div className="text-center mt-4">
          <h1 className="h2">Products Data Account</h1>
         
        </div>
        <div className="card">
          <div className="card-body">
            <div className="m-sm-4">
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input className="form-control form-control-lg" name="name" value={name} onChange={(e)=>setName(e.target.value)} type="text"  placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label>Desc</label>
                  <input className="form-control form-control-lg" name="desc" value={desc} onChange={(e)=>setDesc(e.target.value)} type="text"  placeholder="Enter your desc" />
                </div>
                <div className="form-group">
                  <label>Brand</label>
                  <input className="form-control form-control-lg" name="brand" value={brand} onChange={(e)=>setBrand(e.target.value)} type="text"  placeholder="Enter your brand name" />
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input className="form-control form-control-lg" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} type="text"  placeholder="Enter price" />
                </div>
                <div className="text-center mt-3">
                  <button onClick={productUser} className="btn btn-lg btn-primary">Sign up</button>
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


      
      
      </>

  )
}

export default Datapage