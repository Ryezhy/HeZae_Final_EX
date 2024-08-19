<script setup lang="ts">
import {Search} from "@element-plus/icons-vue";
import {ref} from "vue";
import {ElMessage} from "element-plus";
import {Location, Document, Setting} from "@element-plus/icons-vue";
import {useRouter} from "vue-router";
const router = useRouter()
const toRouter = (path:string) => {
  router.push(path)
}
</script>
<template>
    <el-row  :gutter="18" >
      <el-col :span="4"  >
        <el-affix :offset="80" style="width: 100%" >
        <div style="height: 90vh;overflow-y: auto;padding: 4px"  class="left-content-scroller content-style">
          <el-menu
              default-active="2"
              style=" background-color:rgba(255, 255, 255, 0.0);border: 0"
              :collapse="false"
          >
            <el-menu-item index="1" @click="toRouter('/index/main/home')">
              <el-icon><search /></el-icon>
              <template #title>首页</template>
            </el-menu-item>
            <el-sub-menu index="2"  style=" background-color:rgba(255, 255, 255, 0.0);border: 0">
              <template #title>
                <el-icon><location /></el-icon>
                <span>快速开始</span>
              </template>
              <el-menu-item-group  style=" background-color:rgba(255, 255, 255, 0.0);border: 0">
                <template #title><span>Group One</span></template>
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title><span>item four</span></template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="3">
              <template #title>应用</template>
            </el-menu-item>
            <el-menu-item index="4" disabled>
              <el-icon><document /></el-icon>
              <template #title>模型</template>
            </el-menu-item>
            <el-menu-item index="5" @click="toRouter('/index/main/settings')">
              <el-icon><setting /></el-icon>
              <template #title>设置</template>
            </el-menu-item>
          </el-menu>
        </div>
        </el-affix>
      </el-col>
      <el-col :span="20">
        <router-view/>
      </el-col>
    </el-row>
</template>
<style scoped>
.left-content-scroller {
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #E4E4E4;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #E2E4E4;
    border-radius: 2px;
  }
  padding:5px
}
</style>