<script setup lang="ts">
import LoginComponent from "@/components/liteComponents/loginComponent.vue";
import {Flag, User, Trophy } from "@element-plus/icons-vue";
import {ref} from "vue";
const moveToUrl = (url:string|undefined) => {
  window.open(url)
}
const isCollapsed = ref(false);
window.addEventListener('resize', () => {
  isCollapsed.value = window.innerWidth < 680;

});

// 初始化时根据窗口宽度判断是否折叠侧边栏
if (window.innerWidth < 680) {
  isCollapsed.value = true;
}
</script>
<template>
  <div class="common-layout" >
    <el-menu  mode="horizontal" :ellipsis="false">
      <el-menu-item index="0">
        <template #title>
          <img
              style="margin: 0 20px 0 0;width: 30px"
              src="/logo.svg"
              alt="Element logo"
          />
          <span>HEZAE</span>
        </template>
      </el-menu-item>
      <el-menu-item index="1" @click="moveToUrl('https://github.com/Ryezhy')">
        <template #title>
          <el-icon><user /></el-icon>
          <span>联系开发者</span>
        </template>
      </el-menu-item>
        <el-menu-item index="2" @click="moveToUrl('https://github.com/Ryezhy/Hezae_Final_EX')">
        <template #title>
          <el-icon><Trophy /></el-icon>
          <span>Github</span>
        </template>
      </el-menu-item>
    </el-menu>
    <el-container>
      <el-aside v-if="!isCollapsed" style="width: 55%">Aside</el-aside>
      <el-container  style="min-width: 450px;max-width: 580px">
        <el-header>Header</el-header>
        <el-main >
          <LoginComponent ></LoginComponent>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>