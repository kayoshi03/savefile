import {useGetData} from "../hooks/useGetData.tsx";
import style from "./count.module.scss"
export const CountFile = () => {
    const {data} = useGetData()
    const count = Array.isArray(data) ? data.length : 0;
    return (
        <h2 className={style.text}>{count}/19</h2 >
)
}