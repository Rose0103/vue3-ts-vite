<template>
     <el-container class="layout">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <menu-bar></menu-bar>
      </el-aside>
      <el-container>
        <el-header> <header-top></header-top></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>
<script setup lang="ts">
  import HeaderTop from './hearder/index.vue'
  import MenuBar from './aside/index.vue'
  import { useStore } from '@/store';
  const store = useStore()
  const isCollapse = computed(() => {
    return store.getters['getCollapse']
  })

</script>
<style lang="scss" scoped>
    .layout{
        height: 100%;
    }
    .el-aside {
      // display: flex;
      // flex-direction: column;
      transition: width 0.15s;
      -webkit-transition: width 0.15s;
      -moz-transition: width 0.15s;
      -webkit-transition: width 0.15s;
      -o-transition: width 0.15s;
  }
</style>