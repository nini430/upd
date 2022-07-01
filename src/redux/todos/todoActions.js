import axios from "axios";
import { SET_LOADING,GET_TODO_ITEMS_SUCCESS,GET_TODO_ITEMS_ERROR,CREATE_TODO_ITEM_SUCCESS,CREATE_TODO_ITEM_ERROR,EDIT_TODO_ITEM_SUCCESS,
EDIT_TODO_ITEM_ERROR,DELETE_TODO_ITEM_SUCCESS,DELETE_TODO_ITEM_ERROR } from "./todoTypes";
import "../../axios"


// pure action creators

 const setLoading=()=>{
    return {
        type:SET_LOADING
    }
}


export const getTodoItemsSuccess=(todoData)=>{
    return {
        type:GET_TODO_ITEMS_SUCCESS,
        payload:todoData
    }
}

export const getTodoItemsError=()=>{
        return {
            type:GET_TODO_ITEMS_ERROR
        }
}


export const createTodoSuccess=(newTodoData)=>{
        return {
            type:CREATE_TODO_ITEM_SUCCESS,
            payload:newTodoData
        }
}

export const createTodoError=(error)=>{
        return {
            type:CREATE_TODO_ITEM_ERROR,
            payload:error
        }
}

export const deleteTodoSuccess=(newTodoData)=>{
        return {
            type:DELETE_TODO_ITEM_SUCCESS,
            payload:newTodoData
        }
}

export const deleteTodoError=()=>{
        return {
            type:DELETE_TODO_ITEM_ERROR,
           
        }
}

export const editTodoSuccess=(editTodoData)=>{
    return {
        type:EDIT_TODO_ITEM_SUCCESS,
        payload:editTodoData
    }
}

export const editTodoError=(error)=>{
    return {
        type:EDIT_TODO_ITEM_ERROR,
        payload:error
    }
}


// async action creators



export const  getTodoItems=()=>{
    return (dispatch)=>{
        setLoading();
        axios.get(`/todos?page=1`)
        .then(response=>{
            const {todos,todoCount}=response.data;
            dispatch(getTodoItemsSuccess({todos,total:todoCount,current:1}))

        })
        .catch(()=>{
            dispatch(getTodoItemsError())
        })
    }
}


export const createTodoItem=(todoInput,recordPerPage)=>{
    return (dispatch)=>{
        axios.post(`/todos`,{...todoInput})
        .then(response=>{
            const {todoItems, totalRecordsCount, latestItems, newToDoItem}=response.data;
            const page=Math.ceil(totalRecordsCount/recordPerPage);
            const pagesVisited=page*recordPerPage;
            const paginatedItems=todoItems.slice(pagesVisited-recordPerPage,pagesVisited);
            dispatch(createTodoSuccess({todos:paginatedItems,total:totalRecordsCount,current:page}))
        })
        .catch(error=>{
            dispatch(createTodoError({msg:error.response.data.msg}))
        })
    }
}


export const editTodoItem=(todoId,todoItemUpdates,todoItems)=>{
    return (dispatch)=>{
        axios.patch(`/todos/${todoId}`,{...todoItemUpdates})
        .then(response=>{
            const {todo}=response.data;
            const updatedTodoItems=todoItems.map(item=>{
                if(item._id===todoId) {
                    item={...item,...todoItemUpdates}
                }

                return item;
            })

            dispatch(editTodoSuccess(updatedTodoItems))
        })
        .catch(()=>{
            dispatch(editTodoError())
        })
    }
}


export const deleteTodoItem=(todoId,currentPage,recordPerPage)=>{
    return (dispatch)=>{
        axios.delete(`/todos/${todoId}`)
        .then(response=>{
            
            const {todoItems,totalRecordsCount}=response.data;
            const page=Math.ceil(totalRecordsCount/recordPerPage);
            const pagesVisited=page*recordPerPage;
            const lastPaginatedItems=todoItems.slice(pagesVisited-recordPerPage,pagesVisited);
            const currentPaginatedItems=todoItems.slice((currentPage*recordPerPage)-recordPerPage,(currentPage*recordPerPage))
            let paginatedItems;
            let updateCurrentPage=currentPage;
            if(currentPaginatedItems.length===0) {
                paginatedItems=[...lastPaginatedItems];
                updateCurrentPage=currentPage-1;
            }else{

                paginatedItems=[...currentPaginatedItems]
            }
            
            dispatch(deleteTodoSuccess({todos:paginatedItems,total:totalRecordsCount,current:updateCurrentPage}))
        })
        .catch(error=>{
            dispatch(deleteTodoError({msg:error.response.data.msg}))
    })
    }
}





// pagination action 

export const fetchTodoItemsByPageNumber=pageNum=>{
        return (dispatch)=>{
            axios.get(`/todos?page=${pageNum}`)
            .then(response=>{
                const {todos,todoCount}=response.data;
                dispatch(getTodoItemsSuccess({todos,total:todoCount,current:pageNum}))
            })
            .catch(()=>{
                dispatch(getTodoItemsError())
            })
        }
}








