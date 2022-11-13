import * as types from "./actiontypes.js";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  Bag : [],
  cart : []
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload,
      };
    }
    case types.GET_PRODUCT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.POST_PRODCUT_REQUEST : {
      return {
        ...state,
        isLoading : true,
        isError : false
      }
    }
    case types.POST_PRODCUT_SUCCESS : {
      console.log("BAg",payload)
      return {
        ...state,
        isLoading : false,
        isError : false,
        Bag : payload,
      }
    }
    case types.POST_PRODCUT_FAILURE : {
      return {
        ...state,
        isLoading : false,
        isError : true,
      }
    }
    case types.GET_PRODCUT_REQUEST : {
      return {
        ...state,
        isLoading : true,
        isError : false
      }
    }
    case types.GET_PRODCUT_SUCCESS : {
      console.log("cart",payload)
      return {
        ...state,
        isLoading : false,
        isError : false,
        cart : payload
      };
    }
    case types.GET_PRODUCT_FAILURE : {
      return {
        ...state,
        isError : true,
        isLoading : false
      };
    }
    default: {
      return initialState;
    }
  }
};
