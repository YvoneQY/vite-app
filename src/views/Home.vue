<template>
  <div class="home">
    Home首页
    <h2 class="hello">Hello {{name}} {{ $attrs }}</h2>
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
    props: {
    name: {
      type: String,
      default: 'Vue!'
    }
  }
};
</script>
