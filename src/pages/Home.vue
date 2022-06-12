<template>
  <main>
    <section class="hero border-bottom">
      <div class="container-hero">
        <div class="row hero">
          <div class="col-md-6 mb-56">
            <h2 class="mb-32">
              <span class="reveal">Hello !
                <span class="wave-hand">👋🏻</span>
              </span>
              <span class="reveal">I'm
                <span>Edna Wei</span>
              </span>
            </h2>
            <h1 class="h1-w">
              {{ $t('home.title_1') }}
              <br />
              {{ $t('home.title_2') }}
            </h1>
            <h1 class="h1-m">
              {{ $t('home.title_mobile') }}
            </h1>
          </div>
          <div class="kv-web col-md-6">
            <figure class="memoji figure flex-center">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/edna-memoji.png"
                class="figure-img img-fluid mt-80"
                alt="..."
              />
              <figure gure class="coffee figure flex-center">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/coffee.png"
                  class="figure-img img-fluid"
                  alt="..."
                />
              </figure>
              <figure gure class="work figure flex-center">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/work.png"
                  class="figure-img img-fluid"
                  alt="..."
                />
              </figure>
              <figure gure class="devices figure flex-center">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/devices.png"
                  class="figure-img img-fluid"
                  alt="..."
                />
              </figure>
              <figure gure class="speak figure flex-center">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/speech+bubble.png"
                  class="figure-img img-fluid"
                  alt="..."
                />
              </figure>
            </figure>

          </div>
          <div class="kv-mobile col-md-6">
              <figure class="figure">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/hero.png
"
                  class="figure-img img-fluid"
                  alt="..."
                />
              </figure>
          </div>
        </div>
      </div>
    </section>
    <section class="market border-bottom">
      <div class="container">
        <div class="row project">
          <div class="col-lg-8 content-pr-48">
            <div class="market-device-section mb-56">
              <div class="img-container web gradient-border"></div>
              <div class="img-container mobile gradient-border"></div>
            </div>
          </div>
          <div class="col-lg-4 content-pl-48">
            <h3>{{ $t('common.market') }}</h3>
            <div class="text-md-bold mb-24">
              {{ $t('common.re_branding') }}
              <span class="font-color-lighter"> | </span>
              {{ $t('common.website') }}
              <span class="font-color-lighter"> | </span>
              {{ $t('common.app') }}
              <span class="font-color-lighter"> | </span>
              {{ $t('common.ux_research') }}
              <span class="font-color-lighter"> | </span>
              {{ $t('common.ui_design') }}
            </div>
            <div class="text-md">
              {{ $t('home.market.description') }}
            </div>
            <router-link class="btn btn-link" :to="{ name: 'ProjectMarket' }">
              {{ $t('common.lear_more_cta') }}<i class="las la-long-arrow-alt-right"></i>
            </router-link>
            <div class="display-on-mobile mt-32">
              <figure class="figure gradient-border">
                <img
                  v-lazy="'https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/website-homepage.png'"
                  class="figure-img img-fluid"
                  alt="..."
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pms border-bottom">
      <div class="container">
        <div class="row project">
          <div class="col-lg-8 content-pr-48">
            <div class="pms-device-section mb-56">
              <figure class="figure">
                <img
                  v-lazy="'https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/pms-homepage.png'"
                  class="figure-img img-fluid"
                  alt="..."
                />
              </figure>
            </div>
          </div>
          <div class="col-lg-4 content-pl-48">
            <h3>{{ $t('common.pms') }}</h3>
            <div class="text-md-bold mb-24">
              {{ $t('common.b2b') }}
              <span class="font-color-lighter"> | </span>
              {{ $t('common.saas') }}
              <span class="font-color-lighter"> | </span>
              {{ $t('common.ux_research') }}
              <span class="font-color-lighter"> | </span>
              {{ $t('common.ui_design') }}
            </div>
            <div class="text-md">
              {{ $t('home.pms.description') }}
            </div>
            <router-link class="btn btn-link" :to="{ name: 'ProjectPMS' }">
              {{ $t('common.lear_more_cta') }}<i class="las la-long-arrow-alt-right"></i>
            </router-link>
            <div class="display-on-mobile mt-32">
              <figure class="figure">
                <img
                  v-lazy="'https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/pms-homepage.png'"
                  class="figure-img img-fluid"
                  alt="..."
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="official-web border-bottom">
      <div class="container">
        <div class="row project">
          <div class="col-lg-8 content-pr-48">
            <div class="official-web-device-section mb-56">
              <figure class="figure gradient-border">
                <img
                  v-lazy="'https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/website-homepage.gif'"
                  class="figure-img img-fluid"
                  alt="..."
                />
              </figure>
            </div>
          </div>
          <div class="col-lg-4 content-pl-48">
            <h3>{{ $t('common.owlting_website') }}</h3>
            <div class="text-md-bold mb-24">
              {{ $t('common.official_website') }}
              <span class="font-color-lighter"> | </span>
              {{ $t('common.refactor_website') }}
              <span class="font-color-lighter"> | </span>
              {{ $t('common.ux_research') }}
              <span class="font-color-lighter"> | </span>
              {{ $t('common.ui_design') }}
            </div>
            <div class="text-md">
              {{ $t('home.official_website.description') }}
            </div>
            <router-link class="btn btn-link" :to="{ name: 'ProjectWeb' }">
              {{ $t('common.lear_more_cta') }}<i class="las la-long-arrow-alt-right"></i>
            </router-link>
            <div class="display-on-mobile mt-32">
              <figure class="figure gradient-border">
                <img
                  v-lazy="'https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/website-homepage.gif'"
                  class="figure-img img-fluid"
                  alt="..."
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="coworkers">
      <div class="container mb-48">
        <h3>合作過的夥伴</h3>
        <SwiperContainer />
      </div>
    </section> -->

    <section class="connect-section">
      <div class="container">
        <div class="connection-area">
          <p class="text-md-bold mb-16 say-hi">
              {{ $t('meeting.title') }}
          </p>
          <div class="row connect-way">
            <div class="mail mb-8 col-sm-6 content-pl-48 mobile-mb-24">
              <figure class="figure mr-8">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/icon-mail.svg"
                  class="figure-img img-fluid"
                  alt="..."
                />
              </figure>
              <a href="mailto: w.ehsien@gmail.com">w.ehsien@gmail.com</a>
            </div>
            <div class="linkedin mb-8 col-sm-6 content-pl-48">
              <figure class="figure mr-8">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/icon-linkedin.svg"
                  class="figure-img img-fluid"
                  alt="..."
                />
              </figure>
              <a
                href="https://www.linkedin.com/in/edna-wei-90292b97/"
                target="_blank"
                >LinkedIn Profile</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { gsap } from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger"
import SwiperContainer from '../components/SwiperContainer.vue'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: "Home",
  components: {
    SwiperContainer
  },
  mounted () {
    const bubbles = document.querySelectorAll('.memoji .figure')
    gsap.to(bubbles, {
      scrollTrigger: {
        trigger: '.memoji'
      },
      scale: 1,
      duration: .5,
      delay: 1,
      ease: 'expo',
      stagger: .6
    })
  }
};
</script>

<style lang="scss" src="../styles/home.scss" scoped></style>
