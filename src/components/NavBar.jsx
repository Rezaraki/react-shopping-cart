import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import useSignoutFunc from "../utilities/useSignoutFunc";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
const NavBar = () => {
  const cartCount = useSelector((state) => state.cart.length);
  const loggedUser = useSelector((state) => state.logedUser);

  const signOut = useSignoutFunc();
  return (
    <div className=" shadow-lg h-12 md:h-16 lg:h-20 flex justify-between items-center  mb-4 lg:mb-5">
      <div>
        <NavLink className="   " to="/">
          <HomeRoundedIcon
            fontSize="medium"
            color="action"
            className="hover:fill-gray-600"
          />
          Home
        </NavLink>
        <Link to="/cart">
          <LocalMallRoundedIcon
            className="hover:fill-gray-600"
            fontSize="small"
            color="action"
          />
          Cart
          <span className=" ">{cartCount}</span>
        </Link>
      </div>
      <div>
        {loggedUser ? (
          <>
            <span> welcome {loggedUser.name} </span>
            <button onClick={signOut}>signOut</button>
          </>
        ) : (
          <>
            <Link to="/Login"> login </Link>
            <Link to="/SignUp">sign up</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
