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
      el: '.swiper-pagination-container__books'
    }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper">
    <swiper-slide
      v-for="(reviewer, index) in reviews"
      :key="index">
      <div class="p-4">
        <figure
          class="mb-16 overflow-hidden border rounded text-center h-250px bg-contain bg-center bg-no-repeat"
          :style="{ backgroundImage: `url(${reviewer.cover})` }"></figure>
        <div class="reviewer-title mb-8">
          <label>{{ reviewer.name }}</label>
        </div>
        <p class="text-gray-400 font-thin">{{ reviewer.description }}</p>
      </div>
    </swiper-slide>
  </swiper>
  <div class="text-center mt-4 swiper-pagination-container__books"></div>
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
          cover: 'https://cdn.readmoo.com/cover/d5/gkc7j58_460x580.jpg',
          description: '諾曼爺爺帶路，此生必讀！'
        },
        {
          name: 'Nick',
          cover: 'https://pyxis.nymag.com/v1/imgs/1cc/b68/6613f73d72328f430c6e55e3de5d3acccf-24-parenting-books-1.2x.rsocial.w600.jpg',
          description: '諾曼爺爺帶路，此生必讀！諾曼爺爺帶路，此生必讀！諾曼爺爺帶路，此生必讀！'
        },
        {
          name: 'Nick',
          cover: 'https://cdn.readmoo.com/cover/d5/gkc7j58_460x580.jpg',
          description: '諾曼爺爺帶路，此生必讀！'
        },
        {
          name: 'Nick',
          cover: 'https://cdn.readmoo.com/cover/d5/gkc7j58_460x580.jpg',
          description: '諾曼爺爺帶路，此生必讀！諾曼爺爺帶路，此生必讀！'
        },
        {
          name: 'Nick',
          cover: 'https://cdn.readmoo.com/cover/d5/gkc7j58_460x580.jpg',
          description: '諾曼爺爺帶路，此生必讀！'
        },
        {
          name: 'Nick',
          cover: 'https://cdn.readmoo.com/cover/d5/gkc7j58_460x580.jpg',
          description: '諾曼爺爺帶路，此生必讀！諾曼爺爺帶路，此生必讀！諾曼爺爺帶路，此生必讀！諾曼爺爺帶路，此生必讀！諾曼爺爺帶路，此生必讀！'
        },
        {
          name: 'Nick',
          cover: 'https://cdn.readmoo.com/cover/d5/gkc7j58_460x580.jpg',
          description: '諾曼爺爺帶路，此生必讀！'
        },
        {
          name: 'Nick',
          cover: 'https://cdn.readmoo.com/cover/d5/gkc7j58_460x580.jpg',
          description: '諾曼爺爺帶路，此生必讀！諾曼爺爺帶路，此生必讀！'
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
          return 1.3
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
