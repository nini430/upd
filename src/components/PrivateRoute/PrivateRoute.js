import React from 'react';
import {Navigate} from 'react-router-dom';

function PrivateRoute({children}) {
  console.log("aq saertod?")
  if (!localStorage.getItem('user')) {
    return <Navigate to='/register' />;
  } else {
    return children;
  }
}

export default PrivateRoute;
