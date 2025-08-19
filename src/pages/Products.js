import React from 'react'
import prodata from '../data/prodata'
import { useDispatch } from 'react-redux'
import { addcart } from '../redux/action'

const Products = () => {

  let dispatch = useDispatch()

  const sendDatatoCart = (item) =>{
    dispatch(addcart(item))
    console.log(item)
  }


  return (
    <>
      {/* <h1>product data</h1> */}
    <div className='container'> 
    <div className='row'> 

      {
        prodata.map((ele)=>{
          return(
            <div className="col-lg-3 col-md-6 col-12 my-3" >
            <div className="card" style={{ width: "16rem" }}  >
              <img src={ele.pic} width={170} height={260} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <p className="card-text">
                PKR Rs. {ele.price} /-
                </p>
                <button onClick={()=>sendDatatoCart(ele)}  className="btn btn-dark">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
          )
        })
      }
    </div>
    </div>



    </>
  )
}

export default Products
