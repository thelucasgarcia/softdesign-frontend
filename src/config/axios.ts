import axios from "axios";
import md5 from "md5";

const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;
const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    params: {
        ts: ts,
        apikey: publicKey,
        hash: hash
    }
});

export default api;