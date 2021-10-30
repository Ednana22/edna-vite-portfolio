<template>
  <nav class="app-nav">
    <div class="container">
      <router-link class="app-nav__logo" :to="{ name: 'Home' }" @click="detectIsSamePage('Home')">
        <img
          width="38"
          alt="EdnaWei"
          src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/EW.svg"
          data-v-e2fa79a4="" />
      </router-link>
      <UseWindowSize v-slot="{ width }">
        <div v-if="width > mobileMenuEdgeSize" class="app-nav__actions">
          <ul>
            <li class="is-dropdown">
              <span v-click-away="handleDropDownOutside" class="is-nav-link hover-effect mr-32" @click.capture="isDropDownOpen = !isDropDownOpen">
                {{ $t('common.projects') }}
                <i class="las" :class="isDropDownOpen ? 'la-angle-up' : 'la-angle-down'"></i>
                <ul v-show="isDropDownOpen" class="is-dropdown__context">
                  <li>
                    <router-link :to="{ name: 'ProjectMarket' }">{{ $t('common.market') }}</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'ProjectPMS' }">{{ $t('common.pms') }}</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'ProjectWeb' }">{{ $t('common.owlting_website') }}</router-link>
                  </li>
                </ul>
              </span>
            </li>
            <li>
              <router-link class="is-nav-link hover-effect" :to="{ name: 'About' }">{{ $t('common.about_me') }}</router-link>
            </li>
            <li class="flex items-center">
              <button class="locale-button hover-effect" @click="onLocaleChange">
                <i class="las la-language"></i>
              </button>
            </li>
          </ul>
        </div>
        <div v-else class="app-nav__actions__mobile">
          <button
            class="app-nav__actions__mobile__toggler"
            :class="{ is_active: isDropDownOpen }"
            @click.stop="onMobileMenuClick">
            <i
              class="las"
              :class="isDropDownOpen ? 'la-times' : 'la-hamburger'"
              :style="isDropDownOpen ? 'font-size: 24px;' : 'font-size: 28px;'"></i>
          </button>
          <div class="app-nav__actions__mobile__cover" :class="{ is_active: isDropDownOpen }">
            <ul>
              <li>
                <router-link :to="{ name: 'Home' }" @click="detectIsSamePage('Home')">
                  <h4>{{ $t('common.projects') }}</h4>
                </router-link>
                <ul class="sub_item">
                  <li>
                    <router-link :to="{ name: 'ProjectMarket' }" @click="detectIsSamePage('ProjectMarket')">{{ $t('common.market') }}</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'ProjectPMS' }" @click="detectIsSamePage('ProjectPMS')">{{ $t('common.pms') }}</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'ProjectWeb' }" @click="detectIsSamePage('ProjectWeb')">{{ $t('common.owlting_website') }}</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <router-link :to="{ name: 'About' }" @click="detectIsSamePage('About')">
                  <h4>{{ $t('common.about_me') }}</h4>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </UseWindowSize>
    </div>
  </nav>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import { UseWindowSize } from '@vueuse/components'
import { useWindowSize } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const state = reactive({ count: 0 })
const isDropDownOpen = ref(false)
const handleDropDownOutside = () => (isDropDownOpen.value = false)
const onMobileMenuClick = () => (isDropDownOpen.value = !isDropDownOpen.value)

const mobileMenuEdgeSize = 768
const { width } = useWindowSize()

watch(
  () => isDropDownOpen.value,
  val => {
    const body = document.querySelector('body') 
    const isMobile = width.value < mobileMenuEdgeSize
    val && isMobile
      ? body.classList.add('is_locked')
      : body.classList.remove('is_locked')
  }
)

const route = useRoute()
watch(
  ()  => route.path,
  val => {
    isDropDownOpen.value = false
  }
)

const detectIsSamePage = direction => {
  if (route.name === direction) {
    isDropDownOpen.value = false
  }
}

const { locale } = useI18n()
const onLocaleChange = () => {
  locale.value = locale.value === 'zh-tw' ? 'en' : 'zh-tw'
}
</script>

<style src="../styles/appNav.scss"></style>
