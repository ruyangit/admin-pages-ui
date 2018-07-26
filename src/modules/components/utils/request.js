import axios from 'axios'
import { Message } from 'element-ui'
import qs from 'qs';

// create an axios instance
const service = axios.create({
    baseURL: 'https://www.apiopen.top', // api的base_url
    timeout: 5000, // request timeout
})

// request interceptor
service.interceptors.request.use(config => {

    // 在发送请求之前做某件事
    if (
        config.method === "post" ||
        config.method === "put" ||
        config.method === "delete"
    ) {
        // 序列化
        config.data = qs.stringify(config.data);
    }
    console.log('config', config);
    return config
}, error => {
    // Do something with request error
    console.log('error', error) // for debug
    Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
    response => {
        console.log('response', response);
        if (response.data) {
            const { code, msg, data } = response.data
            if (code === 200) {
                return data;
            } else {
                Message({
                    message: "请求失败，异常： " + msg + ' [' + code + ']',
                    type: 'error',
                    duration: 5 * 1000
                })
            }
        }
        return Promise.reject(response);
    },
    error => {
        /**
        * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
        * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
        */
        console.log('error', error)
        return Promise.reject(error)
    })

export default service