<template>
  <div class="login">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
<<<<<<< HEAD
      <h3 class="title">{{title}}</h3>
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          type="text"
          auto-complete="off"
          placeholder="账号"
        >
=======
      <h3 class="title">若依后台管理系统</h3>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="账号">
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
          <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon" />
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码"
          @keyup.enter.native="handleLogin"
        >
          <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />
        </el-input>
      </el-form-item>
<<<<<<< HEAD
      <el-form-item prop="code" v-if="captchaEnabled">
=======
      <el-form-item prop="code">
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
        <el-input
          v-model="loginForm.code"
          auto-complete="off"
          placeholder="验证码"
          style="width: 63%"
          @keyup.enter.native="handleLogin"
        >
          <svg-icon slot="prefix" icon-class="validCode" class="el-input__icon input-icon" />
        </el-input>
        <div class="login-code">
<<<<<<< HEAD
          <img :src="codeUrl" @click="getCode" class="login-code-img"/>
=======
          <img :src="codeUrl" @click="getCode" />
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
        </div>
      </el-form-item>
      <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleLogin"
        >
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
<<<<<<< HEAD
        <div style="float: right;" v-if="register">
          <router-link class="link-type" :to="'/register'">立即注册</router-link>
        </div>
=======
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <div class="el-login-footer">
<<<<<<< HEAD
      <span>{{ footerContent }}</span>
=======
      <span>Copyright © 2018-2019 ruoyi.vip All Rights Reserved.</span>
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import { getCodeImg } from "@/api/login"
import Cookies from "js-cookie"
import { encrypt, decrypt } from '@/utils/jsencrypt'
import defaultSettings from '@/settings'
=======
import { getCodeImg } from "@/api/login";
import Cookies from "js-cookie";
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)

export default {
  name: "Login",
  data() {
    return {
<<<<<<< HEAD
      title: process.env.VUE_APP_TITLE,
      footerContent: defaultSettings.footerContent,
      codeUrl: "",
=======
      codeUrl: "",
      cookiePassword: "",
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
      loginForm: {
        username: "admin",
        password: "admin123",
        rememberMe: false,
        code: "",
        uuid: ""
      },
      loginRules: {
        username: [
<<<<<<< HEAD
          { required: true, trigger: "blur", message: "请输入您的账号" }
        ],
        password: [
          { required: true, trigger: "blur", message: "请输入您的密码" }
        ],
        code: [{ required: true, trigger: "change", message: "请输入验证码" }]
      },
      loading: false,
      // 验证码开关
      captchaEnabled: true,
      // 注册开关
      register: false,
      redirect: undefined
    }
=======
          { required: true, trigger: "blur", message: "用户名不能为空" }
        ],
        password: [
          { required: true, trigger: "blur", message: "密码不能为空" }
        ],
        code: [{ required: true, trigger: "change", message: "验证码不能为空" }]
      },
      loading: false,
      redirect: undefined
    };
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
  },
  watch: {
    $route: {
      handler: function(route) {
<<<<<<< HEAD
        this.redirect = route.query && route.query.redirect
=======
        this.redirect = route.query && route.query.redirect;
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
      },
      immediate: true
    }
  },
  created() {
<<<<<<< HEAD
    this.getCode()
    this.getCookie()
=======
    this.getCode();
    this.getCookie();
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
  },
  methods: {
    getCode() {
      getCodeImg().then(res => {
<<<<<<< HEAD
        this.captchaEnabled = res.captchaEnabled === undefined ? true : res.captchaEnabled
        if (this.captchaEnabled) {
          this.codeUrl = "data:image/gif;base64," + res.img
          this.loginForm.uuid = res.uuid
        }
      })
    },
    getCookie() {
      const username = Cookies.get("username")
      const password = Cookies.get("password")
      const rememberMe = Cookies.get('rememberMe')
      this.loginForm = {
        username: username === undefined ? this.loginForm.username : username,
        password: password === undefined ? this.loginForm.password : decrypt(password),
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
      }
=======
        this.codeUrl = "data:image/gif;base64," + res.img;
        this.loginForm.uuid = res.uuid;
      });
    },
    getCookie() {
      const username = Cookies.get("username");
      const password = Cookies.get("password");
      const rememberMe = Cookies.get('rememberMe')
      this.loginForm = {
        username: username === undefined ? this.loginForm.username : username,
        password: password === undefined ? this.loginForm.password : password,
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
      };
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
<<<<<<< HEAD
          this.loading = true
          if (this.loginForm.rememberMe) {
            Cookies.set("username", this.loginForm.username, { expires: 30 })
            Cookies.set("password", encrypt(this.loginForm.password), { expires: 30 })
            Cookies.set('rememberMe', this.loginForm.rememberMe, { expires: 30 })
          } else {
            Cookies.remove("username")
            Cookies.remove("password")
            Cookies.remove('rememberMe')
          }
          this.$store.dispatch("Login", this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || "/" }).catch(()=>{})
          }).catch(() => {
            this.loading = false
            if (this.captchaEnabled) {
              this.getCode()
            }
          })
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
=======
          this.loading = true;
          if (this.loginForm.rememberMe) {
            Cookies.set("username", this.loginForm.username, { expires: 30 });
            Cookies.set("password", this.loginForm.password, { expires: 30 });
            Cookies.set('rememberMe', this.loginForm.rememberMe, { expires: 30 });
          } else {
            Cookies.remove("username");
            Cookies.remove("password");
            Cookies.remove('rememberMe');
          }
          this.$store
            .dispatch("Login", this.loginForm)
            .then(() => {
              this.loading = false;
              this.$router.push({ path: this.redirect || "/" });
            })
            .catch(() => {
              this.loading = false;
              this.getCode();
            });
        }
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
<<<<<<< HEAD
  background-image: url("../assets/images/login-background.jpg");
=======
  background-image: url("../assets/image/login-background.jpg");
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
  background-size: cover;
}
.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  padding: 25px 25px 5px 25px;
<<<<<<< HEAD
  z-index: 1;
=======
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
  .el-input {
    height: 38px;
    input {
      height: 38px;
    }
  }
  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
}
.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
.login-code {
  width: 33%;
  height: 38px;
  float: right;
  img {
    cursor: pointer;
    vertical-align: middle;
  }
}
.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}
<<<<<<< HEAD
.login-code-img {
  height: 38px;
}
=======
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
</style>
