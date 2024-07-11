import React, {useEffect} from "react";
import {useGetFile} from "../hooks/useGetFile.tsx";

interface ImageFileProps {
    url: string;
}
export const ImageFile: React.FC<ImageFileProps> = ({url}) => {
    const {imgSrc,fetch} = useGetFile()

    useEffect(() => {
        fetch(url)
    }, [fetch, url]);

    return (
        <img src={imgSrc} alt={"img"}/>
    )
}