import request from '@/utils/request'

export function login(loginName, password) {
    const data = {
        loginName,
        password
    }
    return request({
        url: '/auth/token',
        method: 'post',
        data
    })
}

export function logout() {
    return request({
        url: '/auth/token',
        method: 'delete'
    })
}