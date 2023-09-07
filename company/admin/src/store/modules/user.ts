// import { routes } from '@/router'
import { defineStore } from 'pinia'
import { routesList } from '@/router/config'
import { loginInfo, tagsView } from '@/api/type'
import { getAddRoutes } from '@/router/add-routes'
import { loginAPI, getInfoAPI, logoutAPI, getRoutersAPI } from '@/api/user/user'
import { getItem, setItem, removeAllItem, getLocalItem, setLocalItem, removeLocalItem } from '@/utils/storage'

const useUserStore = defineStore('userStore' , {
  state: () => {return {
    // 存储状态 放置变量所用
    id: 0,
    name: '',
    user: '',
    roles: <any>[],
    avator: '',
    avatar: '',
    nodeRole: undefined,
    menus: <tagsView[]>[],
    userInfo: <any>undefined,
    serverTime: <any>undefined,
    token: getLocalItem('token') || '',
    permissions: getItem('permissions') || [],
  }},
  // getters: {
  //   // 派生状态 就和vue的computed差不多
  //   user (state: any) {
  //     return state
  //   }
  // },
  actions: {
    // 获取set方法
    // 提交状态修改 不支持异步操作
    setToken (token: any) {
      this.token = token
      setLocalItem('token', token)
    },
    setMenus (menus: tagsView[]) {
      this.menus = menus
      // setItem('menus', menus)
    },
    setUserInfo (res: any) {
      const user = res.user

      if (res.roles && res.roles.length > 0) { // 验证返回的roles是否是一个非空数组
        this.roles = res.roles
        this.permissions = res.permissions
        setItem('permissions', res.permissions)
      } else {
        this.roles = ['ROLE_DEFAULT']
      }
      this.userInfo = user
      this.name = user.userName
      this.nodeRole=res.nodeRole
      this.serverTime = new Date(res.sysTime)
      this.avatar = (user.avatar == "" || user.avatar == null) ? '' : user.avatar;
      setItem('userInfo', user)
    },
    login(data: loginInfo) {
      // console.log('state', state)
      return new Promise((resolve, reject) => {
        // loginAPI(data).then((res: any) => {
        //   this.setToken(res.token || '')
        //   resolve(res)
        // }).catch((err: Error) => {
        //   reject(err)
        // })
        try {
          const token = "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImY2MmQ3ZGNlLWU4OTQtNGUyNi1iMGJmLTYxY2IzMWNhZWUwZSJ9.2d7A6S0c_8KamzTwPoYmnVZ9uUT1I1x9iDhmFkOBC6fkIId8dbSpMXSQIdi7lvhpa2YacTXaleXbLVMXig7w_Q"
          this.setToken(token)
          resolve(true)
        } catch(err) {
          reject(err)
        }
      })
    },
    getInfo() {
      return new Promise((resolve, reject) => {
        // getInfoAPI().then((res: any) => {
        //   this.setUserInfo(res)
        //   resolve(res)
        // }).catch((err: Error) => {
        //   reject(err)
        // })
        try {
          const res = {
              "msg": "操作成功",
              "code": 200,
              "permissions": [
                  "*:*:*"
              ],
              "roles": [
                  "superadmin"
              ],
              "nodeRole": {
                  "roleId": 2,
                  "parentId": 1,
                  "roleName": "管理员",
                  "roleKey": "admin",
                  "roleSort": 2,
                  "dataScope": "1",
                  "menuCheckStrictly": true,
                  "deptCheckStrictly": true,
                  "status": "0",
                  "delFlag": "0",
                  "createBy": "supadmin",
                  "createTime": "2022-08-10 14:31:21",
                  "updateBy": "superadmin",
                  "updateTime": "2022-09-04 16:35:37",
                  "remark": "管理员",
                  "menuIds": null,
                  "admin": false
              },
              "sysTime": "2023-09-07 14:49:01",
              "user": {
                  "userId": 10001,
                  "userName": "superadmin",
                  "nickName": "超级管理员",
                  "avatar": "",
                  "password": "",
                  "roleId": null,
                  "isSimulation": 0,
                  "isPromoter": 0
              }
          }
          this.setUserInfo(res)
          resolve(res)
        } catch (err) {
          reject(err)
        }
      })
    },
    getRouters () {
      return new Promise((resolve, reject) => {
        // getRoutersAPI().then((res: any) => {
        //   this.setMenus(getAddRoutes(routesList || []))
        //   resolve(res)
        // }).catch((err: Error) => {
        //   reject(err)
        // })
        try {
          this.setMenus(getAddRoutes(routesList || []))
          resolve(true)
        } catch(err) {
          reject(err)
        }
      })
    },
    loginOut () {
      return new Promise((resolve, reject) => {
        // logoutAPI().then(() => {
        //   this.token = ''
        //   this.roles = []
        //   this.permissions = []
        //   removeLocalItem('token')
        //   removeAllItem()
        //   resolve(true)
        // }).catch((err: Error) => {
        //   reject(err)
        // })
        try {
          this.token = ''
          this.roles = []
          this.permissions = []
          removeLocalItem('token')
          removeAllItem()
          resolve(true)
        } catch(err) {
          reject(err)
        }
      })
    }
  },
})

export default useUserStore