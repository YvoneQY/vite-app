<template>
  <div class="home">
    动画
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:enter-cancelled="enterCancelled"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
      v-on:leave-cancelled="leaveCancelled"
    >JavaScript声明钩子</transition>
  </div>
</template>

<script>
export default {
  name: "Animate",
  methods: {
    //进入
    beforeEnter: el => {
      console.log(el);
    },
    enter: (el, done) => {
      done();
    },
    afterEnter: el => {
      console.log(el);
    },
    enterCancelled: el => {

    },
    //离开
    beforeLeave: function(el) {
      // ...
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    leave: function(el, done) {
      // ...
      done();
    },
    afterLeave: function(el) {
      // ...
    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled: function(el) {
      // ...
    }
  }
};
</script>
<style lang="scss" scoped></style>
