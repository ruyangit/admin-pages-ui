import request from '@/utils/request'

export function userInfo() {
    return request({
        url: '/sys/user',
        method: 'get'
    })
}