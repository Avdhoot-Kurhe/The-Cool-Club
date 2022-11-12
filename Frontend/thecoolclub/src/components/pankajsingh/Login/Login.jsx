import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../Redux/Auth/action";
import "./Login.css";

const Login = () => {
 const [data, setData] = useState({});
 const dispatch = useDispatch();
 const navigate = useNavigate();


  const handleOnChange = (e) => {
    const { name ,value} = e.target;
    setData({...data, [name] : value})
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(login(data)).then((res) => {
      return navigate("/home")
    })
  }
  return (
    <div className="LoginPage_mainDiv">
      <div className="LoginPage_topLeft">
        <p className="LoginToHomePage">HOME</p>
        <p>&nbsp;/&nbsp;</p>
        <p>SIGN IN OR SIGN UP</p>
      </div>

      <div className="LoginPage_singImg">
        <img src="..\..\sing_image.png" alt="signInImg" />
      </div>

      <div className="singIn_text ">
        <p >Sign In or Sign Up</p>
      </div>
      <hr className="lineBreak_Div"/>

      <div className="signin_up_main_Div">
        <div className="signin_Div">
          <form onSubmit={handleOnSubmit}>
            <p className="center fontsize">SIGN IN</p>
            <p className="center">
              If you already have an account with us, sign in below
            </p>
            <p className="emailAddress_tag">Email Address</p>
            <input type="email" className="emailAddress_input" name="email" onChange={handleOnChange}/>

            <p className="emailAddress_tag">Password</p>
            <input type="password" className="emailAddress_input" name="password" onChange={handleOnChange}/>

            <div className="signin_forgetPassword_div">
              <p className="forgetPassword center">Forgot Password?</p>
              <div style={{display:"flex"}}  className="marginRember">
                <input type="checkbox" />
                <p className="center">Remenber me</p>
              </div>
            </div>
            <p className="center" style={{marginTop:"1rem", marginRight:'15%'}}>Privacy Policy</p>
            <input type="submit" value="SIGN IN" className="btn" />
          </form>
        </div>

        <div className="middle_or_Div">
         <p > <hr className="small_hr" /> </p>
         <p style={{border:'1px solid black',borderRadius:'50%',padding :'0.5rem'}}>OR</p>
         <p> <hr className="long_hr"/> </p>
        </div>


        <div className="sign_Div">
        <p className="center fontsize">SIGN IN</p>
        <p className="center">Create an account to access the best of your favorite store</p>
        <div >
            <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0f47b7b9/images/loyalty/boc-launch-prospects_lacb_0.jpg?yocs=s_" alt=""  className="sing_Div_image"/>
        </div>
         <div style={{marginTop :'1rem'}}>
           <button className="btn">CREATE AN ACCOUNT</button>
         </div>
        </div>

      </div>

      <div className="question_div">
            <p className="fontsize">QUESTIONS?</p>
            <p>We’re here for you! Call us at 1-800-756-5005.</p>
        </div>
    </div>
  );
};

export default Login;
