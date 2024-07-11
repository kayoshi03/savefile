import React, {useState} from "react";
import axios from "axios";
import Cookies from "js-cookie"
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginReducer} from "../redux/slice/user.slice.ts";
import style from "./form.module.scss"
interface IForm {
    type: "login" | "register"
}

export const Form:React.FC<IForm> = ({type}) => {
    //form login/register
    const push = useNavigate()
    const dispatch = useDispatch()

    const [error, setError] = useState(false)

    const fetch = async (e) => {
        e.preventDefault()
        setError(false)
        const field = new FormData(e.target)
        try {
            const data = await axios.post(`https://js-test.kitactive.ru/api/${type}`, {
                email: field.get("email"),
                password: field.get("pass"),
                name: field.get("name")
            })
            if(data.data.status == "ok") {
                if(type == "login") {
                    dispatch(loginReducer(field.get("email")))
                    localStorage.setItem("user", field.get("email") as string)
                    Cookies.set("token", data.data.token)
                    push("/cabinet")
                }
                else {
                    push("/login")
                }
            }
        }
        catch (err) {
            setError(true)
        }

    }

    return (
        <form className={style.form} onSubmit={(e) => fetch(e)}>
            <h2>{type === "login" ? "Авторизация" : "Регистрация"}</h2>

            {
                error ? <p>Не правильный пароль или логин</p> : <i></i>
            }

            <label>
                Email
                <input required type={"email"} name={"email"}/>
            </label>
            <label>
                Password
                <input required minLength={4} maxLength={16} type={"password"} name={"pass"}/>
            </label>

            {
                type == "register" ? <label> Name <input required name={"name"}/></label> : <></>
            }
            {
                type == "register" ? <Link to={"/login"}>Авторизация</Link> : <Link to={"/signup"}>Регистрация</Link>
            }
            <button>Войти</button>
        </form>
    )
}