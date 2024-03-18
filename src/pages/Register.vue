<template>
    <div class="contain ">
        <form class="form" @submit.prevent="submitForm">
            <p class="title">注册</p>
            <!-- <p class="message"> </p> -->
                <!-- <div class="flex"> -->
            
            <label>
                <input placeholder="" v-model="username" type="text" class="input" required>
                <span>用户名</span>
                <span v-if="username_error" class="error">{{ username_error }}</span>
                <!-- <template >出错</template> -->
            </label>
        
            <label>
                <input required placeholder="" v-model="email" type="text" class="input" >
                <span>邮箱</span>
                <span v-if="email_error" class="error">{{ email_error }}</span>
            </label> 
                
            <label>
                <input required placeholder="" v-model="password" type="password" class="input">
                <span>密码</span>
            </label>
            <label>
                <input required placeholder="" v-model="password2" type="password" class="input">
                <span>确认密码</span>
                <span v-if="password_error" class="error">{{ password_error }}</span>
            </label>
            <span class="form_span">还可选择以下方式注册：</span>
            <div class="form_icons">
                <img src="@/assets/img/WeChat.png" class="login-sns-item-icon " width=25px height=25px>
            </div>
            

            <button class="submit">提交</button>
            <p class="signin">已经有账号了嘛 ? <router-link to="/login">登录</router-link> </p>
        </form>
    </div>
</template>

<script>
import { registerApi } from "@/api/user"
import { ElMessage } from 'element-plus'

export default {
    data() {
        return {
            username: "",
            username_error: "",
            email: "",
            email_error: "",
            password: "",
            password2: "",
            password_error: "",
        }
    },
    methods: {
        async submitForm() {
            if(this.username.lenght>30){
                this.username_error = "昵称不能超过30个字符";
            }
            if (!this.validateEmail()) {
                // alert('邮箱格式不正确!');
                this.email_error = '邮箱格式不正确!';
            } else if (this.password !== this.password2) {
                // alert('再次输入密码与原密码不一致！');
                this.password_error = '再次输入密码与原密码不一致！';
            } else {
                const requestData = {
                    username: this.username,
                    email: this.email,
                    password: this.password
                };
                await registerApi(requestData)
                .then(response => {
                    ElMessage.success('注册成功！')
                    this.$router.push('/login')
                    console.log(response)

                })
                .catch((error) => {
                    // 处理请求失败的逻辑
                    console.log(error);
                });
            }
        },
        validateEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(this.email);
        },
    },
}

</script>

<style src="@/assets/css/register.css" scoped>

</style>