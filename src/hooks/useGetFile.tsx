import {useCallback, useState} from "react";
import {axiosAuth} from "../api/interceptor.tsx";

export const useGetFile = () => {
    const [imgSrc, setImgSrc] = useState('');
    //Get images
    const fetch = useCallback(async (url:string) => {
        const data = await axiosAuth.get(url, {
            responseType: "blob"
        });
        const contentType = data.headers['content-type'];

        if (contentType && contentType.startsWith("image")) {
            const blob = data.data;
            const objectUrl = URL.createObjectURL(blob);
            setImgSrc(objectUrl);
        } else {
            console.log("err");
        }
    }, []);

    return {imgSrc, fetch}
}