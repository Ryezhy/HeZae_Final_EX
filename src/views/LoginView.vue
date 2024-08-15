<script setup lang="ts">
import LoginComponent from "@/components/LoginComponent.vue";
import {Flag, User, Trophy } from "@element-plus/icons-vue";
</script>
<template>
  <div class="common-layout" style="width: 100vw;height: 100%">
    <el-menu mode="horizontal" :ellipsis="false">
      <el-menu-item index="0">
        <template #title>
          <el-icon><Flag /></el-icon>
          <span>HEZAE</span>
        </template>
      </el-menu-item>
      <el-menu-item index="1">
        <template #title>
          <el-icon><user /></el-icon>
          <span>联系开发者</span>
        </template>
      </el-menu-item>
      <el-menu-item index="2">
        <template #title>
          <el-icon><Trophy /></el-icon>
          <span>Github</span>
        </template>
      </el-menu-item>
    </el-menu>
    <el-container>
      <el-aside width="65vw">Aside</el-aside>
      <el-container  width="35vw">
        <el-header>Header</el-header>
        <el-main>
          <LoginComponent/>
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