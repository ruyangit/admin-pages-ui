// import Cookies from 'js-cookie'
import { login, logout } from '@/api/login'
import { userInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'


const state = {
    token: getToken(),
    userInfo: {}
}

const actions = {
    ['login']({ commit, rootState: { route: { path } } }, user) {

        const loginName = user.loginName.trim()

        return new Promise((resolve, reject) => {
            login(loginName, user.password).then(response => {
                const { data: { result, code } } = response
                commit('setToken', result.access_token)
                setToken(result.access_token)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    ['logout']({ commit }) {
        return new Promise((resolve, reject) => {
            commit('setToken', '')
            removeToken()
            resolve()
        })
    },
    ['userInfo']({ commit }) {
        return new Promise((resolve, reject) => {
            userInfo().then(response => {
                console.log(response);
                //commit('setToken', '')
                //removeToken()
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
}

const mutations = {

    ['setToken'](state, payload) {
        state.token = payload
        //setStore('access_token', payload.access_token)
        //setStore('expires_in', payload.expires_in)
        //setStore('token_type', payload.token_type)
        // Cookies.set('token', payload.access_token, { expires: (payload.expires_in / 86400) });
    },
    ['setUserInfo'](state, payload) {
        state.userInfo = payload
    }

}

const getters = {
    ['getToken'](state) {
        return state.token;
    },
    ['getUserInfo'](state) {
        return state.getUserInfo;
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}