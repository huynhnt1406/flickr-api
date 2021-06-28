import axios from 'axios'
import configUrl from '../config/index'
let http = axios.create()

http.interceptors.request.use(config => {
    config.baseURL = configUrl.baseURL;
    config.headers = {
        "Content-Type": "application/json",
    }
    return config
}, function(error) {
    return Promise.reject(error)
})

http.interceptors.response.use(response => {
    return response;
},function(error){
    return Promise.reject(error)
})

export default http