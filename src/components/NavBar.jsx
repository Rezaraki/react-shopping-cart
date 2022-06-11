import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logUserOut } from "../features/userSlice";
const NavBar = () => {
  const cartCount = useSelector((state) => state.cart.length);
  const loggedUser = useSelector((state) => state.logedUser);
  const dispatch = useDispatch();
  return (
    <>
      <NavLink className="bg-blue-500 decoration-blue-500" to="/">
        home
      </NavLink>
      <Link to="/cart">
        cart<span className="bg-blue-500">{cartCount}</span>
      </Link>
      {loggedUser ? (
        <>
          <span> welcome {loggedUser.name} </span>
          <button onClick={() => dispatch(logUserOut())}>signOut</button>
        </>
      ) : (
        <>
          <Link to="/Login"> login </Link>
          <Link to="/SignUp">sign up</Link>
        </>
      )}
    </>
  );
};

export default NavBar;
