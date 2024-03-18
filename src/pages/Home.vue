<template>
    <h1>欢迎来到{{ this.getNickName }}的世界</h1>
    <button @click="updateName">修改姓名</button>
</template>

<script>
import { useUserStore } from '@/stores/userStore';
import { mapState } from 'pinia';

import { updateApi } from '@/api/user';
import { ElMessage } from 'element-plus';

export default{
    data(){
        return{
            msg:'hello'
        }
    },
    computed: {
        ...mapState(useUserStore,['getNickName']),
        // this.msg = getUserName
    },
    methods:{
        async updateName(){
            const data = {
                'nickname':this.getNickName,
            }
            await updateApi(data)
            .then(response=>{
                console.log(response);
                ElMessage.success('修改成功')
                // location.reload();
            })
            .catch(error=>{
                console.log(error);
                ElMessage.error('修改失败')
            })
        }
    },
}
</script>