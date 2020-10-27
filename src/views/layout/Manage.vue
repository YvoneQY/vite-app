<template>
  <div class="manage">
    <van-row gutter="20" class="lheader">
      <van-col span="20">xx系统</van-col>
    </van-row>
    <van-row style="flex:1" class="lcontain">
      <van-col span="4">

        <div class="lavatar">
          <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="lmenu">

        </div>

      </van-col>
      <van-col span="10" offset="4">CONTENT</van-col>
    </van-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Manage",
  data(){
    return{
      menus:[
        {name:'首页',path:'/',icon:'home'},
        {name:'首',path:'/',icon:'home'},
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
.manage {
  height: 100%;
  display: flex;
  flex-direction: column;
}

::v-deep .demo-col .van-col {
  background-color: #39a9ed;
}

.lheader {
  border: 1px solid red;
  height: 80px;
}
.lcontain {
  border: 1px solid green;
}
</style>