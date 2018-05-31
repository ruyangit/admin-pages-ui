import request from '@/utils/request'

export function userInfo() {
    return request({
        url: '/user',
        method: 'get'
    })
}