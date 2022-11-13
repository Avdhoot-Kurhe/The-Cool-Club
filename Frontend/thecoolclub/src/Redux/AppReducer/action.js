import * as types from "./actiontypes.js";
import axios from "axios";


export const getProductsData = () => (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_REQUEST });
  return axios
    .get(
      "https://thecoolclub.onrender.com/products/")
    .then((res) => {
      return dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_PRODUCT_FAILURE });
    });
};




export  const handleGetToCart = () => (dispatch) => {
  dispatch({type : types.GET_PRODCUT_REQUEST})
  return axios.get(`https://thecoolclub.onrender.com/cart/`,{
    headers: {
      token: `Bearer ${localStorage.getItem("token")}`
    }})
    .then((res) => {
      console.log("get cart",res.data);
       dispatch({ type : types.GET_PRODCUT_SUCCESS , payload : res.data})
    })
    .catch((err) => {
      return dispatch({type : types.GET_PRODUCT_FAILURE})
    })
}


export  const handleAddToCart = (item) =>  (dispatch) => {
  console.log("item in add ",item)
  dispatch({type : types.POST_PRODCUT_REQUEST})
  return  axios.post(`https://thecoolclub.onrender.com/cart/addtocart`,item,{
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`
    }})
    .then((res) => {
      console.log("add cart",res.data);
     dispatch({ type : types.POST_PRODCUT_SUCCESS , payload : res.data})
    })
    .catch((err) => {
      console.log("didnt add")
      return dispatch({type : types.POST_PRODCUT_FAILURE})
    })
    .finally(() => {
      console.log("done")
    }) 
    
}




export const deleteCartDataApi = (payload) => (dispatch) => {
  dispatch({ type: types.DELETE_FROM_CART_REQUEST });
  console.log(payload);
  axios
    .delete(`https://thecoolclub.onrender.com/cart/${payload}`, {
      headers: { token: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      dispatch({ type: types.DELETE_FROM_CART_SUCCESS });
      dispatch(handleGetToCart());
      // console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_FROM_CART_FAILURE });
      // console.log(err);
    });
};


