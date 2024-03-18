import axios,{ AxiosResponse, InternalAxiosRequestConfig }from "axios";
import { ElMessage } from 'element-plus'
import { useUserStore } from "@/stores/userStore"


const request = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 5000,
    headers: {'Content-Type': 'application/json'},
});


request.interceptors.request.use((request:InternalAxiosRequestConfig) => {
    const userStore = useUserStore()
    if(userStore.getToken){
        request.headers.Authorization = userStore.getToken 
    }
    return request
},(error)=>{
    ElMessage.error(error.response.data.error);
    return Promise.reject(error.response.data.error);
})


request.interceptors.response.use((response:AxiosResponse) => {
    if (response.status === 200) {
        if (response.data.code===200){
            return response.data
        }
        ElMessage.error(response.data.error);
    }
    return Promise.reject(response.statusText);
},(error)=>{
    // console.log(error.response.data.error)
    ElMessage.error(error.response.data.error);
    return Promise.reject(error.response.data.error);
})

export default request