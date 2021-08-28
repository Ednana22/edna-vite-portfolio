<template>
  <div id="page-elevator">
    <a
      v-for="i in 7"
      :key="`elevator-${i}`"
      @click.prevent="onElevatorClick(`#step-${i}`)"
      >{{ i }}</a
    >
  </div>
  <main class="project-pms">
    <section class="title container pt-120">
      <h1 class="mb-24">旅宿管理系統功能規劃</h1>
      <p class="text-md mb-4">
        負責內容<span class="font-color-light"> | </span>UX研究、UI設計
      </p>
      <p class="text-md mb-4">
        專案規模<span class="font-color-light"> | </span>跨二部門，約8人
      </p>
      <p class="text-md mb-4">
        專案角色<span class="font-color-light"> | </span>UI/UX Designer
      </p>
    </section>
    <section class="banner container p-0">
      <figure class="figure col-md-12">
        <img
          src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/pms-hero.png"
          class="figure-img img-fluid"
          alt="..."
        />
      </figure>
    </section>
    <section class="task container text-md">
      <div class="product-introduce mb-80">
        <h2 class="mb-16">產品介紹</h2>
        <p class="text-md">
          OwlNest是一款為旅宿業打造的B2B三合一整合型訂房系統，提供前台官網訂房系統、PMS訂單管理系統、線上銷售平台通路串接，用戶遍及亞洲、美洲國家，旅宿用戶達上千家。
        </p>
      </div>
      <div class="background">
        <h2 class="mb-16">專案背景</h2>
        <p class="">
          因早期OwlNest系統客群是鎖定民宿業者，只做到單一房型單一專案的鋪價功能，近幾年隨著市場逐漸拓展，客群也從民宿業者增加至小型旅館業者再加上平台串接功能的開發，目前介面功能無法達到有效的鋪設價格及設定庫存，對使用者來說不僅費時也容易出錯。
        </p>
      </div>
    </section>
    <section class="cover-photo container p-0">
      <figure class="figure">
        <img
          src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/hote_+front_desk+.png"
          class="figure-img img-fluid"
          alt="..."
        />
      </figure>
    </section>
    <section class="1gold container text-md">
      <div class="project-title">
        <div class="title-group">
          <h4 class="mr-8">1</h4>
          <div class="">
            <h3 class="mb-6">目標</h3>
            <h2>最終希望解決的問題</h2>
          </div>
        </div>
      </div>
      <ul>
        <div class="flex mb-8">
          <span class="mr-8">‣</span>
          <li>滿足旅宿業者鋪設價格時的習慣</li>
        </div>
        <div class="flex mb-8">
          <span class="mr-8">‣</span>
          <li>擴充設定介面達到有效率的設定</li>
        </div>
        <div class="flex">
          <span class="mr-8">‣</span>
          <li>優化現有設定介面</li>
        </div>
      </ul>
    </section>
    <section class="2understand container text-md">
      <div class="row content mt-16 mb-16">
        <div class="col-md-6 content-pr-48 mb-48">
          <div class="project-title">
            <div class="title-group">
              <h4 class="mr-8">2</h4>
              <div class="">
                <h3 class="mb-6">理解</h3>
                <h2>瞭解使用者如何操作產品</h2>
              </div>
            </div>
          </div>
          <p class="text-md">
            除了業務帶回來的旅宿業者反饋外，我們也訪談了奧丁丁旗下OwlStay旅宿團隊，得知使用者的鋪價習慣通常是先鋪設一年的平日房價、假日房價，再鋪設國定假日房價，有些國外旅客較多的旅宿業者甚至會參考鄰國的連假日期去制訂銷售價格。
          </p>
        </div>
        <div class="col-md-6 content-pl-48 text-align-center">
          <div class="text-sm plan_border mb-8">平日房價</div>
          <i class="las la-long-arrow-alt-down"></i>
          <div class="text-sm plan_border mb-8 mt-8">假日房價</div>
          <i class="las la-long-arrow-alt-down"></i>
          <div class="text-sm plan_border mt-8">國定假日房價</div>
          <i class="las la-long-arrow-alt-down"></i>
          <div class="text-sm plan_border mt-8">鄰國連假房價</div>
        </div>
      </div>
    </section>
    <section class="3define container text-md">
      <div class="row content mt-16 mb-16">
        <div class="col-md-6 content-pr-48 mb-48">
          <div class="project-title">
            <div class="title-group">
              <h4 class="mr-8">3</h4>
              <div class="">
                <h3 class="mb-8">定義</h3>
                <h2>分析現行介面的問題</h2>
              </div>
            </div>
          </div>
          <p class="text-md">
            使用者們最常反應的就是目前介面在鋪設長區間且多時段的房價時只能一項一項去設定，操作繁雜且重複性高的操作也容易造成鋪價錯誤的情況，先前就有旅宿業者沒有設定到連假價格而造成虧損的問題。
          </p>
        </div>
        <div class="col-md-6 content-pl-48">
          <figure class="figure border-thin border-radius-4">
            <img
              src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/painpoint.gif"
              class="figure-img img-fluid border-radius-4"
              alt="..."
            />
          </figure>
        </div>
      </div>
    </section>
    <section class="4brainstorming container text-md mb-60">
      <div class="content mt-16 mb-16">
        <div class="col">
          <div class="project-title">
            <div class="title-group">
              <h4 class="mr-8">4</h4>
              <div class="">
                <h3 class="mb-8">思考</h3>
                <h2>腦力激盪來優化任務</h2>
              </div>
            </div>
          </div>
          <div class="analyze row mb-80">
            <div class="col-md-6 content-pr-48 mb-48">
              <div class="text-md-bold mb-16">分析目前介面的鋪價步驟</div>
              <p class="text-md">
                目前介面只能針對單一房型做單一專案的單一區間做鋪價，如有多房型配多專案，鋪價步驟則會倍數增加，對使用者是一種操作負擔。
              </p>
            </div>
            <div class="col-md-6 content-pl-48">
              <figure class="figure">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/brainstorming1.png"
                  class="figure-img img-fluid"
                  style="width: 400px"
                  alt="..."
                />
              </figure>
            </div>
          </div>
          <div class="improve row mb-80">
            <div class="col-md-6 content-pr-48 mb-48">
              <div class="text-md-bold mb-16">找出可優化的空間</div>
              <ul>
                <div class="flex mb-8">
                  <span class="mr-8">•</span>
                  <li>
                    <span class="text-md-bold"> 省去重複步驟 - </span>
                    由使用者的鋪價步驟可得知使用者是由房型出發，再依照不同專案及區間調整房價，通常串接平台價格會一致，如果可省去每次都重複的步驟(以不同顏色標註出重複步驟)，對使用者操作將會更友善。
                  </li>
                </div>
                <div class="flex mb-8">
                  <span class="mr-8">•</span>
                  <li>
                    <span class="text-md-bold">國定假日區間選取 - </span>
                    我們也觀察到雖然目前介面中有提供國定假日的日期資訊，但使用者無法在鋪價時同時看到連假日期，因此使用者通常都是打開人事行政局以另一個視窗來比對，為此我們優化了日期下拉介面及規劃可複選國定假日的鋪價介面。
                  </li>
                </div>
              </ul>
            </div>
            <div class="col-md-6 content-pl-48">
              <figure class="figure">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/brainstorming2.png"
                  class="figure-img img-fluid"
                  style="width: 400px"
                  alt="..."
                />
              </figure>
            </div>
          </div>
          <div class="soluction row">
            <div class="col-md-6 content-pr-48 mb-48">
              <div class="text-md-bold mb-16">優化過後的鋪價步驟</div>
              <p class="text-md">
                規劃房型或專案價格可複選再搭配區間做設定以最有效的方法進行鋪價。
              </p>
            </div>
            <div class="col-md-6 content-pl-48">
              <figure class="figure">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/brainstorming3.png"
                  class="figure-img img-fluid"
                  style="width: 400px"
                  alt="..."
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="5design-procress bg-grey-darkest text-md adjust-pt-dark-bg">
      <div class="container font-color-lighter">
        <div class="project-title">
          <div class="title-group">
            <h4 class="mr-8">5</h4>
            <div class="">
              <h3 class="mb-8">設計過程</h3>
              <h2>將文字流程製作成介面</h2>
            </div>
          </div>
        </div>
        <div class="1wireframe row content mb-80">
          <div class="col-md-6 content-pr-48 mb-48">
            <p class="text-md-bold mb-16">I. Wireframe</p>
            <p class="text-md">
              組員一同討論優化流程後，我就會將文字流程以Wireframe的方式呈現出來，與工程師做初步討論並快速修改。
            </p>
          </div>
          <div class="col-md-6 content-pl-48">
            <figure class="figure">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/wireframe.jpg"
                class="figure-img img-fluid border-radius-4"
                alt="..."
              />
            </figure>
          </div>
        </div>
        <div class="2mockup row content mb-80">
          <div class="col-md-6 content-pr-48 mb-48">
            <p class="text-md-bold mb-16">II. UI Library & Mockup</p>
            <p class="text-md">
              後台比起視覺重視的是使用者完成任務的流程，在規劃介面時為避免使用者的學習成本增加，應該遵從既有的介面及流程，並依原有的介面原件快速做出Mockup與團隊討論。
            </p>
          </div>
          <div class="col-md-6 content-pl-48">
            <figure class="figure">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/UI+library.png"
                class="figure-img img-fluid"
                alt="..."
              />
            </figure>
          </div>
        </div>
        <div class="3prototype row content">
          <div class="col-md-6 content-pr-48 mb-48">
            <p class="text-md-bold mb-16">III. Prototype</p>
            <p class="text-md">
              直接做出Prototype來給使用者測試可達到高擬真度且更可以看出使用者對畫面的操作流程以及互動。
            </p>
          </div>
          <div class="col-md-6 content-pl-48">
            <img
              src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/prototype.png"
              class="figure-img img-fluid"
              alt="..."
            />
          </div>
        </div>
      </div>
    </section>
    <section class="6result bg-grey-darkest text-md adjust-pb-dark-bg">
      <div class="container font-color-lighter">
        <div class="col-md-6 content-pr-48">
          <div class="project-title">
            <div class="title-group">
              <h4 class="mr-8">6</h4>
              <div class="">
                <h3 class="mb-8">成果</h3>
                <h2>頁面展示</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 content-pr-48">
          <p class="text-md mb-48">
            新功能規劃可由多房型、多專案結合，使用者可依照自己的價格制定需求來多元組合。在介面上方規劃以書籤方式來與原本的月曆做切換，既不會影響原先版面也可滿足有批次鋪價需求的使用者，以最平靜不關擾使用者的方式推來推出新工能。
          </p>
        </div>
        <div class="col-md-9 mb-80">
          <p class="text-md-bold mb-16">鋪設多專案</p>
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/mutipul-plans-chose.png"
            class="figure-img img-fluid border-radius-16 shadow mb-16"
            alt="..."
          />
          <p class="text-md mb-16">
            由房型或是專案多選來鋪設價格，可以解決使用者需要一直重複設定的問題。
          </p>
        </div>
        <div class="col-md-9 mb-80 ml-auto">
          <p class="text-md-bold mb-16">快速設定國定假日</p>
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/nationai-holiday.png"
            class="figure-img img-fluid border-radius-16 shadow mb-16"
            alt="..."
          />
          <p class="text-md mb-16">
            使用者可以直接選擇欲鋪價的國定假日，以介面設定來解決使用者需記憶或是來回比對的負擔。
          </p>
        </div>
        <div class="col-md-9">
          <p class="text-md-bold mb-16">優化下拉月曆內容</p>
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/price_calendar.png"
            class="figure-img img-fluid border-radius-16 shadow mb-16"
            alt="..."
          />
          <p class="text-md mb-16">
            將當國國定假日也呈現在下拉月曆上，讓使用者在鋪價時可隨時留意。
          </p>
        </div>
      </div>
    </section>
    <section class="7iterate container text-md mt-60">
      <div class="col-md-6 content-pr-48">
        <div class="project-title">
          <div class="title-group">
            <h4 class="mr-8">7</h4>
            <div class="">
              <h3 class="mb-8">迭代</h3>
              <h2>由使用者回饋中進行產品優化</h2>
            </div>
          </div>
        </div>
        <p class="text-md">
          批次鋪價功能推出後獲得使旅宿業者的正面反饋，不只大量節省了人力，對於國定假日可自動帶入的功能也表示是項極為方便的操作，將增加更多國家國定假日的需求排入第二優化中。業務端也表示在一開始做競品分析就知道國內並沒擁有國定假日鋪價功能的旅宿管理系統，因此這也是銷售的一大賣點。
        </p>
      </div>
    </section>
    <section class="8takeaway container text-md mb-60">
      <div class="col-md-6 content-pr-48">
        <div class="project-title">
          <div class="title-group">
            <h4 class="mr-8">8</h4>
            <div class="">
              <h3 class="mb-8">反思</h3>
              <h2>後台須顧及的層面更廣</h2>
            </div>
          </div>
        </div>
        <p class="text-md">
          在規劃後台系統新功能時最重要的是要顧及現存使用者的習慣，使用者通常不喜歡變動，所以在規劃新功能時盡量以不要影響到目前使用者的操作為最高原則。
        </p>
      </div>
    </section>
    <section class="more-project bg-grey-lightest pt-80">
      <div class="container">
        <h2 class="">更多設計專案</h2>
        <div class="row">
          <div class="col-md-6 content-pr-8 mt-24 mb-24">
            <div class="card-border-grey border-radius-4">
              <router-link class="" :to="{ name: 'ProjectMarket' }">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/market-hero.png"
                  class="figure-img img-fluid border-radius-4 shadow-sm"
                  alt="..."
                />
              </router-link>
              <div class="text-md-bold mt-24">奧丁丁市集平台改版</div>
              <div class="text-md">
                品牌再造
                <span class="font-color-light"> | </span>
                網站重構
                <span class="font-color-light"> | </span>
                APP規劃
                <span class="font-color-light"> | </span>
                UX研究
                <span class="font-color-light"> | </span>
                UI設計
              </div>
              <router-link class="btn btn-link" :to="{ name: 'ProjectMarket' }">
                瀏覽專案<i class="las la-long-arrow-alt-right"></i>
              </router-link>
            </div>
          </div>
          <div class="col-md-6 content-pl-8 mt-24 mb-24">
            <router-link class="" :to="{ name: 'ProjectWeb' }">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/official_website-hero.png"
                class="figure-img img-fluid border-radius-4 shadow-sm"
                alt="..."
              />
            </router-link>
            <div class="text-md-bold mt-24">奧丁丁集團官網重構</div>
            <div class="text-md">
              網站重構
              <span class="font-color-light"> | </span>
              UX研究
              <span class="font-color-light"> | </span>
              UI設計
              <span class="font-color-light"> | </span>
              形象官網
            </div>
            <router-link class="btn btn-link" :to="{ name: 'ProjectWeb' }">
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
  name: "projectPMS",
};
</script>

<style lang="scss" src="../../styles/pms.scss" scoped></style>
