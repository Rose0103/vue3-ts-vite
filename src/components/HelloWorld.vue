<script setup lang="ts">
import { ref,computed } from 'vue'
import {useStore} from '@/store'
const store = useStore()

const count = ref(0)
const showCount = computed(() => {
  return store.getters['getCount']
})

const addCount = () => {
  store.commit('setCount', ++count.value)
}
</script>

<template>
  <h1>{{ showCount }}</h1>

  <div class="card">
    <button type="button" @click="addCount">count is {{ count }}</button>
  </div>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>

</template>
