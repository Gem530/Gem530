import { loginInfo } from '@/api/type'
import { getItem, setItem, removeItem } from '@/utils/storage'
import { loginAPI, getInfoAPI, logoutAPI } from '@/api/user'

export default {
  state: {
    // 存储状态 放置变量所用
    id: 0,
    name: '',
    user: '',
    roles: [],
    avator: '',
    userInfo: undefined,
    token: getItem('token') || '',
  },
  getters: {
    // 派生状态 就和vue的computed差不多
    user (state: any) {
      return state
    }
  },
  mutations: {
    // 获取set方法
    // 提交状态修改 不支持异步操作
    setUserMutation (state: any, data: any) {
      Object.assign(state, data)
    }
  },
  actions: {
    login({ commit, state }: any, data: loginInfo) {
      // console.log('state', state)
      return new Promise((resolve, reject) => {
        loginAPI(data).then((res: any) => {
          setItem('token', res.token)
          state.token = res.token
          resolve(res)
        }).catch((err: Error) => {
          reject(err)
        })
      })
    },
    getInfo({ commit, state }: any) {
      return new Promise((resolve, reject) => {
        getInfoAPI().then((res: any) => {
          const user = res.user

          if (res.roles && res.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            state.roles = res.roles
            state.permissions = res.permissions
          } else {
            state.roles = ['ROLE_DEFAULT']
          }
          state.userInfo = user
          state.name = user.userName
          state.nodeRole=res.nodeRole
          state.serverTime = new Date(res.sysTime)
          state.avatar = (user.avatar == "" || user.avatar == null) ? '' : user.avatar;
          resolve(res)
        }).catch((err: Error) => {
          reject(err)
        })
      })
    },
    loginOut ({ commit, state }: any) {
      return new Promise((resolve, reject) => {
        logoutAPI().then(() => {
          state.token = ''
          state.roles = []
          state.permissions = []
          removeItem('token')
          resolve(true)
        }).catch((err: Error) => {
          reject(err)
        })
      })
    },
    // 和mutations类似 支持异步操作
    setUserAction ({ commit, state }: any, data: any) {
      commit('setUserMutation', data)
    }
  }
}