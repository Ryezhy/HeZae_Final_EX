<script setup lang="ts">
import {useRouter} from "vue-router";
import {useLoginStore} from "@/stores/loginStore";
import router from "@/router";
const loginStore = useLoginStore()
const logout = () => {
  loginStore.logout()
  router.push("/")
}

</script>

<template>
  <el-menu
      class="el-menu-demo"
      mode="horizontal"
      style="width: 100vw"
      :ellipsis="false"
  >
    <el-menu-item index="0">
      <img
          style="width: 45px"
          src="/logo.svg"
          alt="Element logo"
      />
    </el-menu-item>
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>其他</template>
      <el-menu-item index="1" @click="logout">注销</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>