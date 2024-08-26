<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";

const cpuServerStatus = ref<[]>([]);
const memoryServerStatus = ref<[]>([]);
const gpuServerStatus = ref<[]>([]);

// 控制加载 (只在手动刷新时使用)
const cpuServerStatusIsLoading = ref(false);
const memoryServerStatusIsLoading = ref(false);
const gpuServerStatusIsLoading = ref(false);


// 封装通用的获取硬件信息函数
const getHardwareInfo = async (hardware: string, showLoading = true) => {
  const isLoading = {
    'cpu': cpuServerStatusIsLoading,
    'memory': memoryServerStatusIsLoading,
    'gpu': gpuServerStatusIsLoading,
  }[hardware];
  const status = {
    'cpu': cpuServerStatus,
    'memory': memoryServerStatus,
    'gpu': gpuServerStatus,
  }[hardware];
  if (showLoading) {
    isLoading.value = true;
  }

  try {
    const response = await axios.get(`http://127.0.0.1:8000/get_hardware_info?hardware=${hardware}`);
    status.value = response.data;
    console.log(hardware, response.data);
    if (showLoading) {
      ElMessage.success("服务器状态"+hardware+"成功");
    }
  } catch (error) {
    if (showLoading) {
      ElMessage.error("服务器状态获取"+hardware+"失败");
    }
    console.error(`获取${hardware}状态时发生错误:`, error);
  } finally {
    if (showLoading) {
      isLoading.value = false;
    }
  }
};

//控制可见性
const cpuServerStatusIsVisible = ref(true);
const memoryServerStatusIsVisible = ref(true);
const gpuServerStatusIsVisible = ref(true);
// 获取所有硬件信息 (手动刷新，显示 loading)
const getServerStatus = async () => {
  let a = [];
  //根据可见性控制是否获取硬件信息
  if (cpuServerStatusIsVisible.value) {
    a.push(getHardwareInfo('cpu', false)); // 不显示 loading
  }
  if (memoryServerStatusIsVisible.value) {
    a.push(getHardwareInfo('memory', false));
  }
  if (gpuServerStatusIsVisible.value) {
    a.push(getHardwareInfo('gpu', false));
  }
  await Promise.all(a);
};
//切换显示隐藏
const toggleVisibility = (hardware: string) => {
  const isVisible = {
    'cpu': cpuServerStatusIsVisible,
    'memory': memoryServerStatusIsVisible,
    'gpu': gpuServerStatusIsVisible,
  }[hardware];
  isVisible.value = !isVisible.value;
};
// 定时刷新 (不显示 loading)
setInterval(async () => {
  await getServerStatus();
}, 1000 * 5);

// 例如，在组件加载时调用 getServerStatus() 获取初始数据
const init = async () => {
  await Promise.all([getHardwareInfo('cpu', true), getHardwareInfo('memory', true), getHardwareInfo('gpu', true)]);
}
init();
</script>

<template>
  <div style="width: 100%" class="serverStatus-content" v-if="cpuServerStatusIsVisible">
    <el-descriptions title="CPU" border :column="2" style="width: 100%" v-loading="cpuServerStatusIsLoading" >
      <el-descriptions-item  v-for="(item,index) in cpuServerStatus" :key="index" :label="item.name">{{item.value}}</el-descriptions-item>
    </el-descriptions>
  </div>
  <div style="width: 100%" class="serverStatus-content" v-if="memoryServerStatusIsVisible">
    <el-descriptions title="内存" border :column="2" style="width: 100%"  v-loading="memoryServerStatusIsLoading" >
      <el-descriptions-item v-for="(item,index) in memoryServerStatus" :key="index" :label="item.name">{{item.value}}</el-descriptions-item>
    </el-descriptions>
  </div>
  <div style="width: 100%" class="serverStatus-content"  v-if="gpuServerStatusIsVisible">
    <el-descriptions title="GPU" border :column="2" style="width: 100%"  v-loading="gpuServerStatusIsLoading">
      <el-descriptions-item v-for="(item,index) in gpuServerStatus" :key="index" :label="item.name">{{item.value}}</el-descriptions-item>
    </el-descriptions>
  </div>
  <div style="width: 100%;" class="serverStatus-content">
    <el-descriptions title="设置" border :column="2" style="width: 100%"  >
      <el-descriptions-item label="CPU">
        <el-switch  v-model="cpuServerStatusIsVisible" active-text="开启" inactive-text="关闭"></el-switch>
      </el-descriptions-item>
      <el-descriptions-item label="内存">
        <el-switch  v-model="memoryServerStatusIsVisible" active-text="开启" inactive-text="关闭"></el-switch>
      </el-descriptions-item>
      <el-descriptions-item label="GPU">
        <el-switch  v-model="gpuServerStatusIsVisible" active-text="开启" inactive-text="关闭"></el-switch>
      </el-descriptions-item>
      <el-descriptions-item label="操作">
        <el-button type="primary" size="small" @click="getServerStatus">刷新</el-button>
        <el-select placeholder="请选择" style="width: 18%;margin-left: 5px" size="small">
          <el-option label="5s" value="1" />
          <el-option label="10s" value="2" />
        </el-select>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style scoped>
.serverStatus-content{
  margin-top: 1.8vh;
  background-color: #F5F5F5;
  width: 100%;
  height: auto;
  border-radius: 8px;
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
  padding: 8px;
}
</style>