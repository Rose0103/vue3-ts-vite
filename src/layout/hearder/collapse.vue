<template>
    <el-icon  @click="handleIsCoollapse" class="icons">
        <component :is="isCollapse ?  'Expand' : 'Fold'" ></component>
    </el-icon>
</template>

<script setup lang="ts">
import {useStore} from '@/store'

const store = useStore()
const isCollapse =  computed(() => {
    return store.getters['getCollapse']
})
 const handleIsCoollapse = () => {
    store.commit('setCollapse',!isCollapse.value)
 }
</script>

<style lang="scss" scoped>
    .icons {
        font-size: 20px;
        color: #303133;
        cursor: pointer;
        margin-right: 15px;
    }
</style>
