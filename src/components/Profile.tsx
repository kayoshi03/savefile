import {useSelector} from "react-redux";
import Cookies from "js-cookie";
import style from "./profile.module.scss"
import {useNavigate} from "react-router-dom";
import {RootState} from "../redux/store.ts";

export const Profile = () => {
    const push = useNavigate()
    const user = useSelector((state:RootState) => state.user.email as string)
    const logoutHandler = () => {
        Cookies.set("token", "")
        push("../login")
    }

    return (
        <div className={style.profile}>
            <p>Email: {user}</p>
            <button onClick={logoutHandler}>LogOut</button>
        </div>
    )
}