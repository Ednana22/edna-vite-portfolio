<template>
<div class="swiper-container relative">
  <div class="swiper-navigation-container flex justify-end mb-16 -mt-11">
    <button
      class="swiper-navigation__prev mr-16 transition p-2 hover:-translate-x-1"
      :class="{ disabled: swiperInstance?.isBeginning }"
      @click="handlePrev">
      <i class="las la-long-arrow-alt-left text-[#36363C]"></i>
    </button>
    <button
      class="swiper-navigation__next transition p-2 hover:translate-x-1"
      :class="{ disabled: swiperInstance?.isEnd }"
      @click="handleNext">
      <i class="las la-long-arrow-alt-right text-[#36363C]"></i>
    </button>
  </div>
  <swiper
    ref="swiper"
    :modules="modules"
    :slides-per-view="slidesPerView"
    :space-between="24"
    autoHeight
    :navigation="{
      prevEl: '.swiper-navigation__prev',
      nextEl: '.swiper-navigation__next'
    }"
    :pagination="{
      el: '.swiper-pagination-container'
    }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper">
    <swiper-slide
      v-for="(reviewer, index) in reviews"
      :key="index">
      <div class="border p-4 rounded text-center">
        <figure class="mb-16">
          <img width="40" height="40" :src="reviewer.avatar" alt="">
        </figure>
        <div class="reviewer-title flex justify-center mb-16">
          <label>{{ reviewer.name }}</label>
          <div class="mx-3 border border-l border-gray-300"></div>
          <label class="font-bold">{{ reviewer.title }}</label>
        </div>
        <p class="text-gray-400 font-thin">{{ reviewer.description }}</p>
      </div>
    </swiper-slide>
  </swiper>
  <div class="text-center mt-4 swiper-pagination-container"></div>
</div>
</template>
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { useWindowSize } from '@vueuse/core'
  import { computed, ref } from 'vue'
  import { Pagination, Scrollbar, A11y } from 'swiper'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const reviews = [
        {
          name: 'Nick',
          title: 'Front-End Developer',
          avatar: 'https://avatars.githubusercontent.com/u/22793771?v=4',
          description: '重新設計網站的架構及使用者體驗，跨集團七個事業體進行資訊整合，將理念及服務介紹更清楚的傳達給使用者。重新設計網站的架構及使用者體驗，跨集團七個事業體進行資訊整合，將理念及服務介紹更清楚的傳達給使用者。'
        },
        {
          name: 'Nick',
          title: 'Front-End Developer',
          avatar: 'https://avatars.githubusercontent.com/u/22793771?v=4',
          description: '重新設計網站的架構及使用者體驗，跨集團七個事業體進行資訊整合，將理念及服務介紹更清楚的傳達給使用者。'
        },
        {
          name: 'Nick',
          title: 'Front-End Developer',
          avatar: 'https://avatars.githubusercontent.com/u/22793771?v=4',
          description: '重新設計網站的架構及使用者體驗，跨集團七個事業體進行資訊整合，將理念及服務介紹更清楚的傳達給使用者。'
        },
        {
          name: 'Nick',
          title: 'Front-End Developer',
          avatar: 'https://avatars.githubusercontent.com/u/22793771?v=4',
          description: '重新設計網站的架構及使用者體驗，跨集團七個事業體進行資訊整合，將理念及服務介紹更清楚的傳達給使用者。重新設計網站的架構及使用者體驗，跨集團七個事業體進行資訊整合，將理念及服務介紹更清楚的傳達給使用者。重新設計網站的架構及使用者體驗，跨集團七個事業體進行資訊整合，將理念及服務介紹更清楚的傳達給使用者。'
        },
        {
          name: 'Nick',
          title: 'Front-End Developer',
          avatar: 'https://avatars.githubusercontent.com/u/22793771?v=4',
          description: '重新設計網站的架構及使用者體驗，跨集團七個事業體進行資訊整合，將理念及服務介紹更清楚的傳達給使用者。重新設計網站的架構及使用者體驗，跨集團七個事業體進行資訊整合，將理念及服務介紹更清楚的傳達給使用者。'
        },
        {
          name: 'Nick',
          title: 'Front-End Developer',
          avatar: 'https://avatars.githubusercontent.com/u/22793771?v=4',
          description: '重新設計網站的架構及使用者體驗，跨集團七個事業體進行資訊整合，將理念及服務介紹更清楚的傳達給使用者。'
        },
        {
          name: 'Nick',
          title: 'Front-End Developer',
          avatar: 'https://avatars.githubusercontent.com/u/22793771?v=4',
          description: '重新設計網站的架構及使用者體驗，跨集團七個事業體進行資訊整合，將理念及服務介紹更清楚的傳達給使用者。'
        },
        {
          name: 'Nick',
          title: 'Front-End Developer',
          avatar: 'https://avatars.githubusercontent.com/u/22793771?v=4',
          description: '重新設計網站的架構及使用者體驗，跨集團七個事業體進行資訊整合，將理念及服務介紹更清楚的傳達給使用者。重新設計網站的架構及使用者體驗，跨集團七個事業體進行資訊整合，將理念及服務介紹更清楚的傳達給使用者。重新設計網站的架構及使用者體驗，跨集團七個事業體進行資訊整合，將理念及服務介紹更清楚的傳達給使用者。'
        }
      ]

      const { width } = useWindowSize()
      const slidesPerView = computed(() => {
        if (width.value > 1200) {
          return 4
        } else if (width.value > 992) {
          return 3
        } else if (width.value > 576) {
          return 2
        } else {
          return 1
        }
      })

      const swiperInstance= ref(null)
      const onSwiper = (swiper) => {
        swiperInstance.value = swiper
      }

      const handlePrev = () => {
        swiperInstance.value.slidePrev()
      }
      const handleNext = () => {
        swiperInstance.value.slideNext()
      }

      const currentIndex = computed(() => {
        return swiperInstance.value?.activeIndex
      })

      return {
        swiperInstance,
        reviews,
        slidesPerView,
        modules: [Pagination, Scrollbar, A11y],
        onSwiper,
        handlePrev,
        handleNext,
        currentIndex
      }
    }
  };
</script>

<style lang="scss" scoped>
.swiper-navigation-container {
  button {
    @apply bg-transparent border-none text-2xl;
    &.disabled {
      @apply opacity-50 select-none pointer-events-none;
    }
  }
}
</style>
