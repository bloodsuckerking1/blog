<template>
    <div class="contain ">
        <form class="form" @submit.prevent="submitForm">
            <p class="title">登录</p>
            <!-- <p class="message"> </p> -->
                <!-- <div class="flex"> -->
            
            <label>
                <input placeholder="" v-model="user_info" type="text" class="input" required>
                <span>用户名/邮箱/手机号</span>
                <span v-if="user_error" class="error">{{ user_error }}</span>
                <!-- <template >出错</template> -->
            </label>
             
            <label>
                <input required placeholder="" v-model="password" type="password" class="input">
                <span>密码</span>
                <span v-if="password_error" class="error">{{ password_error }}</span>
            </label>

            <span class="form_span">还可选择以下方式登录：</span>
            <div class="form_icons">
                <img src="@/assets/img/WeChat.png" class="login-sns-item-icon " width=25px height=25px>
            </div>
            

            <button class="submit">提交</button>
            <p class="signin">没有账号吗 ? <router-link to="/register">注册</router-link> </p>
        </form>
    </div>
  </template>
  
<script>
import { loginApi } from '@/api/user'
import { ElMessage } from 'element-plus'

import { useUserStore } from '@/stores/userStore'
import { mapActions } from 'pinia';

export default {
  data() {
    return {
      user_info: '',
      user_error: '',
      password: '',
      password_error: '',
    };
  },
  computed() {
    // const userStore = useUserStore();
  },
  methods: {
    ...mapActions(useUserStore,['setToken','setUserName','setNickName']),
    async submitForm() {
        const requestData = {
          user_info: this.user_info,
          password: this.password
        };
        await loginApi(requestData).then(response => {
            ElMessage.success('登录成功！')
            console.log(response);
            this.setToken(response.data.token);
            this.setUserName(response.data.username);
            this.setNickName(response.data.nickname);
            this.$router.push({path:'home'});
      })
      .catch(error => {
          // 处理请求失败的逻辑
        //   alert('请求失败！')
      });
    

    },

    
  },
};
</script>
  
  <style src="@/assets/css/register.css" scoped>
  /* Vue 组件的样式 */
  </style>
  
  
  @/api/user