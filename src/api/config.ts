import axios from "axios";

const instance = axios.create({
    baseURL: "https://project-hungthinhland-api-main-assignment-react-carot204.vercel.app/api/products",

})

instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

export default instance;