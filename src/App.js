
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';

import Checkout from './pages/Checkout';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';

import NavBar from './components/NavBar';
import { useEffect } from 'react';
import loginFunc from './utilities/loginFunc';

function App() {
  const localUserData = JSON.parse(localStorage.getItem('loggedUserData'))

  useEffect(() => {
    const { email, password } = localUserData
    const loginValues = { email, password }

    loginFunc(loginValues)
      .then(response => {

        dispatch(logUserIn(response.data))
        localStorage.setItem('loggedUserData', JSON.stringify(response.data))
        if (cartCount) navigate('/cart'); else navigate('/')
      })
      .catch(error => { setLoginErr(error.response.data.message) })


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
