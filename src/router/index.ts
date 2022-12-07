import {createRouter, createWebHistory,RouteRecordRaw} from 'vue-router'

import Layout from '@/layout/index.vue'
const routes:Array<RouteRecordRaw> = [
    {
        path:'/',
        name: 'dashboard',
        redirect: '/dashboard',
        component: Layout,
        meta: {
            title: "房态中心"
        },
        children: [
            {
                path:'/dashboard',
                name: 'dashboard',
                component: () => import('@/view/dashboard/index.vue'),
                meta: {
                    title: "房态管理"
                }
            },
            {
                path:'/flyroom',
                name: 'flyroom',
                component: () => import('@/view/flyroom/index.vue'),
                meta: {
                    title: "飞房统计"
                }
            },
            {
                path:'/sos',
                name: 'sos',
                component: () => import('@/view/sos/index.vue'),
                meta: {
                    title: "SOS统计"
                }
            },
        ]
    },
    {
        path:'/power',
        name: 'power',
        component: Layout,
        meta: {
         title: "能耗中心"
        },
        children: [
            {
                path:'/power/consumption',
                name: 'consumption',
                component: () => import('@/view/power/consumption/index.vue'),
                meta: {
                    title: "能耗统计"
                }
            },
            {
                path:'/power/wholeShopRoom',
                name: 'wholeShopRoom',
                component: () => import('@/view/power/wholeShopRoom/index.vue'),
                meta: {
                    title: "能耗日历"
                }
            },
            {
                path:'/power/electricityDetails',
                name: 'electricityDetails',
                component: () => import('@/view/power/electricityDetails/index.vue'),
                meta: {
                    title: "酒店能耗"
                }
            },
        ]
    },
    {
        path:'/hotelManagement',
        name: 'hotelManagement',
        component: Layout,
        children: [
            {
                path:'/hotelManagement',
                name: 'hotelManagement',
                component: () => import('@/view/hotelManagement/index.vue'),
                meta: {
                    title: '酒店管理',
                },
            },
        ]
    },
    {
        path:'/system',
        name: 'system',
        component: Layout,
        meta: {
            title: '系统管理',
        },
        children: [
            {
                path: '/system/building',
                name: 'building',
                component: () => import('@/view/system/building/index.vue'),
                meta: {
                  title: "楼栋管理"
                }
              },
              {
                path: '/system/rooms',
                name: 'rooms',
                component: () => import('@/view/system/rooms/index.vue'),
                meta: {
                  title: "房间管理"
                }
              },
              {
                path: '/system/pms',
                name: 'pms',
                component: () => import('@/view/system/pms/index.vue'),
                meta: {
                  title: "PMS管理"
                }
              },
        ]
    },
    {
        path:'/powerManagement',
        name: 'powerManagement',
        component: Layout,
        meta: {
            title: '公区用电管理',
        },
        children: [
            {
                path: '/powerManagement/hydropowerStat',
                name: 'hydropowerStat',
                component: () => import('@/view/powerManagement/hydropowerStat/index.vue'),
                meta: {
                  title: "水电统计"
                }
              },
              {
                path: '/powerManagement/hydropower',
                name: 'room',
                component: () => import('@/view/powerManagement/hydropower/index.vue'),
                meta: {
                  title: "水电管理"
                }
              }
        ]
    },
   
]

//创建路由实例并传递routes配置
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router