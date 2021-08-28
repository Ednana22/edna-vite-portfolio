<template>
  <nav class="app-nav">
    <div class="container">
      <router-link class="app-nav__logo" :to="{ name: 'Home' }">
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
              <span v-click-away="handleDropDownOutside" class="is-nav-link" @click="isDropDownOpen = !isDropDownOpen">
                作品
                <i class="las" :class="isDropDownOpen ? 'la-angle-up' : 'la-angle-down'"></i>
                <ul v-show="isDropDownOpen" class="is-dropdown__context">
                  <li>
                    <router-link :to="{ name: 'ProjectMarket' }">市集</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'ProjectWeb' }">官網</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'ProjectPMS' }">PMS</router-link>
                  </li>
                </ul>
              </span>
            </li>
            <li>
              <router-link class="is-nav-link" :to="{ name: 'About' }">關於</router-link>
            </li>
            <li>
              <!-- <router-link :to="{ name: 'About' }" tag="button">
                聯絡
              </router-link> -->
            </li>
          </ul>
        </div>
        <div v-else class="app-nav__actions__mobile">
          <button
            class="app-nav__actions__mobile__toggler"
            :class="{ is_active: isDropDownOpen }"
            @click.stop="onMobileMenuClick">
            <span class="bar bar-top"></span>
            <span class="bar bar-mid"></span>
            <span class="bar bar-bot"></span>
          </button>
          
          <div class="app-nav__actions__mobile__cover" :class="{ is_active: isDropDownOpen }">
            <ul>
              <li>
                <h4>作品</h4>
                <ul class="sub_item">
                  <li>
                    <router-link :to="{ name: 'ProjectMarket' }">市集</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'ProjectWeb' }">官網</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'ProjectPMS' }">PMS</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <router-link :to="{ name: 'About' }">
                  <h4>關於</h4>
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
</script>

<style lang="scss" scoped>
$color_grey-dark: #25252e;

.app-nav {
  padding: .5rem 0;
  position: fixed;
  box-shadow: 2px 2px 2px #eee;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  .is-nav-link {
    display: inline-block;
    padding: .5rem;
    cursor: pointer;
    color: $color_grey-dark;
    text-decoration: none;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__actions {
    @media screen and (max-width: 768px) {
      display: none;
    }
    > ul {
      list-style-type: none;
      display: flex;
      margin-bottom: 0;
    }
    .is-dropdown {
      position: relative;
      &__context {
        position: absolute;
        top: calc(100% + 14px);
        right: 0;
        background: white;
        list-style-type: none;
        margin: 0;
        padding: 0;
        box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.05);
        border: 1px solid rgba(242, 242, 242, 1);
        border-radius: 4px;
        li {
          display: flex;
          flex-direction: column;
          a {
            padding: .5rem 2rem;
            text-decoration: none;
            color: $color_grey-dark;
            &:hover {
              background: rgba(0, 0, 0, 0.05);
            }
          }
        }
      }
    }
  }

  &__actions__mobile {
    @media screen and (min-width: 768px) {
      display: none;
    }
    &__toggler {
      width: 30px;
      height: 30px;
      padding: 2px;
      border: none;
      background: transparent;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      &.is_active {
        .bar-top {
          transform: rotate(45deg) translateX(5px) translateY(-5px);
        }
        .bar-mid {
          opacity: 0;
        }
        .bar-bot {
          transform: rotate(-45deg) translateX(4px) translateY(5px);
        }
      }
      .bar {
        width: 100%;
        height: 4px;
        background: $color_grey-dark;
        transition: all .3s;
        &.bar-top, &.bar-bot {
          width: 100%;
          height: 4px;
          background: $color_grey-dark;
        }
        &.bar-top {
          transform-origin: top left;
          margin-bottom: 4px;
        }
        &.bar-bot {
          transform-origin: bottom left;
          margin-top: 4px;
        }
      }
    }
    &__cover {
      position: fixed;
      display: none;
      border-top: solid 1px #eee;
      padding: 2rem 1rem;
      margin-bottom: 1rem;
      left: 0;
      top: 46px;
      background: white;
      width: 100%;
      height: calc(100% - 45px);
      &.is_active {
        display: block;
      }
      ul {
        a {
          display: block;
        }
        &.sub_item {
          margin-bottom: 1rem;
          a {
            padding: .5rem 2rem;
          }
        }
      }
    }
  }
}
</style>
