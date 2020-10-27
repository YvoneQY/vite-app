<template>
  <div class="manage">
    <van-row gutter="20" class="lheader">
      <van-col span="20">
        xx系统
      </van-col>
    </van-row>
    <van-row style="flex:1" class="lcontain">
      <van-col span="4">NAVISE</van-col>
      <van-col span="10" offset="4">CONTENT</van-col>
    </van-row>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Manage"
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

.lheader{
  border: 1px solid red;
  height: 400px;
}
.lcontain{
  border: 1px solid green;
}
</style>