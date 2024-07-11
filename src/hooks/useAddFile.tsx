import {useState} from "react";
import {FileList} from "../components/FileList.tsx";
import {axiosAuth} from "../api/interceptor.tsx";
import {fetchMedia} from "../redux/slice/files.slice.ts";
import {useDispatch} from "react-redux";


export const useAddFile = () => {
    const [file, setFile] = useState<FileList | null>(null);
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    //Select Files
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            let sum = 0
            for(let i = 0; i < e.target.files?.length; i++ ) {
                sum += e.target.files[i].size
            }
            if (sum < 1000000){
                setFile(e.target.files);
            }
            else {
                alert("1MB limited")
            }
        }
    };

    //Upload Files
    const handleUpload = async () => {
        if (file) {
            setLoading(true)
            const formData = new FormData();
            for (let i = 0; i < file.length; i++) {
                formData.append('files[]', file[i]);
            }
            try {
                const result = await axiosAuth.post("/api/media/upload", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
                if(result.data.status == "ok") {
                    dispatch(fetchMedia())
                    setLoading(false)
                }
                else {
                    alert("Error")
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    return {file, handleFileChange, handleUpload, loading}
}