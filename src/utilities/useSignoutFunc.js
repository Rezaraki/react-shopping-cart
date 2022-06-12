import { useDispatch } from "react-redux";
import { logUserOut } from "../features/userSlice";
const useSignoutFunc = () => {

    const dispatch = useDispatch();
    return (() => { dispatch(logUserOut()); localStorage.removeItem('loggedUserData') })



}

export default useSignoutFunc;
