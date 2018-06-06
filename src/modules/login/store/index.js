import Vue from 'vue'
import Vuex from 'vuex'

import { login } from '@/api/login'
import { userInfo } from '@/api/user'
import { setCookies } from '@/utils/cookies'
import { setStore } from '@/utils/storage'
import _CONST from '@/utils/globalConfig'

// import user from './modules/user'


Vue.use(Vuex)

const store = new Vuex.Store({
    actions: {
        ['login']({ commit, dispatch }, user) {

            const loginName = user.loginName.trim()

            return new Promise((resolve, reject) => {
                login(loginName, user.password).then(response => {
                    const { data: { result: { access_token }, code } } = response
                    //存储登录信息
                    setCookies(_CONST.TOKEN, access_token)

                    //登录成功获取用户信息
                    dispatch('userInfo')
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        async ['userInfo']({ commit }) {
            const { data: { result, code } } = await userInfo();
            if (result && code === 200) {
                setStore(_CONST.USER_INFO, result)
            }
        },
    }
})

export default store
