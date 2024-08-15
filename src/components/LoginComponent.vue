<script setup lang="ts">
import {type ComponentSize, ElForm, ElInput, type FormInstance, type FormRules} from "element-plus"
import {User,Notification} from "@element-plus/icons-vue";
import {reactive, ref} from "vue";
import { ElMessage } from 'element-plus'

//登录提交的表单接口
interface RuleForm {
  account: string;
  password: string;
}
const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()
//表单数据
const ruleForm = reactive<RuleForm>({
  account: '',
  password: ''
})

const rules = reactive<FormRules<RuleForm>>({
  account: [
    { required: true, message: '请输入长度3~5的用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '请输入长度3~5的用户名', trigger: 'blur' },
  ],
  password: [
      { required: true, message: '请输入长度6~15的密码', trigger: 'blur' },
      { min: 6, max: 15, message: '请输入长度6~15的密码', trigger: 'blur' },
    { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/, message: '密码必须包含至少一个大写字母、一个小写字母、一个数字和一个特殊字符', trigger: 'blur' }
  ]})
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) {
    console.log(formEl);
    ElMessage.warning('提交的不是表单')
  }else{
    await formEl.validate((valid, fields) => {
      if (valid) {
        console.log('submit!')
      } else {
        ElMessage.error('非法表单')
        console.log('error submit!', fields)
      }
    })
  }
}
</script>
<template  >
  <el-row class="login-form" >
    <el-col :span="8">
      <!-- 留空图标-->
      留空图标
    </el-col>
    <el-col :span="16">
      <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
      >
        <el-form-item
            prop="account"
        >
          <el-input
              style="max-width: 600px"
              v-model="ruleForm.account"
              placeholder="请输入账号"
          >
            <template #prepend>
              <el-icon>
                <user></user>
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item
            prop="password"
        >
          <el-input placeholder="请输入密码"
                    show-password
                    v-model=" ruleForm.password">
            <template #prepend>
              <el-icon>
                <Notification></Notification>
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-row :gutter="30" style="margin-bottom: 5px;">
          <el-col :span="12">
            <el-checkbox>记住密码</el-checkbox>
          </el-col>
          <el-col :span="12">
            <el-button
                type="warning"
                link
                style="padding: 0;"
            >
              <template #default>
                忘记了密码？
              </template>
            </el-button>
          </el-col>
        </el-row>
        <el-row :gutter="8" style="margin-bottom: 5px;">
          <el-col :span="12" >
            <el-button type="primary" style="width: 100%" @click="submitForm(ruleFormRef)">登录</el-button>
          </el-col>
          <el-col :span="12">
            <el-button type="danger" style="width: 100%">注册</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-col>
  </el-row>
</template>
<style scoped>
.login-form{
  border-radius: 4px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 35px;
  border: 1px solid #20669B;
  width: 100%;
  height: 100%;
}
</style>