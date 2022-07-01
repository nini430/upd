import { REGISTER_USER_SUCCESS,REGISTER_USER_ERROR,LOGIN_USER_SUCCESS,LOGIN_USER_ERROR,LOGOUT_USER } from "./userTypes";
import axios from "axios"
import "../../axios";




// pure action creators

export const registerUserSuccess=user=>{
    return {
        type:REGISTER_USER_SUCCESS,
        payload:user
    }
}

export const registerUserError=error=>{
    return {
        type:REGISTER_USER_ERROR,
        payload:error
    }
}

export const loginUserSuccess=user=>{
    return {
        type:LOGIN_USER_SUCCESS,
        payload:user
    }
}

export const loginUserError=error=>{
    return {
        type:LOGIN_USER_ERROR,
        payload:error
    }
}

export const logout=()=>{
    return {
        type:LOGOUT_USER
    }
}


// async action creators



export const registerUser=(userInput)=>{
    return (dispatch)=>{
        axios.post(`/auth/register`,{...userInput})
        .then(response=>{
            const {token,user}=response.data;
            dispatch(registerUserSuccess(user.name))
            localStorage.setItem("user",JSON.stringify({token,name:user.name}))
        })
       
        .catch(error=>{
            dispatch(registerUserError({msg:error.response.data.msg}))
        })
    }
}

export const loginUser=(userInput)=>{
    return (dispatch)=>{
        axios.post(`/auth/login`,{...userInput})
        .then(response=>{
            const {token,user}=response.data;
             dispatch(loginUserSuccess(user.name))
             localStorage.setItem("user",JSON.stringify({token,name:user.name}))
        })
        .catch(error=>{
            dispatch(loginUserError({msg:error.response.data.msg}))
        })
    }
}


