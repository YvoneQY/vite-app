<template>
  <div class="manage">
    <div class="lheader">
      <span class="item" @click="hideMenu()"><i class="iconfont iconcaidan1"></i></span>
      <span class="item">
        <van-icon  size="35" name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
        <van-icon size="35" name="chat-o" badge="99+" />
      </span>
    </div>
    <div class="lcontain">
      <transition name="slide-fade">
        <div class="lside" v-if="show">
          <van-image round width="8rem" height="10rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <div class="lsideInfo">
            用户名
          </div>
          <ul class="lsideul">
            <li class="lsideli" v-for="item of menus" :key="item.icon" @click="menu(item)">
              {{item.name}} <i class="iconfont">&#xe61e;</i>
            </li>
          </ul>
        </div>
      </transition>


      <div class="lcontent">
        <transition name="fade">
          <router-view style="flex:1;"></router-view>
        </transition>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Manage",
  data() {
    return {
      menus: [
        // { name: "首页", path: "/", icon: "home" },
        { name: "任务", path: "/task", icon: "task" },
        { name: "播放", path: "/about", icon: "play" },
        { name: "设置", path: "/set", icon: "set" },
        { name: "例子", path: "/vlist", icon: "set" },
      ],
      show:false
    };
  },
  methods:{
    menu(item){
      this.$router.push(item.path)
    },
    hideMenu(){
      this.show=!this.show;
    },

  }
};
</script>
<style lang="scss" scoped>
.manage {
  height: 100%;
  display: flex;
  flex-direction: column;
  // color: white;
}

.lheader {
  border: 1px solid red;
  height: 45px;
  line-height: 45px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
.lcontain {
  border: 1px solid green;
  flex: 1;
  display: flex;
}
.lside {
  width: 200px;
  border: 1px solid red;
  .lsideInfo{
    text-align: center;
  }
  .lsideul{
    height: 100%;
    overflow-y: auto;
    .lsideli{
      height: 40px;
      line-height: 40px;
      border:1px solid red;
      // margin:10px 0;
    }
  }
}
.lcontent {
  border: 1px solid gray;
  flex: 1;
}




.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}






</style>
