<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'

import {reactive, ref} from "vue";
import axios from "axios";
import {ElMessage} from "element-plus";
interface BaseConfig {
  name: string;
  tip: string;
  type: number;
  default: string | number;
  content: string[];
}
let systemConfig = ref<BaseConfig[]>([])//默认保留的系统配置
let mobileConfig = ref<BaseConfig[]>([])//移动端配置
let systemDefaultConfig = ref<BaseConfig[]>([])
let mobileDefaultConfig = ref<BaseConfig[]>([])
const systemConfigIsLoading = ref(false)
const mobileConfigIsLoading = ref(false)
const getDefaultConfig =async(type:string)=> {//获取默认参数
  if (type == 'system') {
    systemConfigIsLoading.value = true;
    try {
      const response = await axios.get('http://127.0.0.1:8000/static/config/systemSettings.json?timestamp=' + Date.now());
      //等待2s
      await new Promise(resolve => setTimeout(resolve, 1000));
      systemConfigIsLoading.value = false;
      console.log(response.data)
      ElMessage.success('从服务器加载后台配置成功')
      return response.data
    } catch (e) {
      console.error(e);
      ElMessage.error('从服务器加载后台配置失败')
      systemConfigIsLoading.value = false;
      return [];
    }
  } else {
    mobileConfigIsLoading.value = true;
    try {
      const response = await axios.get('http://127.0.0.1:8000/static/config/mobileSettings.json?timestamp=' + Date.now());
      //等待2s
      await new Promise(resolve => setTimeout(resolve, 1000));
      mobileConfigIsLoading.value = false;
      ElMessage.success('从服务器加载移动端配置成功')
      return response.data as BaseConfig[];
    } catch (e) {
      console.error(e);
      ElMessage.error('从服务器加载移动端配置失败')
      mobileConfigIsLoading.value = false;
      return [];
    }
  }
}
const resetConfig =async(type:string)=>{//重置
  if (type=='system'){
    systemConfig.value =  await getDefaultConfig(type)//获取默认参数
    if (systemConfig.value){
      localStorage.setItem('systemConfig', JSON.stringify(systemConfig.value));//保存到本地缓存
      localStorage.setItem('systemDefaultConfig', JSON.stringify(systemConfig.value));//保存到本地的默认参数
    }else {
      ElMessage.warning('重置系统配置失败')
    }
  }else {
    mobileConfig.value =  await getDefaultConfig(type)//获取默认参数
    if (mobileConfig.value){
      localStorage.setItem('mobileConfig', JSON.stringify(mobileConfig.value));//保存到本地缓存
      localStorage.setItem('mobileDefaultConfig', JSON.stringify(mobileConfig.value));//保存到本地的默认参数
    }else{
      ElMessage.warning('重置移动端配置失败')
    }
  }
}
const resetItemConfig = async (type:string,index:number)=>{
  if (type=='system'){
    try {
      const response = await axios.get('http://127.0.0.1:8000/static/config/systemSettings.json?timestamp=' + Date.now());
      //等待2s
      await new Promise(resolve => setTimeout(resolve, 1000));
      systemConfigIsLoading.value = false;
      return response.data
    } catch (e) {
      console.error(e);
      systemConfigIsLoading.value = false;
    }
  }else {
  }
}
const init = async () => {
  let systemConfigLocal = localStorage.getItem('systemConfig');
  if (systemConfigLocal === null) {
    ElMessage.warning('系统本地配置为空，正在从服务器加载系统默认配置')
    await resetConfig('system')
  }else {
    systemConfig.value = JSON.parse(localStorage.getItem('systemConfig') || '[]');
  }
  let mobileConfigLocal = localStorage.getItem('mobileConfig');
  if (mobileConfigLocal === null) {
    ElMessage.warning('移动端本地配置为空，正在从服务器加载移动端默认配置')
    await resetConfig('mobile')
  }else {
    mobileConfig.value = JSON.parse(localStorage.getItem('mobileConfig') || '[]');
  }
};
const resetDefaultConfig=async (type:string)=>{
  if (type=='system'){
    systemDefaultConfig.value =  await getDefaultConfig(type)//获取默认参数
    if (systemConfig.value){
      localStorage.setItem('systemDefaultConfig', JSON.stringify( systemDefaultConfig.value));//保存到本地缓存
    }else {
      ElMessage.warning('获取系统默认配置失败')
    }
  }else{
    mobileDefaultConfig.value =  await getDefaultConfig(type)//获取默认参数
    if (mobileConfig.value){
      localStorage.setItem('mobileDefaultConfig', JSON.stringify(mobileDefaultConfig.value));//保存到本地缓存
    }else {
      ElMessage.warning('获取移动端配置失败')
    }
  }
}
init();
</script>
<template >
  <div style="width: 100%" class="setting-content">
        <el-descriptions title="后台系统配置" v-loading="systemConfigIsLoading" border :column="2" style="width: 100%">
          <el-descriptions-item :label="item.name" v-for="item in systemConfig">
            <template #default>
              <el-input style="width: 50%" v-if="item.type==0" v-model="item.default" :placeholder="item.tip"></el-input>
              <el-select style="width: 50%" v-if="item.type==1" placeholder="请选择" v-model="item.default">
                <el-option v-for="option in item.content" :key="option" :label="option" :value="option" />
              </el-select>
              <el-button size="small"  style="margin-left: 5%" type="danger" @click="">
                重置
              </el-button>
              <el-button size="small"  type="success" @click="">
                保存
              </el-button>
              <el-button size="small"  type="primary" @click="">
                刷新
              </el-button>
          </template>
        </el-descriptions-item>
          <el-descriptions-item label="全局配置">
          <template #default>
            <el-button size="small"  type="danger" @click="">
              重置
            </el-button>
            <el-button size="small"  type="success" @click="">
              保存
            </el-button>
            <el-button size="small"  type="primary" @click="">
              刷新
            </el-button>
            <el-button size="small"  type="warning" @click="resetConfig('system')">
              从服务器更新系统配置
            </el-button>
            <el-button size="small"  type="warning" @click="resetDefaultConfig('system')">
              仅更新默认系统配置
            </el-button>
          </template>
        </el-descriptions-item>
      </el-descriptions>
      </div>
  <div style="width: 100%" class="setting-content">
    <el-descriptions title="移动端配置" v-loading="mobileConfigIsLoading" border :column="2" style="width: 100%">
      <el-descriptions-item :label="item.name" v-for="item in mobileConfig">
        <template #default>
          <el-input style="width: 50%" v-if="item.type==0" v-model="item.default" :placeholder="item.tip"></el-input>
          <el-select style="width: 50%" v-if="item.type==1" placeholder="请选择" v-model="item.default">
            <el-option v-for="option in item.content" :key="option" :label="option" :value="option" />
          </el-select>
          <el-button size="small" style="margin-left: 5%"  type="danger" @click="">
            重置
          </el-button>
          <el-button size="small"  type="success" @click="">
            保存
          </el-button>
          <el-button size="small"  type="primary" @click="">
            刷新
          </el-button>
        </template>
      </el-descriptions-item>
      <el-descriptions-item label="全局配置">
        <template #default>
          <el-button size="small"  type="danger" @click="resetConfig('mobile')">
            重置
          </el-button>
          <el-button size="small"  type="success" @click="">
            保存
          </el-button>
          <el-button size="small"  type="primary" @click="">
            刷新
          </el-button>
        </template>
      </el-descriptions-item>
    </el-descriptions>
  </div>
  <div style="width: 100%" class="setting-content">
        <el-descriptions title="其他配置"  border :column="2" style="width: 100%">
         <el-descriptions-item label="主题">
          <template #default>
            <el-select placeholder="请选择显示的主题" style="width: 50%">
              <el-option label="明亮" value="1" />
              <el-option label="黑暗" value="2" />
            </el-select>
            <el-button  style="margin-left: 5%" size="small" type="primary" @click="">
              确定
            </el-button>
          </template>
        </el-descriptions-item>
        <el-descriptions-item label="离线保存配置">
            <template #default>
              <el-select placeholder="请选择" style="width: 50%">
                <el-option label="是" value="1" />
                <el-option label="否" value="2" />
              </el-select>
              <el-button  style="margin-left: 5%" size="small" type="primary" @click="">
                确定
              </el-button>
            </template>
        </el-descriptions-item>
        <el-descriptions-item label="反馈收集许可">
            <template #default>
              <el-select placeholder="请选择" style="width: 50%">
                <el-option label="是" value="1" />
                <el-option label="否" value="2" />
              </el-select>
              <el-button  style="margin-left: 5%" size="small" type="primary" @click="">
                确定
              </el-button>
            </template>
        </el-descriptions-item>
          <el-descriptions-item label="更新版本切换">
            <template #default>
              <el-select placeholder="请选择版本" style="width: 50%">
                <el-option label="Debug" value="1" />
                <el-option label="Release" value="2" />
              </el-select>
              <el-button  style="margin-left: 5%" size="small" type="primary" @click="">
                确定
              </el-button>
            </template>
          </el-descriptions-item>
          <el-descriptions-item label="其他操作">
            <template #default>
              <el-button  style="margin-left: 5%" size="small" type="primary" @click="">
                从线上更新默认配置内容
              </el-button>
              <el-button  style="margin-left: 5%" size="small" type="success" @click="">
                仅更新模型配置
              </el-button>
              <el-button  style="margin-left: 5%" size="small" type="danger" @click="">
                清空缓冲区
              </el-button>
              <el-button  style="margin-left: 5%" size="small" type="info" @click="">
                关闭调试日志
              </el-button>
            </template>
          </el-descriptions-item>
      </el-descriptions>
      </div>
</template>
<style scoped>
.setting-content{
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