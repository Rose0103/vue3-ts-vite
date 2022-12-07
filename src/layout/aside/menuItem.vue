<template>
    <template v-for="menu in menuList" :key="menu.path">
        <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path" :key="menu.path">
            <template #title>
                <el-icon>
                    <component :is="menu.meta.icon" />
                </el-icon>
                <span>{{menu.meta.title}}</span>
            </template>
            <menu-item :menuList="menu.children"></menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="menu.path">
            <el-icon>
                <component :is="menu.meta.icon" />
            </el-icon>
            <template #title>
                <span>{{menu.meta.title}}</span>
            </template>
        </el-menu-item>
    </template>
</template>
<script setup lang="ts">
// 接收父组件传递过来的值
defineProps(['menuList'])
</script>
<style lang="scss">
</style>
