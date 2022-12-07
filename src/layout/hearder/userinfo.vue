<template>
  <el-dropdown>
    <div class="header-user">
      <img src="@/assets/images/swtx.jpg" alt="用户头像" />
      <span>超级管理员</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item icon="User">个人信息</el-dropdown-item>
        <el-dropdown-item icon="Lock">修改密码</el-dropdown-item>
        <el-dropdown-item icon="SwitchButton">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <Setting class="navbar-icon" @click="data.showSetting=true"></Setting>
  <el-drawer
    v-model="data.showSetting"
    title="换肤设置"
    direction="rtl"
    size="20%"
  >
  <div class="draw-content">
    <el-divider>主题</el-divider>
      <div class="flex-justify-center day-mode">
        <el-switch
          v-model="data.nightMode"
          active-text="夜间模式"
          inactive-text="日间模式"
          @change="changeSetting('nightMode', data.nightMode)"
        ></el-switch>
      </div>
      <el-divider>系统颜色</el-divider>
      <div class="checkbox-row">
        <div
          class="checkbox-item"
          v-for="(item, index) in data.systemThemeList"
          :key="index"
          :class="{ active: item === data.systemThemeColor }"
          :style="{ backgroundColor: item }"
          @click="changeSetting('systemThemeColor', item)"
        ></div>
        <el-color-picker
          v-model="data.systemThemeColor"
          @active-change="changeSetting('systemThemeColor', $event)"
        ></el-color-picker>
      </div>
  </div>
    <el-button class="draw-save">保存</el-button>
  </el-drawer>
</template>

<script setup lang="ts">
    const data = reactive(
        {
            showSetting:false,
            nightMode:false,
            systemThemeColor: '#ff9000',
            systemThemeList: [
                '#0960BD',
                '#0084F4',
                '#009688',
                '#536DF3',
                '#FF5C93',
                '#EE4F12',
                '#0096C7',
                '#9C27B0',
                '#ff9000'
            ],
        }
    )
    // 切换主题模式
    const changeSetting = (type: any, value: any) => {
        console.log(type,value);
        if (type === 'nightMode') {
            data.nightMode = value
        }else {
            data.systemThemeColor = value
        }
       
    }

</script>

<style lang="scss" scoped>
.header-user {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  cursor: pointer;
  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 5px;
  }
}
.navbar-icon {
    width: 1em;
    height: 1em;
    cursor: pointer;
}
.draw-content {
  height: calc(100% - 60px);
  overflow-y: auto;
}

.day-mode {
  padding-bottom: 10px 0;
}
.checkbox-row {
  display: flex;
  justify-content: space-between;

  .checkbox-item {
    width: 20px;
    height: 20px;
    border: 1px solid #ddd;
    border-radius: 2px;
    cursor: pointer;
    position: relative;
    &.active {
      border-color: #ff9000;
      &::before {
        content: '\2713';
        font-size: 14px;
        color: #fff;
        position: absolute;
        top: -20px;
        left: 5px;
      }
    }
  }
 
}
::v-deep(.el-color-picker) {
  width: 20px !important;
  height: 20px !important;
  
}

::v-deep(.el-color-picker__trigger) {
  width: 20px !important;
  height: 20px !important;
  border: none;
}

::v-deep(.el-color-picker__color) {
  border: none !important;
}

::v-deep(.el-color-picker__trigger) {
  padding: 0 !important;
}

.draw-save {
  height: 32px;
  width: 100%;
  background-color: #ff9000;
  color: #fff;
}
</style>
