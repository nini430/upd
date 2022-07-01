import {Typography, IconButton, Button, Alert} from '@mui/material';
import {Add} from '@mui/icons-material';
import SingleToDoItem from '../components/SingleToDoItem/SingleToDoItem'
import Pagination from '../components/Pagination/Pagination';
import {FaUserCircle, FaCaretDown} from 'react-icons/fa';
import {useEffect, useRef, useState} from 'react';
import {Navigate} from 'react-router-dom';
import Loading from '../components/Loading';
import {useDispatch, useSelector} from 'react-redux';
import {getTodoItems, logout,createTodoItem} from '../redux';




function HomePage() {
  const inputRef = useRef(null);

  // useSelector hook

  const todoItemsData = useSelector((store) => {
    return {
      user: store.user.user,
      todoItems: store.todos.todoItems,
      isLoading: store.todos.isLoading,
      showAlert:store.todos.showAlert,
      alertText:store.todos.alertText,
      recordPerPage:store.todos.recordPerPage
    };
  });

  const {user, todoItems, isLoading,showAlert,alertText,recordPerPage} = todoItemsData;

  // useDispatch hook

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoItems());
  }, []);

  const [showLogout, setShowLogout] = useState(false);

  if (!user) {
    return <Navigate to='/register' />;
  }

  if (isLoading) {
    return <Loading />;
  }

  const addTodoHandler=e=>{
      e.preventDefault();
      dispatch(createTodoItem({name:inputRef.current.value},recordPerPage))
      inputRef.current.value="";
  }


  const handleLogout=()=>{
    dispatch(logout())
    localStorage.removeItem("user")
  }

  return (
    <div className='App'>
      <div className='user'>
        <Button onClick={()=>setShowLogout(!showLogout)} variant='contained' color='secondary'>
          <FaUserCircle />
          {user}
          <FaCaretDown />
        </Button>
        {showLogout && (
          <Button onClick={handleLogout} variant='outlined' color='secondary'>
            Log out
          </Button>
        )}
      </div>

      <header>
        <Typography variant='h2'>To do List </Typography>
      </header>
      <form onSubmit={addTodoHandler} className='form-control'>
        {showAlert && <Alert severity='error'>{alertText}</Alert>}
        <input type='text' ref={inputRef} />
        <IconButton color='secondary' size='large' type='submit'>
          <Add />
        </IconButton>
      </form>
      <div className='itemContainer'>
        {todoItems?.length ? (
          todoItems.map((item) => {
            return (
              <SingleToDoItem
                key={item._id}
                item={item}
                todoItems={todoItems}
              />
            );
          })
        ) : (
          <h1>No todo items yet</h1>
        )}
      </div>
        <Pagination />
      </div>
  
  );
}

export default HomePage;
