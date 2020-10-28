<template>
  <div class="home">
    <input v-model.number="number" type="number" step="20">
    <p>{{ animatedNumber }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Exam3",
  data(){
    return{
      number:0,
      tweenedNumber:0
    }
  },
  computed: {
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(0);
    }
  },
  watch: {
    number: function(newValue) {
      gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
    }
  }
};
</script>
<style lang="scss" scoped></style>
