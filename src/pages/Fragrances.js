import React from 'react'
import prolist from '../data/fragrancelist'

const Fragrances = () => {
  return (
    <>
      {/* <h1>fragrances</h1> */}
    <div className='container'>
        <div className='row my4'>
      {
        prolist.map((ele)=>{
            return(
                <div className='col-lg-3 col-md-6 col-sm-12 my-3'>
       <div className="card" style={{width: '15rem'}}>
       <img src={ele.pic} width={220} height={270} className="card-img-top" alt="..." />
       <div className="card-body">
       <h5 className="card-title">{ele.name}</h5>
       <p className="card-text">{ele.price}</p>
       <a href="#" className="btn btn-primary">BUY NOW</a>
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

export default Fragrances
