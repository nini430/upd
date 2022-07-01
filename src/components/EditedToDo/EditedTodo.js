import axios from 'axios';
import React, {useState} from 'react';
import {Alert, Button, TextField} from '@mui/material';


const EditedTodo = ({item}) => {
  

  const [inputValue, setInputValue] = useState(item.name);

  

  return (
    <div className='todo-item'>
      <TextField
        color='secondary'
        size='small'
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <Button
        color='success'
        variant='contained'
        >
        save
      </Button>

      <Button
        color='error'
        variant='outlined'
       >
        cancel
      </Button>
     
    </div>
  );
};

export default EditedTodo;
