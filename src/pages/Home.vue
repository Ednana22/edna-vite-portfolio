<template>
  <main>
    <section class="hero mt-60">
        <div class="container-hero">
            <div class="row hero">
                <div class="col-md-6 mb-56">
                <h2 class="mb-32">
                    Hello! 👋
                    <br />
                I'm Edna Wei
                </h2>
                <h1>
                    我是一名在科技業的UI/UX，擁有前端基礎技能
                    <br />
                秉持以用戶為中心設計出符合易用性的產品
                    <br />
                解決問題時以80%思考；20%實作
                </h1>
                </div>
                <div class="col-md-6">
                <figure class="figure flex-center">
                    <img
                        src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/hero.png"
                        class="figure-img img-fluid " width="400px"
                        alt="..."
                    />
                    </figure>
                </div>
            </div>
        </div>
    </section>
    <section class="market">
        <div class="container">
        <div class="row project">
            <div class="col-lg-8 content-pr-48">
            <div class="market-device-section mb-56">
                <div class="img-container web gradient-border"></div>
                <div class="img-container mobile gradient-border"></div>
            </div>
            </div>
            <div class="col-lg-4">
            <h3>奧丁丁市集平台改版</h3>
            <div class="text-md mb-24">
                品牌再造
                <span class="font-color-lighter"> | </span>
                網站重構
                <span class="font-color-lighter"> | </span>
                APP規劃
                <span class="font-color-lighter"> | </span>
                UX研究
                <span class="font-color-lighter"> | </span>
                UI設計
            </div>
            <div class="display-on-mobile mb-32">
                <figure class="figure gradient-border">
                <img
                    src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/market-web-hp.gif"
                    class="figure-img img-fluid "
                    alt="..."
                />
                </figure>
            </div>
            <div class="text-md">
                為奧丁丁市集重構電子商務網站，並進行品牌再造跨部門合作，以優質生鮮電商幫助在地優質小農推廣用心製造的產品。
            </div>
            <router-link class="btn btn-link" :to="{ name: 'ProjectMarket' }">
                瀏覽專案<i class="las la-long-arrow-alt-right"></i>
            </router-link>
        </div>
        </div>
    </div>
    </section>
    <section class="offcial-web">
        <div class="container">
        <div class="row project">
            <div class="col-lg-8 content-pr-48">
            <div class="pms-device-section mb-56">
                <figure class="figure gradient-border">
                <img
                    src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/website-homepage.gif"
                    class="figure-img img-fluid"
                    alt="..."
                />
                </figure>
            </div>
            </div>
            <div class="col-lg-4">
            <h3>奧丁丁集團官網重構</h3>
            <div class="text-md mb-24">
                網站重構<span class="font-color-lighter"> | </span>UX研究<span
                class="font-color-lighter" > | </span>UI設計<span class="font-color-lighter"> | </span>形象官網
            </div>
            <div class="display-on-mobile mb-32">
                <figure class="figure gradient-border">
                <img
                    src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/website-homepage.gif"
                    class="figure-img img-fluid"
                    alt="..."
                />
                </figure>
            </div>
            <div class="text-md">
                重構奧丁丁集團官網，將集團理念以及各事業體介紹更清楚的傳達給使用者。跨集團七個事業體進行資訊整合，並從集團VI延伸為網站定義風格。

            </div>
            <router-link class="btn btn-link" :to="{ name: 'ProjectWeb' }">
                瀏覽專案<i class="las la-long-arrow-alt-right"></i>
            </router-link>
            </div>
        </div>
        </div>
    </section>    
    <section class="pms">
        <div class="container">
        <div class="row project">
            <div class="col-lg-8 content-pr-48">
            <div class="pms-device-section">
                <figure class="figure">
                <img
                    src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/pms-homepage.gif"
                    class="figure-img img-fluid"
                    alt="..."
                />
                </figure>
            </div>
            </div>
            <div class="col-lg-4">
            <h3>旅宿管理系統功能規劃</h3>
            <div class="text-md mb-24">
                UX研究<span class="font-color-lighter"> | </span>UI設計<span
                class="font-color-lighter"
                >
                | </span>B2B
            </div>
            <div class="display-on-mobile mb-32">
                <figure class="figure">
                <img
                    src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/pms-homepage.gif"
                    class="figure-img img-fluid"
                    alt="..."
                />
                </figure>
            </div>
            <div class="text-md">
                對於OwlNest旅宿管理系統的鋪價功能進行擴充以及優化，達成便捷快速及可彈性修改的目的。
            </div>
            <router-link class="btn btn-link" :to="{ name: 'ProjectPMS' }">
                瀏覽專案<i class="las la-long-arrow-alt-right"></i>
            </router-link>
            </div>
        </div>
        </div>
    </section>
  </main>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style lang="scss" src="../styles/home.scss" scoped>

</style>