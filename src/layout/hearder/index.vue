<template>
    <div class="navbar">
        <div class="header-left">
            <Collapse></Collapse>
            <Breadcrumb></Breadcrumb>
         </div>
        <div class="header-right">
            <Userinfo></Userinfo>
        </div>
    </div>
    
</template>
<script setup lang="ts">
import Collapse from './collapse.vue'
import Breadcrumb from './breadcrumb.vue'
import Userinfo from './userinfo.vue'



</script>
<style lang="scss" scoped>
.navbar{
    position: relative;
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    background: #fff;
    overflow: hidden;
    box-sizing: border-box;
    border-bottom: #f9f9f9 4px solid;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header-left{
        display: flex;
        align-items: center;
    }

    .header-right{
        display: flex;
        align-items: center;
        margin-right: 20px;
        overflow: hidden;
    }
}
</style>