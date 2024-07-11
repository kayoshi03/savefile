import axios , {CreateAxiosDefaults} from "axios";
import {getAccessToken} from "./token.tsx";

const options:CreateAxiosDefaults = {
    baseURL: "https://js-test.kitactive.ru"
}


const axiosAuth = axios.create(options)

axiosAuth.interceptors.request.use(config => {
    const token = getAccessToken()

    if (config?.headers && token)
        config.headers.Authorization = `Bearer ${token}`

    return config
})

export {axiosAuth}