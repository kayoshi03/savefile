import {useSelector} from "react-redux";
import Cookies from "js-cookie";
import style from "./profile.module.scss"
import {useNavigate} from "react-router-dom";

export const Profile = () => {
    const push = useNavigate()
    const user = useSelector(state => state.user.email)
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