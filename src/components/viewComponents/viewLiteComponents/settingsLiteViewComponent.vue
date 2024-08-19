<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
</script>
<template>
  <el-row class="setting-content" :gutter="20">
    <!--数组循环-->
    <el-card v-for="item in 18" class="content-style" style="width: 100%;height:8vh;margin-bottom: 8px">
      <el-row>
        <el-col :span="20">
          设置{{ item}}
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="">
            确定
          </el-button>
          <el-button type="danger" @click="">
            重置
          </el-button>
          <el-button type="success" @click="">
            保存
          </el-button>
        </el-col>
      </el-row>
    </el-card>
  </el-row>
</template>
<style scoped>
.setting-content{
  margin-top: 1.5vh;
  height: 85vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #337ECC;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #7BA1DF;
    border-radius: 2px;
  }
  padding: 4px;
}
</style>