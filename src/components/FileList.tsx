import style from "./files.module.scss"
import {CardItem} from "./CardItem.tsx";
import {useGetData} from "../hooks/useGetData.tsx";
import {Loading} from "./Loading.tsx";

export const FileList = () => {
    const {data, loading} = useGetData()

    return (
        <div className={style.list}>
            {
                loading == "succeeded" ? data?.map((item) => (
                    <CardItem key={item.id} id={item.id} name={item.name} fileName={item.fileName} mimeType={item.mimeType} url={item.url} createdAt={item.createdAt}/>
                )) : <Loading/>
            }

        </div>
    )
}