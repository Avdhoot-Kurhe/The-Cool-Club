import { POST_LOGIN_FAILURE, POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS } from "./actonTypes";


    const initialState = {
        isAuth : localStorage.getItem("isAuth")|| false,
        token :  localStorage.getItem("token")||'',
        isLoading : false,
        isError : false
    }

 const reducer = (state= initialState , { type, payload}) => {
     switch(type) {
         case POST_LOGIN_REQUEST:
             return {
                ...state,
                isLoading : true,
             }
        case POST_LOGIN_SUCCESS :
            let newAuth = true;
            localStorage.setItem("isAuth", newAuth)
            localStorage.setItem("token",payload)
            return {
                ...state,
                isAuth : newAuth,
                isError : false,
                isLoading : false,
                token : payload
            }
        case POST_LOGIN_FAILURE :
            return {
                ...state,
                isAuth : false,
                isError : true,
                token : "",
                isLoading : false
            }
        default :
         return state;
     }
 } 


 export { reducer }