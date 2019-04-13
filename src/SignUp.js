import React, { Component } from 'react';
import './css/main.css'
import './css/util.css'
import { Helmet } from 'react-helmet'

const TITLE = 'WikiNotes SignUp'




class SignUp extends Component {
  render() {
    return (
     
      <div>
         <Helmet>
      <title>{ TITLE }</title>
      </Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/*===============================================================================================*/}
      <div className="limiter">
        <div className="container-login100" style={{  backgroundImage: "url(" + "https://wallpapersite.com/images/pages/pic_w/9493.jpg" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',}}>
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-49">
                SignUp
              </span>
              <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                <span className="label-input100">Username</span>
                <input className="input100" type="text" name="username" placeholder="Type your username" />
                <span className="focus-input100" data-symbol="" />
              </div>
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <span className="label-input100">Password</span>
                <input className="input100" type="password" name="pass" placeholder="Type your password" />
                <span className="focus-input100" data-symbol="&#xf190;" />
              </div>
              <div className="text-right p-t-8 p-b-31">
              <p>Forgot password</p>
               
              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button className="login100-form-btn">
                    Login
                  </button>
                </div>
              </div>
              <div className="txt1 text-center p-t-54 p-b-20">
                <span>
                  Or Sign Up Using
                </span>
              </div>
              <div className="flex-c-m">
                <a href="</App>" className="login100-social-item bg1">
                  <i className="fa fa-facebook" />
                </a>
                <a href="</App>" className="login100-social-item bg2">
                  <i className="fa fa-twitter" />
                </a>
                <a href="</App>" className="login100-social-item bg3">
                  <i className="fa fa-google" />
                </a>
              </div>
              <div className="flex-col-c p-t-155">
                <span className="txt1 p-b-17">
                  Or Sign Up Using
                </span>
                <a href="<SignUp />" className="txt2">
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="dropDownSelect1" />
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
      {/*===============================================================================================*/}
    </div>
    );
  }
}

export default SignUp;
