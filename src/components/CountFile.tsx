import {useGetData} from "../hooks/useGetData.tsx";
import style from "./count.module.scss"
export const CountFile = () => {
    const {data} = useGetData()
    return (
        <h2 className={style.text}>{data.length}/19</h2 >
)
}