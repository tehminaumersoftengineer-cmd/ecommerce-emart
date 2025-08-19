import React , {useState , useEffect} from 'react'

const Data = () => {
    const [productsdata, setproductsdata] = useState([])

  useEffect(() => {
    const Getdata = async() =>{
       try {
         let data = await fetch('http://localhost:7001/getproducts')
         const datanew = await data.json()
         setproductsdata(datanew)
       } catch (error) {
        console.log(error)
       }
    }
    Getdata()
    
  }, [])

  console.log(productsdata)
  return (
    <div>
        <h3>list of data</h3>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Desc</th>
      <th scope="col">Brand</th>
      <th scope="col">Price</th>
      <th scope="col">Operation</th>


    </tr>
  </thead>
  <tbody>
    
    
 

    {
        productsdata.map((item, index)=>{
           return (
            <>

               {/* <h1>{item.name}</h1> */}
               <tr>
                   <th scope="row">{index+1}</th>
                   <td>{item.name}</td>
                   <td>{item.desc}</td>
                   <td>{item.brand}</td>
                   <td>{item.price}</td>
                   <td>
                    <button className='btn btn-success btn-sm me-2'>'Edit'</button>
                    <button  className='btn btn-danger btn-sm'>'Delete'</button>
                   </td>
                </tr>
            </>
           )
        }) 
    }

</tbody>
</table>
    </div>
  )
}

export default Data