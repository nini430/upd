// import '../axios';
// import axios from 'axios';
// import React, {useReducer, useContext} from 'react';
// import {
//   SET_LOADING,
//   REGISTER_USER_ERROR,
//   REGISTER_USER_SUCCESS,
//   LOGIN_USER_SUCCESS,
//   LOGIN_USER_ERROR,
//   LOGOUT_USER,
//   GET_TODO_ITEMS_SUCCESS,
//   GET_TODO_ITEMS_ERROR,

//   CREATE_TODO_ITEM_SUCCESS,
//   CREATE_TODO_ITEM_ERROR,
//   DELETE_TODO_ITEM_SUCCESS,
//   REFRESH_ALERT,
//   EDIT_TODO_ITEM_ERROR,
//   EDIT_TODO_ITEM_SUCCESS,
// } from './actions';
// import reducer from './reducers';

// const AppContext = React.createContext();

// const user = localStorage.getItem('user');



// export const AppProvider = ({children}) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const setLoading = () => {
//     dispatch({type: SET_LOADING});
//   };

//   const registerUser = async (userInput) => {
//     setLoading();
//     try {
//       const {data} = await axios.post(`/auth/register`, {...userInput});
//       dispatch({type: REGISTER_USER_SUCCESS, payload: data.user.name});
//       localStorage.setItem(
//         'user',
//         JSON.stringify({token: data.token, name: data.user.name})
//       );
//     } catch (err) {
//       dispatch({
//         type: REGISTER_USER_ERROR,
//         payload: {msg: err.response.data.msg},
//       });
//     }
//   };

//   const loginUser = async (UserInput) => {
//     setLoading();
//     try {
//       const {data} = await axios.post(`/auth/login`, {...UserInput});
//       dispatch({type: LOGIN_USER_SUCCESS, payload: data.user.name});
//       localStorage.setItem(
//         'user',
//         JSON.stringify({token: data.token, name: data.user.name})
//       );
//     } catch (err) {
//       dispatch({type: LOGIN_USER_ERROR, payload: {msg: err.response.data.msg}});
//     }
//   };

//   const logoutUser = () => {
//     dispatch({type: LOGOUT_USER});
//     localStorage.removeItem('user');
//   };

//   const getTodoItems = async () => {
//     setLoading();
//     try {
//       const {data} = await axios.get('/todos?page=1');
//       dispatch({
//         type: GET_TODO_ITEMS_SUCCESS,
//         payload: {todoItems: data.todos, total: data.todoCount, current: 1},
//       });
//     } catch (err) {
//       dispatch({type: GET_TODO_ITEMS_ERROR});
//     }
//   };

//   const createTodoItem = async (todoInput) => {
//     try {
//       const {data} = await axios.post(`/todos`, {...todoInput});
//       const page = Math.ceil(state.totalCount / state.recordPerPage);
//       const pagesVisited = page * state.recordPerPage;
//       let currentPage = page;
//       let paginatedItems = data.todoItems.slice(
//         pagesVisited - state.recordPerPage,
//         pagesVisited
//       );
//       if (data.latestItems.length === 1) {
//         paginatedItems = data.latestItems;
//         currentPage += 1;
//       }

//       dispatch({
//         type: CREATE_TODO_ITEM_SUCCESS,
//         payload: {
//           count: data.totalRecordsCount,
//           todos: paginatedItems,
//           current: currentPage,
//         },
//       });
//     } catch (err) {
//       dispatch({
//         type: CREATE_TODO_ITEM_ERROR,
//         payload: {msg: err.response.data.msg},
//       });
//     }
//   };   

//   const deleteTodoItem = async (todoId) => {
//     let currentPage = state.currentPage;
//     const {data} = await axios.delete(`todos/${todoId}`);
//     const {todoItems, totalRecordsCount} = data;
//     const page = Math.ceil(totalRecordsCount / state.recordPerPage);
//     const pagesVisited = page * state.recordPerPage;
//     let paginatedItemsOnLastPage = todoItems.slice(
//       pagesVisited - state.recordPerPage,
//       pagesVisited
//     );
//     let paginatedItems = todoItems.slice(
//       state.currentPage * state.recordPerPage - state.recordPerPage,
//       state.currentPage * state.recordPerPage
//     );

//     if (state.currentPage !== page && paginatedItems.length === 0) {
//       currentPage -= 1;
//       paginatedItems = paginatedItemsOnLastPage;
//     }

//     dispatch({
//       type: DELETE_TODO_ITEM_SUCCESS,
//       payload: {
//         todos: paginatedItems,
//         count: totalRecordsCount,
//         current: currentPage,
//       },
//     });
//   };

//   const editTodoItem = async (todoId, changeInput) => {
//     try {
//       await axios.patch(`todos/${todoId}`, changeInput);
//       const updatedTodoItems = state.todoItems.map((item) => {
//         if (item._id === todoId) {
//           item = {...item, ...changeInput};
//         }
//         return item;
//       });
//       dispatch({type: EDIT_TODO_ITEM_SUCCESS, payload: updatedTodoItems});
//     } catch (err) {
//       dispatch({
//         type: EDIT_TODO_ITEM_ERROR,
//         payload: {msg: err.response.data.msg},
//       });
//     }
//   };

//   const fetchPaginatedItemsByPageNumber = async (pageNum) => {
//     try {
//       const {data} = await axios.get(`/todos/?page=${pageNum}`);

//       dispatch({
//         type: GET_TODO_ITEMS_SUCCESS,
//         payload: {
//           todoItems: data.todos,
//           total: data.todoCount,
//           current: pageNum,
//         },
//       });
//     } catch (err) {
//       dispatch({type: GET_TODO_ITEMS_ERROR});
//     }
//   };

//   const refreshAlert = () => {
//     dispatch({type: REFRESH_ALERT});
//   };

//   return (
//     <AppContext.Provider
//       value={{
//         ...state,
//         registerUser,
//         loginUser,
//         logoutUser,
//         getTodoItems,
//         createTodoItem,
//         fetchPaginatedItemsByPageNumber,
//         deleteTodoItem,
//         editTodoItem,
//         refreshAlert,
//       }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => {
//   return useContext(AppContext);
// };
