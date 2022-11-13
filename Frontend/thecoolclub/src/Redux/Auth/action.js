import axios from 'axios';
import { POST_LOGIN_SUCCESS } from './actonTypes';
import { POST_LOGIN_FAILURE, POST_LOGIN_REQUEST, POST_SIGNUP_FAILURE, POST_SIGNUP_REQUEST, POST_SIGNUP_SUCCESS } from './actonTypes';

 
const signUp = (payload) => (dispatch) => {
    dispatch({ type : POST_SIGNUP_REQUEST})
    return axios.post("https://thecoolclub.onrender.com/user/signup",payload)
    .then((res) => {
        console.log(res.data)
        return dispatch({ type : POST_SIGNUP_SUCCESS , payload : res.data})
    })
    .catch((err) => {
        return dispatch({ type : POST_SIGNUP_FAILURE , payload : err.data})
    })
}


 const login = (payload) => (dispatch) => {
     dispatch({ type : POST_LOGIN_REQUEST});
     return axios.post("https://thecoolclub.onrender.com/user/login",payload)
     .then((res) => {
        console.log(res);
        localStorage.setItem("token",res.data.token)
        alert("login successfull")
        return dispatch({ type : POST_LOGIN_SUCCESS , payload : res.data})
     })
     .catch((e) => dispatch({ type : POST_LOGIN_FAILURE }))
 }

 const logout = () => {
        localStorage.setItem("token","");
        localStorage.setItem("isAuth",false);
 }


 export { login, signUp,logout }