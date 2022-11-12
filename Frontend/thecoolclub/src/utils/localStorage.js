


export const getdata=(key)=>{

    return JSON.parse(localStorage.getItem(key));
 
 }
 
 
 export const storeData=(key,value)=>{
     localStorage.setItem(key,JSON.stringify(value))
 }
 
 export const removeData=(key)=>{
     localStorage.removeItem(key);
 }