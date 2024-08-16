<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useLoginStore} from "@/stores/loginStore";
import router from "@/router";
import {ElMessage} from "element-plus";
const loginStore = useLoginStore()
const logout = () => {
  loginStore.logout()
  router.push("/")
}

const containerRef = ref<HTMLElement | null>(null)

const handleClick = (e: MouseEvent) => {
  e.preventDefault()
  ElMessage.success(e.target.innerText)
}
</script>

<template>
  <div class="common-layout" >
    <el-container>
      <el-header style="height: 5vh">
        <el-row>
        <el-col :span="24" >
          <el-menu
              class="el-menu-demo"
              mode="horizontal"
              :ellipsis="false"
          >
            <el-menu-item index="0">
              <img
                  style="width: 45px"
                  src="/logo.svg"
                  alt="Element logo"
              />
            </el-menu-item>
            <el-menu-item index="1">Processing Center</el-menu-item>
            <el-sub-menu index="2">
              <template #title>其他</template>
              <el-menu-item index="1" @click="logout">注销</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-col>
      </el-row>
      </el-header>
      <el-main style="height: 95vh">
        <div style="height: 85vh;padding: 10px">
          <el-row  :gutter="20">
            <el-col :span="4" >
              <div style="height: 85vh;overflow-y: auto" class="left-content-scroller">
                <el-text>
                  或许你不知道，这样的结构更加人性化
                </el-text>
                <div style="height: 400px;background: #6596BA; margin-top: 20px;">
                  left1
                </div>
                <div style="height: 400px;background: #6596BA; margin-top: 20px;">
                  left1
                </div>
                <div style="height: 400px;background: #6596BA; margin-top: 20px;">
                  left1
                </div>
                <div style="height: 400px;background: #6596BA; margin-top: 20px;">
                  left1
                </div>
              </div>
            </el-col>
            <el-col :span="20" >
              <div>
                <el-row>
                  <el-col :span="20">
                    <div  style="height: 2vh;">
                      显示的内容
                    </div>
                    <div ref="containerRef"  class="middle-content-scroller">
                      <div id="part1" style="height: 300px;background: rgba(255, 0, 0, 0.02);margin-top: 30px;">
                        part1
                      </div>
                      <div id="part2" style="height: 200px;background: rgba(0, 255, 0, 0.02);margin-top: 30px;">
                        part2
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
                    <el-affix :offset="60">
                      <el-anchor  style="height: 85vh;" :container="containerRef" direction="vertical" type="defaule" :offset="30" @click="handleClick">
                        <el-anchor-link href="#part1" style="border-radius: 4px;">
                          <template #default	>
                            <div  style="height: 24px;padding: 0;margin: 0"><el-text style="font-size: 16px;padding: 4px">1. 第一部分</el-text></div>
                          </template>
                        </el-anchor-link>
                        <el-anchor-link href="#part2" style="border-radius: 4px">
                          <template #default	>
                            <div style="height: 24px;padding: 0;margin: 0"><el-text style="font-size: 16px;padding: 4px">2. 第二部分</el-text></div>
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
        </div>
        </el-col>

        </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}

.middle-content-scroller{
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  height: 85vh;
  overflow-y: auto;
}
/* width */
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