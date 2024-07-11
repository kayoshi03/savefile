import {axiosAuth} from "../api/interceptor.tsx";
import {useDispatch} from "react-redux";
import { useState} from "react";
import {fetchMedia} from "../redux/slice/files.slice.ts";

export const useDeleteFile = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const deleteHandler = async (url) => {
        setLoading(true)
        const data = await axiosAuth.delete(url)
        if(data.data.status == "ok") {
            dispatch(fetchMedia())
            setLoading(false)
        }
        else  {
            alert("Error")
        }
    }

    return {deleteHandler, loading}
}