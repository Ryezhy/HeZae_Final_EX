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
let systemConfig = ref<BaseConfig[]>([])
const systemConfigIsLoading = ref(false)
const init =async()=>{//初始化
  //检查本地缓存
  if (localStorage.getItem('systemConfig')) {
    ElMessage.success('从本地缓存加载配置成功')

    systemConfig.value = JSON.parse(localStorage.getItem('systemConfig') || '');
  }else {
    systemConfigIsLoading.value = true;
    await getDefaultSystemConfig();
  }
}

const getDefaultSystemConfig =async()=>{//获取默认参数
  systemConfigIsLoading.value = true;
  try{
    const response = await axios.get('http://127.0.0.1:8000/static/settings.json?timestamp=' + Date.now());
    systemConfig.value = response.data ;
    //保存到本地缓存
    localStorage.setItem('systemConfig', JSON.stringify(response.data));
    console.log( response.data )
    ElMessage.success('从服务器加载配置成功')
    //等待2s
    await new Promise(resolve => setTimeout(resolve, 1000));
    systemConfigIsLoading.value = false;
  }catch (e) {
    console.error(e);
    ElMessage.error('从服务器加载配置失败')
    systemConfigIsLoading.value = false;
  }
}
const resetSystemConfig =async()=>{//重置
  await getDefaultSystemConfig()
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
            <el-button  style="margin-left: 5%" size="small" type="warning" @click="">
              确定
            </el-button>
            <el-button size="small"  type="danger" @click="">
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
            <el-button  style="margin-left: 5%" size="small" type="warning" @click="">
              确定
            </el-button>
            <el-button size="small"  type="danger" @click="resetSystemConfig">
              恢复默认
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
    <el-descriptions title="移动端配置"  border :column="2" style="width: 100%">
      <el-descriptions-item label="IP地址">
        <template #default>
          <el-input style="width: 50%" placeholder="请输入内容"></el-input>
          <el-button  style="margin-left: 5%" size="small" type="warning" @click="">
            确定
          </el-button>
          <el-button size="small"  type="danger" @click="">
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
      <el-descriptions-item label="端口">
        <template #default>
          <el-input style="width: 50%" placeholder="请输入内容"></el-input>
          <el-button  style="margin-left: 5%" size="small" type="warning" @click="">
            确定
          </el-button>
          <el-button size="small"  type="danger" @click="">
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