import * as types from "./cart.actionTypes";
import { getdata } from "../../utils/localStorage";
import axios from "axios";
let token =
  getdata("token") ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZhaGlzQGdtYWlsLmNvbSIsInVpZCI6IjYzNmUzYWM5MmQ2MDcxMjhiMGMyMDgzYyIsImlhdCI6MTY2ODI2MTE2NywiZXhwIjoxNjY4Mjc5MTY3fQ.VjOzQX48F0WUtL2MALm2IEX3z3RDLltOs0DwajerXXs";

export const getCartDataApi = () => (dispatch) => {
  dispatch({ type: types.FETCH_CARTDATA_REQUEST });
  axios
  .get(`https://thecoolclub.onrender.com/cart/`, {
    headers: { token: `Bearer ${token}` },
  })
  .then((res) => {
    let cartitems = [];
    let items = res.data;
      items.forEach(async(ele) => {
       await axios
          .get(`https://thecoolclub.onrender.com/products/${ele.productid}`)
          .then((prod) => {
            let item = {...prod.data.product[0]};
              item.purchasequantity= ele.quantity;
              item.uid= ele.uid;
              item.deliveryType = ele.deliveryType;
            
              cartitems.push(item);
              // console.log(cartitems);
            });
          });
          console.log("afteer get ",cartitems)
       dispatch({ type: types.FETCH_CARTDATA_SUCCESS, payload: cartitems });
      console.log("inaction" ,res.data);
      console.log("inaci",cartitems);
    })
    .catch((err) => {
      dispatch({ type: types.FETCH_CARTDATA_FAILURE });
      console.log(err);
    });
};

export const addToCartDataApi = (payload) => async (dispatch) => {
  dispatch({ type: types.ADD_TO_CART_REQUEST });
  axios
    .post(`${process.env.BACKEND_URL}/cart/addtocart`, payload, {
      headers: { token: `Bearer ${token}` },
    })
    .then((res) => {
      dispatch({ type: types.ADD_TO_CART_SUCCESS });
      dispatch(getCartDataApi());
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: types.ADD_TO_CART_FAILURE });
      console.log(err);
    });
};

export const updateCartApi = (payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_CART_REQUEST });
  console.log(payload);
  axios
    .put(`${process.env.BACKEND_URL}/cart/${payload._id}`, payload, {
      headers: { token: `Bearer ${token}` },
    })
    .then((res) => {
      dispatch({ type: types.UPDATE_CART_SUCCESS });
      dispatch(getCartDataApi());
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: types.UPDATE_CART_FAILURE });
      console.log(err);
    });
};

export const deleteCartDataApi = (payload) => (dispatch) => {
  dispatch({ type: types.DELETE_FROM_CART_REQUEST });
  console.log(payload);
  axios
    .delete(`${process.env.BACKEND_URL}/cart/${payload}`, {
      headers: { token: `Bearer ${token}` },
    })
    .then((res) => {
      dispatch({ type: types.DELETE_FROM_CART_SUCCESS });
      dispatch(getCartDataApi());
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_FROM_CART_FAILURE });
      console.log(err);
    });
};
