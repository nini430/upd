import './App.css';
import {Routes, Route} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import PrivateRoute from './components/PrivateRoute';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
   <Provider store={store}>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </Provider>
   
  );
}

export default App;
