<template>
  <div class="login">
    <div class="bg">
      <video class="bgvideo" autoplay="autoplay" loop>
        <source src="../assets/login.mp4" type="video/mp4" />您的浏览器不支持 HTML5 video 标签。
      </video>
    </div>
    <div class="login_body">
      <van-form @submit="onSubmit">
        <h2>系统登录</h2>
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("提交", values);
      this.$router.push("home");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../style/config";

.login {
  height: 100vh;
  border: 1px solid $bg-color;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .login_body {
    box-shadow: 1px solid lightblue;
    width: 450px;
    padding: 25px;
    position: relative;
    z-index: 20;
    background: white;
  }
  .bg {
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 1;
    .bgvideo{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
