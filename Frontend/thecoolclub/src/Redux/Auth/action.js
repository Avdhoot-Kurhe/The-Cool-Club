import axios from 'axios';
import { GET_LOGIN_FAILURE, GET_LOGIN_SUCCESS } from './actionType';
import { POST_SIGNUP_FAILURE, POST_SIGNUP_REQUEST, POST_SIGNUP_SUCCESS } from './actonTypes';

 
const SignUp = (payload) => (dispatch) => {
    dispatch({ type : POST_SIGNUP_REQUEST})
    return axios.post("url",payload)
    .then((res) => {
        return dispatch({ type : POST_SIGNUP_SUCCESS , payload : res.data})
    })
    .catch((err) => {
        return dispatch({ type : POST_SIGNUP_FAILURE , payload : err.data})
    })
}


 const login = (payload) => (dispatch) => {
     dispatch({ type : GET_MUSIC_RECORD_REQUEST});
     return axios.post("url",payload,{
        headers: {
          'token': `Bears ${localStorage.getItem("token")}`
        }})
     .then((res) => {
         return dispatch({ type : GET_LOGIN_SUCCESS , payload : res.data})
     })
     .catch((e) => dispatch({ type : GET_LOGIN_FAILURE }))
 }

 export { login, SignUp }