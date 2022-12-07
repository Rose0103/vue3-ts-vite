<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tabs" :key="item.path"> {{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import { Ref,watch } from 'vue';
import { useRoute, RouteLocationMatched } from 'vue-router';
    // 定义面包屑的导航数据
    const tabs :Ref<RouteLocationMatched[]> = ref([])
    const route = useRoute()
    const getBreadcrumb = () => {
        // console.log(route.matched);
        // 获取所有有meta和title 
        let matched = route.matched.filter(item => item.meta && item.meta.title)
        // console.log(matched);
        //判断第一个是不是房态管理，如果不是，构造一个
        // const first = matched[0]
        // if ( first.path !== '/dashboard' ) {
        //     matched = [{path: '/',meta: {title:'房态中心'}} as any].concat(matched)
        // }

        // 设置面包屑导航数据
        tabs.value = matched
    }
    getBreadcrumb()
    // 监听路由变化
    watch(() => route.path,()=>getBreadcrumb())
</script>

<style lang="scss" scoped>

</style>
