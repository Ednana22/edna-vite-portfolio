<template>
  <AppNav />
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <div class="footer">
      <div class="flex-center">
      </div>
      <p class="text-sm text-align-center font-color-light">Copyright © EdnaWei, All Rights Reserved.</p>
  </div>  
</template>

<script setup>
import AppNav from './components/AppNav.vue'
import { useRoute } from 'vue-router'
import { shallowRef, watch } from 'vue'

const route = useRoute()
const titleMap = shallowRef({
  Home: 'Edna Wei\'s Portfolio',
  About: '關於我 - Edna Wei\'s Portfolio',
  ProjectMarket: '奧丁丁市集改版 - Edna Wei\'s Portfolio',
  ProjectWeb: '奧丁丁集團官網重構 - Edna Wei\'s Portfolio',
  ProjectPMS: '旅宿管理系統規劃 - Edna Wei\'s Portfolio'
})

watch(
  () => route.name,
  toName => {
    document.title = titleMap.value[toName] || 'Edna Wei\'s Portfolio'
  }
)
</script>

<style>
</style>
