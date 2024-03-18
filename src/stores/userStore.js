import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import cache from '@/utils/cache'

export const useUserStore = defineStore('userStoreId',  {
  state:() => ({
    token: "",
    username: "",
    nickname: "",
  }),
  getters:{
    getUserName(state) {
      if(state.username){
        return state.username
      }
      return cache.getUserName()
    }, 
    getToken(state) {
      if(state.token){
        return state.token
      }
      return cache.getToken()
    },
    getNickName(state) {
      if(state.nickname){
        return state.nickname
      }
      return cache.getNickName()
    }
  },

  actions:{
    setToken(token) {
      this.token = token
      cache.setToken(token)
    },
    setUserName(username) {
      this.username = username
      cache.setUserName(username)
    },
    setNickName(nickname) {
      this.nickname = nickname
      cache.setNickName(nickname)
    }
  }
})
