<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
</script>
<template >
  <div style="width: 100%" class="setting-content">
        <el-descriptions title="后台系统配置"  border :column="2" style="width: 100%">
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
        <el-descriptions-item label="模型">
          <template #default>
            <el-select placeholder="请选择模型" style="width: 50%">
              <el-option label="模型1" value="1" />
              <el-option label="模型2" value="2" />
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
        <el-descriptions-item label="步长">
          <template #default>
            <el-select placeholder="请选择模型的步长" style="width: 50%">
              <el-option label="5" value="1" />
              <el-option label="8" value="2" />
              <el-option label="10" value="3" />
              <el-option label="15" value="4" />
              <el-option label="20" value="5" />
              <el-option label="25" value="6" />
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
        <el-descriptions-item label="提示词组">
          <template #default>
            <el-select placeholder="请选择模型帮助提示词组" style="width: 50%">
              <el-option label="动漫" value="1" />
              <el-option label="写实" value="2" />
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
        <el-descriptions-item label="Token">
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
        <el-descriptions-item label="移动端类型">
          <template #default>
            <el-select placeholder="请选择你的移动设备类型" style="width: 50%">
              <el-option label="Andoird(安卓)" value="1" />
              <el-option label="Ios(苹果)" value="2" />
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