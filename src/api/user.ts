import request from "@/utils/request";

export const loginApi=(data) => {
    return request({
        url:'/v1/tokens',
        method:'post',
        data: data,
    })
}

export const registerApi=(data) => {
    return request({
        url:'/v1/users',
        method:'post',
        data: data
    })
}

export const updateApi=(data) => {
    return request({
        url:'/v1/users',
        method:'put',
        data: data
    })
}



    
   