<script setup lang="ts">
import {ref} from "vue";
import {useLoginStore} from "@/stores/loginStore";
import router from "@/router";
import {ElMessage} from "element-plus";
import {Search} from "@element-plus/icons-vue";
const loginStore = useLoginStore()
const  toRouter = (url:string)=>{
  router.push(url)
}
const logout = () => {
  loginStore.logout()
  toRouter('/')
}


</script>
<template>
  <div class="common-layout" >
    <el-container>
      <el-header style="height: 5vh;border-radius: 10px;padding: 4px">
          <el-menu
              class="el-menu-demo"
              mode="horizontal"
              :ellipsis="false"
              style="border-radius: 8px;"
          >
            <el-menu-item index="1" @click="toRouter('/index/main/home')">
              <img
                  style="width: 45px"
                  src="/logo.svg"
                  alt="Element logo"
              />
            </el-menu-item>
            <el-sub-menu index="2">
              <template #title>其他</template>
              <el-menu-item index="2-1" >关于</el-menu-item>
              <el-menu-item index="2-2" @click="logout">注销</el-menu-item>
            </el-sub-menu>
          </el-menu>
      </el-header>
      <el-main style="height: 95vh;">
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>
<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>