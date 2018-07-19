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

            const username = user.username.trim()

            return new Promise((resolve, reject) => {
                login(username, user.password).then(response => {
                    const { access_token, expires_in, token_type } = response
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
            const response = await userInfo();
            if (response) {
                setStore(_CONST.USER_INFO, response)
            }
        },
    }
})

export default store
