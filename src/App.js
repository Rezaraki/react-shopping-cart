import logo from './logo.svg';
import './App.css';
// import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';

function App() {
  return (

    <Router>

      <Link to='/'>home</Link>
      <Link to='/cart'>cart</Link>

      <Routes>

        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<HomePage />} />
      </Routes>

    </Router>





  );
}

export default App;
