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
            <h3>{{ $t('market') }}</h3>
            <div class="text-md-bold mb-24">
              {{ $t('home.market.re_brand') }}
              <span class="font-color-lighter"> | </span>
              {{ $t('home.market.task') }}
              <span class="font-color-lighter"> | </span>
              APP 規劃
              <span class="font-color-lighter"> | </span>
              UX 研究
              <span class="font-color-lighter"> | </span>
              UI 設計
            </div>
            <div class="text-md">
              為奧丁丁市集重新設計網站視覺及體驗，並進行品牌再造的跨部門合作，以優質選物電商幫助在地小農。
            </div>
            <router-link class="btn btn-link" :to="{ name: 'ProjectMarket' }">
              瀏覽專案<i class="las la-long-arrow-alt-right"></i>
            </router-link>
            <div class="display-on-mobile mt-32">
              <figure class="figure gradient-border">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/market-web-hp.gif"
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
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/pms-homepage.gif"
                  class="figure-img img-fluid"
                  alt="..."
                />
              </figure>
            </div>
          </div>
          <div class="col-lg-4 content-pl-48">
            <h3>旅宿管理系統規劃</h3>
            <div class="text-md-bold mb-24">
              UX 研究<span class="font-color-lighter"> | </span>
              UI 設計<span class="font-color-lighter"> | </span>
              B2B<span class="font-color-lighter"> | </span>
              SaaS 服務
            </div>
            <div class="text-md">
              針對 OwlNest 旅宿管理系統的鋪價功能進行開發及優化，滿足便捷、快速及可彈性修改定價的需求。
            </div>
            <router-link class="btn btn-link" :to="{ name: 'ProjectPMS' }">
              瀏覽專案<i class="las la-long-arrow-alt-right"></i>
            </router-link>
            <div class="display-on-mobile mt-32">
              <figure class="figure">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/pms-homepage.gif"
                  class="figure-img img-fluid"
                  alt="..."
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="offcial-web border-bottom">
      <div class="container">
        <div class="row project">
          <div class="col-lg-8 content-pr-48">
            <div class="official-web-device-section mb-56">
              <figure class="figure gradient-border">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/website-homepage.gif"
                  class="figure-img img-fluid"
                  alt="..."
                />
              </figure>
            </div>
          </div>
          <div class="col-lg-4 content-pl-48">
            <h3>奧丁丁集團官網重構</h3>
            <div class="text-md-bold mb-24">
              網站重構<span class="font-color-lighter"> | </span>
              UX 研究<span class="font-color-lighter"> | </span>
              UI 設計<span class="font-color-lighter"> | </span>
              形象官網
            </div>
            <div class="text-md">
              由網站架構至使用者體驗重新設計集團官網，跨集團七個事業體進行資訊整合，將集團理念及介紹更清楚的傳達給使用者。
            </div>
            <router-link class="btn btn-link" :to="{ name: 'ProjectWeb' }">
              瀏覽專案<i class="las la-long-arrow-alt-right"></i>
            </router-link>
            <div class="display-on-mobile mt-32">
              <figure class="figure gradient-border">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/website-homepage.gif"
                  class="figure-img img-fluid"
                  alt="..."
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="connect-section">
      <div class="container">
        <div class="connection-area">
          <p class="text-md-bold mb-16 say-hi">
            很期待認識你！有任何想法都歡迎隨時與我交流 ⭐
          </p>
          <div class="row connect-way">
            <div class="mail mb-8 col-sm-6 content-pl-48">
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
export default {
  name: "Home",
};
</script>

<style lang="scss" src="../styles/home.scss" scoped></style>
