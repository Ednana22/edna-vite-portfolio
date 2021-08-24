<template>
  <AppNav />
  <router-view v-slot="{ Component }">
  <transition name="fade">
    <component :is="Component" />
  </transition>
</router-view>
</template>

<script setup>
import AppNav from './components/AppNav.vue'
</script>

<style>
</style>
