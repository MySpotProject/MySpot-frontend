import axios from "axios";
import { setCookie, getCookie, deleteCookie, hasCookie } from "cookies-next";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    // withCredentials: true,
    headers: {
        // Authorization: token?.replace("myspot_jwt2222=", ""),
        Authorization: getCookie("myspot_jwt2222"),
    },
});

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            deleteCookie("myspot_jwt2222");
            // window.location.href = "/login";
        }
    }
);

export default instance;
