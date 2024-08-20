<script setup lang="ts">

import {defineProps} from "vue";
import {useRouter} from "vue-router";
const props = defineProps({
  //父组件传过来的参数
  title: {
    type: String,
    default: '1.默认标题'
  },
  content: {
    type: String,
    default: '默认内容'
  }
})

</script>

<template>
  <div class="scrollItem">
    <span style="font-size: 20px;font-weight:bold;">{{props.title}}</span>
    <el-divider  style="padding: 5px;margin: 0;"/>
    <span>
        {{props.content}}
      </span>
  </div>
</template>

<style scoped>
.scrollItem{
  background: #f2f2f2;padding: 8px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
}
</style>