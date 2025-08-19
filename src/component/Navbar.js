import React from 'react'
import { Link } from 'react-router-dom'
import Slidebar from './Slidebar'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { useSelector } from 'react-redux';


const Navbar = () => {

  let result = useSelector(state=>state.cartReducer.carts)
  console.log("data in navbar",result)


  return (
    <div >
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div  className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div  className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li data-aos="zoom-in-down" className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pro">Products</Link>
        </li>
        <li className="nav-item" data-aos="zoom-in-down">
          <Link className="nav-link" to="/women">Women</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/men">Men</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/fragrance">Fragrances</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/lists">Users</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/data">Data</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/datapage">Datapage</Link>
        </li>
       
      </ul>
      <form className="d-flex">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
        <Link to="/signup" className="btn btn-success me-2" type="submit">Register</Link>
        <button className="btn btn-danger" type="submit">
            <Badge badgeContent={result.length} color="primary">
                {/* <MailIcon color="action" /> */}
                <i class="fa-solid fa-cart-shopping"></i>
            </Badge>
        </button>
      </form>
    </div>
  </div>
</nav>
<Slidebar/>




        
       
    


    </div>
  )
}

export default Navbar
