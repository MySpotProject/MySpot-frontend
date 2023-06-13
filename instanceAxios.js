import axios from "axios";
import { setCookie, getCookie, deleteCookie, hasCookie } from "cookies-next";
const https = require("https");

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false,
    }),
    // withCredentials: true,
    insecure: true,
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
