import axios from "axios";
import router from "@/router"

const axiosInstance= axios.create({
    baseURL: 'http://127.0.0.1:8000/',
       
});

axiosInstance.interceptors.response.use(undefined, function(error){
    if (error.response.status === 401){
        router.push('/register');
    }
    return Promise.reject(error);
})

export default{
    install (Vue, options){
        Vue.prototype.$axios = axiosInstance;
    }
};