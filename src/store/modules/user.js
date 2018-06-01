// import Cookies from 'js-cookie'
import { login, logout } from '@/api/login'
import { userInfo } from '@/api/user'
import { getCookies, setCookies, removeCookies } from '@/utils/cookies'
import { getStore, setStore, removeStore } from '@/utils/storage'
import _CONST from '@/utils/globalConfig'

const state = {
    token: getCookies(_CONST.TOKEN),
    userInfo: getStore(_CONST.USER_INFO)
}

const actions = {
    ['login']({ commit, rootState: { route: { path } } }, user) {

        const loginName = user.loginName.trim()

        return new Promise((resolve, reject) => {
            login(loginName, user.password).then(response => {
                const { data: { result: { access_token }, code } } = response
                //存储登录信息
                commit('setToken', access_token)
                setCookies(_CONST.TOKEN, access_token)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    async ['logout']({ commit }) {
        const { data: { result, code } } = await logout();
        if (result && code === 200) {
            commit('setToken', null)
            removeStore(_CONST.USER_INFO)
            removeCookies(_CONST.TOKEN)
        }
    },
    async ['userInfo']({ commit }) {
        const { data: { result, code } } = await userInfo();
        if (result && code === 200) {
            commit('setUserInfo', result)
            setStore(_CONST.USER_INFO, result)
        }
    },
}

const mutations = {

    ['setToken'](state, payload) {
        state.token = payload
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