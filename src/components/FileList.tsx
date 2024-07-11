import style from "./files.module.scss"
import {CardItem, ICardItem} from "./CardItem.tsx";
import {useGetData} from "../hooks/useGetData.tsx";
import {Loading} from "./Loading.tsx";

export const FileList = () => {
    const {data, loading} = useGetData()

    if (loading === "succeeded" && Array.isArray(data)) {
        return (
            <div className={style.list}>
                {data.map((item: ICardItem) => (
                    <CardItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        fileName={item.fileName}
                        mimeType={item.mimeType}
                        url={item.url}
                        createdAt={item.createdAt}
                    />
                ))}
            </div>
        );
    }

    return <Loading />;
}