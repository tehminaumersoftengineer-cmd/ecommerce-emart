import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div data-aos="flip-left">
      
<div className="login-container animated fadeInDown bootstrap snippets bootdeys">
  <div className="loginbox bg-white">
    <div className="loginbox-title">SIGN IN</div>
    <div className="loginbox-social">
      <div className="social-title ">Connect with Your Social Accounts</div>
      <div className="social-buttons">
        <a href className="button-facebook">
          <i className="social-icon fa fa-facebook" />
        </a>
        <a href className="button-twitter">
          <i className="social-icon fa fa-twitter" />
        </a>
        <a href className="button-google">
          <i className="social-icon fa fa-google-plus" />
        </a>
      </div>
    </div>
    <div className="loginbox-or">
      <div className="or-line" />
      <div className="or">OR</div>
    </div>
    <div className="loginbox-textbox">
      <input type="text" className="form-control" placeholder="Email" />
    </div>
    <div className="loginbox-textbox">
      <input type="text" className="form-control" placeholder="Password" />
    </div>
    <div className="loginbox-forgot">
      <a href>Forgot Password?</a>
    </div>
    <div className="loginbox-submit">
      <input type="button" className="btn btn-primary btn-block" defaultValue="Login" />
    </div>
    <div className="loginbox-signup">
      <Link to="/signup" href="#register.html">Sign Up With Email</Link>
    </div>
  </div>
  <div className="logobox">
  </div>
</div>



    </div>
  )
}

export default Login
