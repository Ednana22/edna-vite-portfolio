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
</script>

<style>
</style>
