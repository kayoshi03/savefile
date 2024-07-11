import {axiosAuth} from "../api/interceptor.tsx";

export const useDonwloadFile = () => {
    const donwload = async (link:string, name:string) => {
        const data = await axiosAuth.get(link, {
            responseType: "blob"
        })
        const blob = data.data

        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = name
        a.click()
    }

    return {donwload}
}