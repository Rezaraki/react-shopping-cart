import logo from './logo.svg';
import './App.css';
// import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import { useSelector } from 'react-redux';
import Checkout from './pages/Checkout';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';

function App() {
  const cartCount = useSelector(state => state.cart.length)
  return (

    <Router>
      <Link to='/'>home </Link>
      <Link to='/cart'>cart<span>{cartCount}</span></Link>
      <Link to='/Login'> login </Link>
      <Link to='/SignUp'>sign up</Link>


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
