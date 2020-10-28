<template>
  <div class="home">
    <div id="flip-list-demo" class="demo">
      <button v-on:click="shuffle">Shuffle</button>
      <transition-group name="flip-list" tag="ul">
        <li v-for="item in items" v-bind:key="item">{{ item }}</li>
      </transition-group>
    </div>
    <hr />
    <div id="list-demo" class="demo">
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group name="list" tag="p">
        <span v-for="(item,index) in items" v-bind:key="index" class="list-item">{{ item }}</span>
      </transition-group>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Exam1",
  data() {
    return {
      items: [1, 2, 3, 4, 5],
      nextNum: 10
    };
  },
  methods: {
    shuffle() {
      this.items = _.shuffle(this.items);
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove() {
      this.items.splice(this.randomIndex(), 1);
    },
    randomIndex() {
      return Math.floor(Math.random() * this.items.length);
    }
  }
};
</script>
<style lang="scss" scoped>
.flip-list-move {
  transition: transform 1s;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
