import request from '@/utils/request'

export function login(username, password) {
    const data = {
        username,
        password
    }
    return request({
        url: '/auth/form',
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