<template>
  <swiper
    ref="swiper"
    :modules="modules"
    :slides-per-view="slidesPerView"
    :space-between="24"
    autoHeight
    :pagination="{
      clickable: true,
      el: '.swiper-pagination-container'
    }"
    :scrollbar="{ draggable: true }"
    class="mx-4">
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
</template>
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { useWindowSize } from '@vueuse/core'
  import 'swiper/css'
  import { computed } from 'vue'
  import { Pagination, Scrollbar, A11y } from 'swiper'
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

      return {
        reviews,
        slidesPerView,
        modules: [Pagination, Scrollbar, A11y]
      }
    }
  };
</script>