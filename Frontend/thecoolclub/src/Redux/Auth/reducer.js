
import { POST_LOGIN_FAILURE, POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS } from "./actonTypes";


    export const initialState = {
        isAuth : localStorage.getItem("isAuth")|| false,
        token :  localStorage.getItem("token")||'',
        isLoading : false,
        isError : false,
        currentUser:null
    }
 const reducer = (state= initialState , { type, payload}) => {
     switch(type) {
         case POST_LOGIN_REQUEST:
             return {
                ...state,
                isLoading : true,
             }
        case POST_LOGIN_SUCCESS :
            localStorage.setItem("isAuth", JSON.stringify(true))
            localStorage.setItem("token",payload.token)
            return {
                ...state,
                isAuth : true,
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