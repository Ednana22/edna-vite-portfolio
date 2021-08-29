<template>
  <div id="page-elevator">
    <a
      v-for="target in anchors"
      :key="`elevator-${target.id}`"
      :class="{ is_active: target.id === activedAnchor }"
      @click.prevent="onElevatorClick(target.id)"
      >
      <span>{{ target.name }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'PageElevator',
  props: {
    anchors: {
      type: Array,
      required: true,
      default: () => ([])
    }
  },
  data () {
    return {
      observer: null,
      activedAnchor: null
    }
  },
  methods: {
    onElevatorClick(anchor) {
      const offsetTop = document.querySelector(anchor).offsetTop;

      window.scroll({
        top: offsetTop,
        behavior: "smooth",
      });
    },
    markActivedAnchor (entries) {
      entries.map((entry) => {
        console.log("🚀 ~ file: PageElevator.vue ~ line 42 ~ entries.map ~ entry.isIntersecting", entry)
        if (entry.isIntersecting) {
          this.activedAnchor = `#${entry.target.id}`
        // } else {
        //   this.activedAnchor = null
        }
      });
    }
  },
  mounted () {
    let options = {
      rootMargin: '-50%'
    }

    this.observer = new IntersectionObserver(this.markActivedAnchor, options)

    this.anchors.forEach(anchor => {
      const target = document.querySelector(anchor.id)
      console.log("🚀 ~ file: PageElevator.vue ~ line 58 ~ mounted ~ target", target)
      this.observer.observe(target)
    })
  },
  beforeUnmount () {
    this.observer.disconnect()
  }
}
</script>

<style src="../styles/pageElevator.scss"></style>
