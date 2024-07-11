import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMedia} from "../redux/slice/files.slice";
import {AppDispatch, RootState} from "../redux/store";

export const useGetData = () => {
    const dispatch = useDispatch<AppDispatch>()
    const data = useSelector<RootState>((state) => state.media.data);
    const loading = useSelector<RootState>((state) => state.media.status)

    useEffect(() => {
        dispatch(fetchMedia())
    }, [dispatch]);
    return {data, loading}
}