import {REGISTER_USER_SUCCESS,REGISTER_USER_ERROR,LOGIN_USER_SUCCESS,LOGIN_USER_ERROR, LOGOUT_USER } from "./userTypes";

const user=localStorage.getItem("user");



const initialState={
    user:user? JSON.parse(user).name:null,
    showLoginAlert:false,
    loginAlert: '',
    showRegisterAlert:false,
    registerAlert: ''
}


const userReducer=(state=initialState,action)=>{
        switch(action.type) {
            case REGISTER_USER_SUCCESS:
                return {
                    ...state,
                    showRegisterAlert:false,
                    registerAlert:"",
                    user:action.payload
                }
            case REGISTER_USER_ERROR:{
                return {
                    ...state,
                    showRegisterAlert:true,
                    registerAlert:action.payload.msg,
                    user:null
                }
            }
            case LOGIN_USER_SUCCESS:
                return {
                    ...state,
                    showLoginAlert:false,
                    loginAlert:"",
                    user:action.payload
                }
            case LOGIN_USER_ERROR:{
                return {
                    ...state,
                    showLoginAlert:true,
                    loginAlert:action.payload.msg,
                    user:null
                }
            }
            case LOGOUT_USER:
                return {
                    ...state,
                    user:null,
                    showlert:false,
                    alertText:""
                }
            default:return state;
        }
}

export default userReducer;