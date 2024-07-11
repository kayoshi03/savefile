import Cookies from "js-cookie";

export const getAccessToken = () => {
    const accessToken = Cookies.get("token")
    return accessToken || null
}

