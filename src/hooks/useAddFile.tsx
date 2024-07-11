import {useState} from "react";
import {axiosAuth} from "../api/interceptor.tsx";
import {fetchMedia} from "../redux/slice/files.slice.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/store.ts";


export const useAddFile = () => {
    const [file, setFile] = useState<FileList | null>(null);
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch<AppDispatch>()

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
                alert("1MB limit exceeded")
                e.target.value = ""
                setFile(null)
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
                if(result.data.status === "ok") {
                    await dispatch(fetchMedia())
                    setFile(null)
                    setLoading(false)
                }
                else {
                    alert("Error")
                    setLoading(false)
                }
            } catch (error) {
                console.error("Upload error:", error);
                alert("An error occurred while uploading files");
                setLoading(false);
            }
        }
    };

    return {file, handleFileChange, handleUpload, loading}
}