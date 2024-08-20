<script setup lang="ts">
import {ref} from "vue";

const containerRef = ref<HTMLElement | null>(null)
const handleAnchorClick = (e: MouseEvent,href:string) => {
  e.preventDefault(); // 阻止默认行为
}
</script>
<template>
  <el-row :gutter="18">
    <el-col :span="20" >
      <div ref="containerRef"  class="middle-content-scroller">
        <div id="part1" style="height: 55vh;background: rgba(255, 0, 0, 0.00);margin-top: 30px;border-radius: 8px">
          <span style="font-size: 21px;font-weight:bold;margin-left: 2px">1.总览</span>
          <div id="part1D1" style="height: 40%;background: #f2f2f2;padding: 8px;border-radius: 8px;margin-top:16px;">
             <span style="font-size: 20px;font-weight:bold;">1.1项目介绍</span>
            <el-divider  style="padding: 5px;margin: 0;"/>
            <span>
              此项目使用了多端开发，Web前端使用Vue3开发，UI组件库为Element Plus，后端使用FastAPI开发，移动端使用安卓(Compose)开发。
            </span>
          </div>
          <div id="part1D2" style="height: 50%;background: #f2f2f2;padding: 8px;margin-top:16px;border-radius: 8px">
            <span style="font-size: 20px;font-weight:bold;">1.2项目进度</span>
            <el-divider  style="padding: 5px;margin: 0;"/>
          </div>
        </div>
        <div id="part2" style="height: 55vh;background: rgba(255, 0, 0, 0.00);margin-top: 30px;border-radius: 8px">
          <span style="font-size: 21px;font-weight:bold;margin-left: 2px">2.StableDiffusion</span>
          <div id="part2D1" style="height: 40%;background: #f2f2f2;padding: 8px;border-radius: 8px;margin-top:16px;">
            <span style="font-size: 20px;font-weight:bold;">2.1引用</span>
            <el-divider  style="padding: 5px;margin: 0;"/>
            <span>
            </span>
          </div>
          <div id="part2D2" style="height: 45%;background: #f2f2f2;padding: 8px;margin-top:16px;border-radius: 8px">
            <span style="font-size: 20px;font-weight:bold;">2.2使用说明</span>
            <el-divider  style="padding: 5px;margin: 0;"/>
          </div>
        </div>
        <div id="part3" style="height: 800px;background: rgba(0, 0, 255, 0.02);margin-top: 30px;">
          part3
        </div>
        <div id="part4" style="height: 300px;background: rgba(0, 0, 255, 0.02);margin-top: 30px;">
          part4
        </div>
        <div id="part5" style="height: 500px;background: rgba(0, 0, 255, 0.02);margin-top: 30px;">
          part5
        </div>
        <div id="part6" style="height: 800px;background: rgba(0, 0, 255, 0.02);margin-top: 30px;">
          part6
        </div>
        <div id="part7" style="height: 400px;background: rgba(0, 0, 255, 0.02);margin-top: 30px;">
          part7
        </div>
      </div>
    </el-col>
    <el-col :span="4">
      <el-affix :offset="80">
        <el-anchor  style="height: 90vh;" :container="containerRef" direction="vertical" type="defaule" :offset="30" @click="handleAnchorClick" class="content-style">
          <el-anchor-link href="#part1" style="border-radius: 4px;" >
                  <template #default	>
                    <div  style="height: 24px;padding: 0;margin: 0">
                      <el-text style="font-size: 16px;padding: 4px">1.总览</el-text></div>
                  </template>
                </el-anchor-link>
          <el-anchor-link href="#part1D1" style="border-radius: 4px">
            <template #default	>
              <div style="height: 24px;padding: 0;margin: 0"><el-text style="font-size: 15px;padding: 4px;margin-left: 6px">1.1.项目介绍</el-text></div>
            </template>
          </el-anchor-link>
          <el-anchor-link href="#part1D2" style="border-radius: 4px">
                <template #default	>
                  <div style="height: 24px;padding: 0;margin: 0"><el-text style="font-size: 15px;padding: 4px;margin-left: 6px">1.2.项目进度</el-text></div>
                </template>
          </el-anchor-link>
          <el-anchor-link href="#part2" style="border-radius: 4px;" >
            <template #default	>
              <div  style="height: 24px;padding: 0;margin: 0">
                <el-text style="font-size: 16px;padding: 4px">2.StableDiffusion</el-text></div>
            </template>
          </el-anchor-link>
          <el-anchor-link href="#part2D1" style="border-radius: 4px">
            <template #default	>
              <div style="height: 24px;padding: 0;margin: 0"><el-text style="font-size: 15px;padding: 4px;margin-left: 6px">2.1.引用</el-text></div>
            </template>
          </el-anchor-link>
          <el-anchor-link href="#part2D2" style="border-radius: 4px">
            <template #default	>
              <div style="height: 24px;padding: 0;margin: 0"><el-text style="font-size: 15px;padding: 4px;margin-left: 6px">2.2.使用说明</el-text></div>
            </template>
          </el-anchor-link>
          <el-anchor-link href="#part3" style="border-radius: 4px">
                <template #default	>
                  <div style="height: 24px;padding: 0;margin: 0"><el-text style="font-size: 16px;padding: 4px">3. 第三部分</el-text></div>
                </template>
          </el-anchor-link>
          <el-anchor-link href="#part4" style="border-radius: 4px">
                <template #default	>
                  <div style="height: 24px;padding: 0;margin: 0"><el-text style="font-size: 16px;padding: 4px">4. 第四部分</el-text></div>
                </template>
          </el-anchor-link>
          <el-anchor-link href="#part5" style="border-radius: 4px">
            <template #default	>
              <div style="height: 24px;padding: 0;margin: 0"><el-text style="font-size: 16px;padding: 4px">5. 第五部分</el-text></div>
            </template>
          </el-anchor-link>
          <el-anchor-link href="#part6" style="border-radius: 4px">
            <template #default	>
              <div style="height: 24px;padding: 0;margin: 0"><el-text style="font-size: 16px;padding: 4px">6. 第六部分</el-text></div>
            </template>
          </el-anchor-link>
          <el-anchor-link href="#part7" style="border-radius: 4px">
            <template #default	>
              <div style="height: 24px;padding: 0;margin: 0"><el-text style="font-size: 16px;padding: 4px">7. 第七部分</el-text></div>
            </template>
          </el-anchor-link>
        </el-anchor>
      </el-affix>
    </el-col>
  </el-row>
</template>
<style scoped>
.middle-content-scroller{
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 85vh;
  overflow-y: auto;
}

</style>