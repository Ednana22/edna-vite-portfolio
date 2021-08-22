<template>
  <nav class="app-nav">
    <div class="container">
      <router-link :to="{ name: 'Home' }">
        <img
          width="38"
          alt="EdnaWei"
          src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/EW.svg"
          data-v-e2fa79a4="" />
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style lang="scss" scoped>
.app-nav {
  border: solid 1px #000;
  padding: .5rem 0;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
}
</style>
