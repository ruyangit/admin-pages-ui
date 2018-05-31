import axios from 'axios'
import { Message, MessageBox} from 'element-ui'
import { getToken } from '@/utils/auth'
import store from '@/store'
import qs from 'qs';

// create an axios instance
const service = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    timeout: 5000, // request timeout
    // responseType: "json",
    crossDomain: true,
    xhrFields: { withCredentials: true },
    // headers: {
    //     "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    // }
})

// request interceptor
service.interceptors.request.use(config => {
    // Do something before request is sent
    if (store.getters["user/getToken"]) {
        config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带token-- ['Authorization']为自定义key 请根据实际情况自行修改
    }

    // 在发送请求之前做某件事
    if (
        config.method === "post" ||
        config.method === "put" ||
        config.method === "delete"
    ) {
        // 序列化
        config.data = qs.stringify(config.data);
    }
    console.log(config);
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
    response => {
        /**
        * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
        * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
        */
        const res = response.data;
        // console.log(response);
        if (res.code !== 200) {
            Message({
                message: res.message,
                type: 'error',
                duration: 5 * 1000
            });

            // 100401:非法的token; 100412:其他客户端登录了;  100413:Token 过期了;
            if (res.code === 100401 || res.code === 100412 || res.code === 100413) {
                MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    store.dispatch('user/logout').then(() => {
                        location.reload();// 为了重新实例化vue-router对象 避免bug
                    });
                })
            }
            return Promise.reject(res);
        } else {
            return response;
        }
    },
    error => {
        console.log('err' + error)// for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    })

export default service