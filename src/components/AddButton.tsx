import {useGetData} from "../hooks/useGetData.tsx";
import {useAddFile} from "../hooks/useAddFile.tsx";
import style from "./add.module.scss"
export const AddButton = () => {
    const {data} = useGetData()
    const {file, loading, handleUpload, handleFileChange} = useAddFile()
    return (
        <>
            <input className={style.add} multiple={true} disabled={data.length == 19} id="file" type="file" onChange={handleFileChange}/>
            {file && file.length > 0 && <button className={style.button}  disabled={loading} onClick={handleUpload}>Upload a file</button>}
        </>
    )
}