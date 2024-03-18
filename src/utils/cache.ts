import constant from './constants'
class Cache{
    setToken(token:string){
        if(token===undefined){
            return
        }
        window.localStorage.setItem(constant.tokenKey,JSON.stringify(token))
    }
    setUserName(username:string){
        if(username==undefined){
            return
        }
        window.localStorage.setItem(constant.usernameKey,JSON.stringify(username))
    }
    setNickName(nickname:string){
        if(nickname==undefined){
            return
        }
        window.localStorage.setItem(constant.nicknameKey,JSON.stringify(nickname))
    }

    getToken(){
        let result:any = window.localStorage.getItem(constant.tokenKey)
        return JSON.parse(result)
    }
    getUserName(){
        let result:any = window.localStorage.getItem(constant.usernameKey)
        return JSON.parse(result)
    }
    getNickName(){
        let result:any = window.localStorage.getItem(constant.nicknameKey)
        return JSON.parse(result)
    }
}

export default new Cache()