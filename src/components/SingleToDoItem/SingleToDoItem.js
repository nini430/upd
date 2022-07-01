import React from 'react';
import EditedTodo from '../EditedToDo';
import {Checkbox, Grid, IconButton} from '@mui/material';
import {Edit, Delete} from '@mui/icons-material';
import { useSelector,useDispatch } from 'react-redux';
import {deleteTodoItem,editTodoItem} from "../../redux";
import "../../axios"

const SingleToDoItem = ({item}) => {

  

  // use selector hook

  const todoItemData=useSelector(store=>{
    return {
      currentPage:store.todos.currentPage,
      recordPerPage:store.todos.recordPerPage,
      todoItems:store.todos.todoItems
    }
  })

  const {currentPage,recordPerPage,todoItems}=todoItemData;
  
// use dispatch hook
const dispatch=useDispatch();

if (item.edit) {
  return <EditedTodo item={item} />;
}

const deleteItem=()=>{
  dispatch(deleteTodoItem(item._id,currentPage,recordPerPage))
}

const editItem=()=>{
  dispatch(editTodoItem(item._id,{edit:true},todoItems))
}

  

  

  return (
    <div className='size-const'>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={1}>
          <Checkbox
            
            checked={item.completed ? true : false}
            color='secondary'
            type='checkbox'
          />
        </Grid>
        <Grid
          item
          xs={3}
          className={`${
            item.completed ? 'line-through overflow' : 'overflow'
          }`}>
          <span>{item.name}</span>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={editItem} >
            <Edit />
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={deleteItem}
            color='error'
            >
            <Delete />
          </IconButton>
        </Grid>
      </Grid>
  
    </div>
  );
};

export default SingleToDoItem;
