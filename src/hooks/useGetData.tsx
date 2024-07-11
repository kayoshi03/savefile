import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMedia} from "../redux/slice/files.slice.ts";

export const useGetData = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.media.data);
    const loading = useSelector((state) => state.media.status)

    useEffect(() => {
        dispatch(fetchMedia())
    }, [dispatch]);

    return {data, loading}
}