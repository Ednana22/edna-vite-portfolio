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
      <div class="app-nav__actions">
        <ul>
          <li class="is-dropdown">
            <span v-click-away="handleDropDownOutside" class="is-nav-link" @click="isDropDownOpen = !isDropDownOpen">
              作品
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
    </div>
  </nav>
</template>

<script setup>
import { reactive, ref } from 'vue'

const state = reactive({ count: 0 })
const isDropDownOpen = ref(false)
const handleDropDownOutside = () => (isDropDownOpen.value = false)

</script>

<style lang="scss" scoped>
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
    color: black;
    text-decoration: none;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__actions {
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
            color: black;
            &:hover {
              background: rgba(0, 0, 0, 0.05);
            }
          }
        }
      }
    }
  }
}
</style>
