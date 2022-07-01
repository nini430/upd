import { SET_LOADING,GET_TODO_ITEMS_SUCCESS,GET_TODO_ITEMS_ERROR,CREATE_TODO_ITEM_SUCCESS,CREATE_TODO_ITEM_ERROR,EDIT_TODO_ITEM_SUCCESS,
    EDIT_TODO_ITEM_ERROR,DELETE_TODO_ITEM_SUCCESS,DELETE_TODO_ITEM_ERROR } from "./todoTypes";

const initialState={
    isLoading: false,
    showAlert: false,
    alertText: '',
    recordPerPage: 5,
    todoItems: [],
    totalCount: 0,
    currentPage: 1,
    editAlert: false
}

const todoReducer=(state=initialState,action)=>{
    switch(action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading:true
            }
        case GET_TODO_ITEMS_SUCCESS:
            return {
                ...state,
                isLoading:false,
                showAlert:false,
                alertText:"",
                todoItems:action.payload.todos,
                totalCount:action.payload.total,
                currentPage:action.payload.current
            }
        case GET_TODO_ITEMS_ERROR:
            return {
                ...state,
                showAlert:true,
                alertText:"could not fetch data",
                todoItems:[]
            }
        case CREATE_TODO_ITEM_SUCCESS:
            return {
                ...state,
                showAlert:false,
                alertText:"",
                todoItems:action.payload.todos,
                totalCount:action.payload.total,
                currentPage:action.payload.current
            }
        case CREATE_TODO_ITEM_ERROR:
            return {
                ...state,
                showAlert:true,
                alertText:action.payload.msg
            }
        case EDIT_TODO_ITEM_SUCCESS:
            return {
                ...state,
                editAlert:false,
                alertText:"",
                todoItems:action.payload
            }
        case EDIT_TODO_ITEM_ERROR:
            return {
                ...state,
                editAlert:true,
                alertText:"could not edit the item"
            }
        case DELETE_TODO_ITEM_SUCCESS:
            return {
                ...state,
                showAlert:false,
                alertText:"",
                todoItems:action.payload.todos,
                totalCount:action.payload.total,
                currentPage:action.payload.current
            }
        case DELETE_TODO_ITEM_ERROR:
            return {
                ...state,
                showAlert:true,
                alertText:action.payload.msg,
                todoItems:[]
            }

        default:return state;
    }
}

export default todoReducer;
