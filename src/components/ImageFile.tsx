import {useEffect} from "react";
import {useGetFile} from "../hooks/useGetFile.tsx";


export const ImageFile = ({url}) => {
    const {imgSrc,fetch} = useGetFile()

    useEffect(() => {
        fetch(url)
    }, [fetch, url]);

    return (
        <img src={imgSrc} alt={"img"}/>
    )
}