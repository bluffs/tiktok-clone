import axios from "axios";

const instance = axios.create({
    baseURL: "https://tiktok-jal.herokuapp.com/"
});

export default instance;