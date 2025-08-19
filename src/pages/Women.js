import React from 'react'
import womendata from '../data/womendata';
import { useDispatch } from 'react-redux';
import { addcart } from '../redux/action';

const Women = () => {


  let dispatch = useDispatch()

  const addToCart = (ele) =>{
    dispatch(addcart(ele))
    console.log(ele)
  }



  return (
    <>
      {/* <h1>women data</h1> */}
      <div className="container" data-aos="fade-up-right">
        <div className="row" >
          {womendata.map((ele) => {
          return (
            <div className="col-lg-3 col-md-6 col-12 my-3" >
              <div className="card" style={{ width: "16rem" }}  >
                <img src={ele.pic} width={170} height={260} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <p className="card-text">
                  PKR Rs. {ele.price} /-
                  </p>
                  <button onClick={()=>addToCart(ele)} className="btn btn-dark">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </>
  )
}

export default Women
