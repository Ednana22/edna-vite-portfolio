import { reactive } from 'vue'

export const state = reactive({
  imgs: [],
  visible: false,
  index: 0
})

export const open = () => {
  state.index++
  state.visible = true
}

export const close = () => {
  state.visible = false
}

export const setImgs = (imgs) => {
  state.imgs = imgs
}

export const setIndex = (index: number) => {
  state.index = index
}

export const onSinglePagePreview = (payload) => {
  state.imgs = payload
  state.visible = true
}
