
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';

import Checkout from './pages/Checkout';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';

import NavBar from './components/NavBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginUserMutation } from './features/api/apiSlice';
import { logUserIn } from './features/userSlice';


function App() {
  const loginUser = useLoginUserMutation()[0]
  const localUserData = JSON.parse(localStorage.getItem('loggedUserData'))
  const dispatch = useDispatch();

  // for keeping user logged in using tioken in 
  useEffect(() => {

    if (localUserData) {
      const { email, password } = localUserData
      const loginValues = { email, password }

      loginUser(loginValues)
        .then(response => {

          dispatch(logUserIn(response.data))


        })
        .catch(error => { console.log(error.response?.data?.message) })

    }

  }, [])

  return (

    <Router>
      <NavBar />


      <Routes>

        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<HomePage />} />
      </Routes>

    </Router>





  );
}

export default App;
