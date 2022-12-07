<template>
    <menu-log :collapse="isCollapse" class="layout-logo"></menu-log>
    <div class="menuNav">
      <el-scrollbar wrap-class="scrollbar-wrapper">
          <el-menu
            :default-active="activeMenu"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            :collapse-transition="false"
            @open="handleOpen"
            @close="handleClose"
            router
        >
          <menu-item :menuList="menuList"></menu-item>
        </el-menu>
      </el-scrollbar>
  </div>

</template>
<script setup lang="ts">
    import MenuItem from './menuItem.vue';
    import MenuLog from './menuLog.vue';
    import { useStore } from '@/store';
    import { useRoute } from 'vue-router';
    const store = useStore()
    const route = useRoute()
    const isCollapse = computed(() => {
      return store.getters['getCollapse']
    })

    // 菜单数据
    let menuList = reactive([
      {
        path: '/hotelManagement',
        name: 'hotelManagement',
        component: 'Layout',
        meta: {
          icon: "HomeFilled",
          title: "酒店管理"
        },
      },
      {
        path: '/',
        name: 'table',
        redirect: '/dashboard',
        component: 'Layout',
        meta: {
          icon: "Menu",
          title: "房态中心"
        },
        children: [
          {
            path: '/dashboard',
            name: 'dashboard',
            component: 'Layout',
            meta: {
              icon: "List",
              title: "房态管理"
            }
          },
          {
            path: '/flyroom',
            name: 'flyroom',
            component: 'Layout',
            meta: {
              icon: "Histogram",
              title: "飞房统计"
            }
          },
          {
            path: '/sos',
            name: 'sos',
            component: 'Layout',
            meta: {
              icon: "Histogram",
              title: "SOS统计"
            }
          },
        ]
      },
      {
        path: '/power',
        name: 'power',
        component: 'Layout',
        meta: {
          icon: "Menu",
          title: "能耗中心"
        },
        children: [
          {
            path: '/power/consumption',
            name: 'consumption',
            component: 'Layout',
            meta: {
              icon: "List",
              title: "能耗统计"
            }
          },
          {
            path: '/power/wholeShopRoom',
            name: 'wholeShopRoom',
            component: 'Layout',
            meta: {
              icon: "TrendCharts",
              title: "能耗日历"
            }
          },
          {
            path: '/power/electricityDetails',
            name: 'electricityDetails',
            component: 'Layout',
            meta: {
              icon: "List",
              title: "酒店能耗"
            }
          },
        ]
      },
      {
        path: '/system',
        name: 'system',
        component: 'Layout',
        meta: {
          icon: "Tools",
          title: "系统管理"
        },
        children: [
          {
            path: '/system/building',
            name: 'building',
            component: 'Layout',
            meta: {
              icon: "List",
              title: "楼栋管理"
            }
          },
          {
            path: '/system/rooms',
            name: 'rooms',
            component: 'Layout',
            meta: {
              icon: "List",
              title: "房间管理"
            }
          },
          {
            path: '/system/pms',
            name: 'pms',
            component: 'Layout',
            meta: {
              icon: "List",
              title: "PMS管理"
            }
          },
        ]
      },
      {
        path: '/powerManagement',
        name: 'powerManagement',
        component: 'Layout',
        meta: {
          icon: "Grid",
          title: "公区用电管理"
        },
        children: [
          {
            path: '/powerManagement/hydropowerStat',
            name: 'hydropowerStat',
            component: 'Layout',
            meta: {
              icon: "List",
              title: "水电统计"
            }
          },
          {
            path: '/powerManagement/hydropower',
            name: 'hydropower',
            component: 'Layout',
            meta: {
              icon: "List",
              title: "水电管理"
            }
          }
        ]
      },
    ])

    // 页面加载时默认激活菜单
    const activeMenu = computed(() =>{
        const currenRoute = route.matched[route.matched.length-1]
        return currenRoute.path
    })
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
</script>
<style lang="scss" scoped>
  @keyframes logoAnimation {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }
  .layout-logo {
    animation: logoAnimation 1s ease-out;
    // flex: none;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 210px;
    min-height: 400px;
  }

  .menuNav {
    overflow-y: auto;
    height: calc(100% - 60px);
  }
  .scrollbar-wrapper {
      overflow-x: hidden !important;
  }
</style>