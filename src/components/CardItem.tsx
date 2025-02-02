import style from "./card.module.scss"
import React from "react";
import {ImageFile} from "./ImageFile.tsx";
import {format} from "date-fns"
import {useDeleteFile} from "../hooks/useDeleteFile.tsx";
import {useDonwloadFile} from "../hooks/useDonwloadFile.tsx";

export interface ICardItem {
    id: string
    name: string
    fileName: string
    mimeType: string
    url: string
    createdAt: string
}

export const CardItem:React.FC<ICardItem> = ({url, createdAt, name, fileName, mimeType}) => {
    const {loading,deleteHandler} = useDeleteFile()
    const {donwload} = useDonwloadFile()

    return(
        <div className={style.card}>
            {
                mimeType === "image/jpeg" ? <ImageFile url={url}/> : <>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6 1C4.34315 1 3 2.34315 3 4V20C3 21.6569 4.34315 23 6 23H18C19.6569 23 21 21.6569 21 20V8.82843C21 8.03278 20.6839 7.26972 20.1213 6.70711L15.2929 1.87868C14.7303 1.31607 13.9672 1 13.1716 1H6ZM5 4C5 3.44772 5.44772 3 6 3H12V8C12 9.10457 12.8954 10 14 10H19V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4ZM18.5858 8L14 3.41421V8H18.5858Z" fill="#ffffff"/>
                    </svg>
                </>
            }
            <div className={style.text}>
                <p className={style.name}>{name}</p>
                <p>{fileName}</p>
                <p>{format(new Date(createdAt), 'dd/MM/yy HH:mm:ss')}</p>
            </div>
            <div className={style.buttons}>
                <button onClick={() => donwload(url, fileName)}>Download</button>
                <button disabled={loading} className={style.remove} onClick={() => deleteHandler(url)}>Delete</button>
            </div>

        </div>
    )
}