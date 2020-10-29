<template>
  <div class="home">
    例子
    <span @click="login()">点击</span>
    <transition name="component-fade" mode="out-in">
      <component v-bind:is="view"></component>
    </transition>


  </div>
</template>

<script>
import Exam1 from "./components/vlist/Exam1";
import Exam2 from "./components/vlist/Exam2";
import Exam3 from './components/vlist/Exam3';
import Exam4 from './components/vlist/Exam4';
export default {
  name: "Task",
  data() {
    return {
      view: "vb"
    };
  },
  components: {
    va: Exam1,
    vb: Exam2,
    vc: Exam3,
    vd: Exam4
  },
  methods: {
    login() {
      let arr=["va","vb","vc","vd"];
      let random=this.getView();
      console.log(random,arr[random])
      this.view=arr[random];
    },
    getView(){
      return Math.floor(Math.random()*4)
    }

  }
};
</script>

<style lang="scss" scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}


</style>
