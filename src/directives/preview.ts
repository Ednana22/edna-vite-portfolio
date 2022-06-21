import { state, onSinglePagePreview } from '../store/photoPreview'

export default {
  mounted (el, { arg }) {
    let imgUrl = ''
    if (arg === 'bg') {
      imgUrl = window.getComputedStyle(el)?.backgroundImage?.slice(4, -1).replace(/"/g, '')
    } else {
      const element = el.tagName === 'IMG' ? el : el.querySelector('img')
      setTimeout(() => {
        // use as nextTick to make sure the image is loaded
        imgUrl = element.dataset.src || element.getAttribute('src')
      }, 0)
    }

    el.style.cursor = 'pointer'

    el.previewHandler = () => {
      onSinglePagePreview([imgUrl])
    }

    el.addEventListener('click', el.previewHandler)
  },
  beforeUnmount (el) {
    el.removeEventListener('click', el.previewHandler)
  }
}