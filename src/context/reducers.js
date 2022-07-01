// import {
//   SET_LOADING,
//   REGISTER_USER_SUCCESS,
//   REGISTER_USER_ERROR,
//   LOGIN_USER_SUCCESS,
//   LOGIN_USER_ERROR,
//   LOGOUT_USER,
//   SET_USER,
//   GET_TODO_ITEMS_SUCCESS,
//   GET_TODO_ITEMS_ERROR,
//   CREATE_TODO_ITEM_ERROR,
//   CREATE_TODO_ITEM_SUCCESS,
//   EDIT_TODO_ITEM_ERROR,
//   EDIT_TODO_ITEM_SUCCESS,
//   DELETE_TODO_ITEM_SUCCESS,
//   DELETE_TODO_ITEM_ERROR,
//   REFRESH_ALERT,
// } from './actions';

// const reducer = (state, action) => {
//   if (action.type === SET_LOADING) {
//     return {
//       ...state,
//       isLoading: true,
//       showAlert: false,
//       alertText: '',
//     };
//   }

//   if (action.type === REGISTER_USER_SUCCESS) {
//     return {
//       ...state,
//       isLoading: false,
//       showRegisterAlert: false,
//       showLoginAlert: false,
//       user: action.payload,
//       registerAlert: '',
//     };
//   }

//   if (action.type === REGISTER_USER_ERROR) {
//     return {
//       ...state,
//       isLoading: false,
//       showRegisterAlert: true,
//       registerAlert: action.payload.msg,
//     };
//   }
//   if (action.type === LOGIN_USER_SUCCESS) {
//     return {
//       ...state,
//       isLoading: false,
//       user: action.payload,
//       loginAlert: '',
//       showLoginAlert: false,
//       showRegisterAlert: false,
//     };
//   }
//   if (action.type === LOGIN_USER_ERROR) {
//     return {
//       ...state,
//       isLoading: false,
//       user: null,
//       showLoginAlert: true,
//       loginAlert: action.payload.msg,
//     };
//   }

//   if (action.type === LOGOUT_USER) {
//     return {
//       ...state,
//       user: null,
//       todoItems: [],
//     };
//   }

//   if (action.type === GET_TODO_ITEMS_SUCCESS) {
//     return {
//       ...state,
//       isLoading: false,
//       todoItems: action.payload.todoItems,
//       showAlert: false,
//       totalCount: action.payload.total,
//       currentPage: action.payload.current,
//     };
//   }

//   if (action.type === GET_TODO_ITEMS_ERROR) {
//     return {
//       ...state,
//       isLoading: false,
//       showAlert: true,
//       alertText: 'Something went wrong',
//     };
//   }
//   if (action.type === SET_USER) {
//     return {
//       ...state,
//       isLoading: false,
//       todos: action.payload.todos,
//       totalCount: action.payload.count,
//     };
//   }

//   if (action.type === CREATE_TODO_ITEM_SUCCESS) {
//     return {
//       ...state,
//       showAlert: false,
//       todoItems: action.payload.todos,
//       totalCount: action.payload.count,
//       currentPage: action.payload.current,
//     };
//   }

//   if (action.type === CREATE_TODO_ITEM_ERROR) {
//     return {
//       ...state,
//       showAlert: true,
//       alertText: action.payload.msg,
//     };
//   }

//   if (action.type === EDIT_TODO_ITEM_SUCCESS) {
//     return {
//       ...state,
//       editAlert: false,
//       alertText: '',
//       todoItems: action.payload,
//     };
//   }

//   if (action.type === EDIT_TODO_ITEM_ERROR) {
//     return {
//       ...state,
//       editAlert: true,
//       alertText: action.payload.msg,
//     };
//   }

//   if (action.type === DELETE_TODO_ITEM_SUCCESS) {
//     return {
//       ...state,
//       showAlert: false,
//       todoItems: action.payload.todos,
//       totalCount: action.payload.count,
//       currentPage: action.payload.current,
//     };
//   }

//   if (action.type === DELETE_TODO_ITEM_ERROR) {
//     return {
//       ...state,
//       showAlert: true,
//       alertText: action.payload.msg,
//     };
//   }
//   if (action.payload === REFRESH_ALERT) {
//     return {
//       ...state,
//       showAlert: false,
//       alertText: '',
//       isLoading: false,
//     };
//   }
// };

// export default reducer;
