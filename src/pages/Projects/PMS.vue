<template>
  <div>
    <PageElevator :anchors="anchors" />
    <main class="project-pms">
      <section class="title container">
        <h1 class="mb-24">旅宿管理系統規劃</h1>
        <p class="text-md line-height-sm mb-8">
          負責內容<span class="font-color-light"> | </span>UX 研究、UI 設計
        </p>
        <p class="text-md line-height-sm mb-8">
          專案規模<span class="font-color-light"> | </span>跨二部門，約 8 人
        </p>
        <p class="text-md line-height-sm">
          專案角色<span class="font-color-light"> | </span>UI/UX 設計師
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
      <section id="overall" class="overall container text-md">
        <div class="background mb-48">
          <h2 class="mb-16">專案背景</h2>
          <p class="text-md mb-8">
            OwlNest 是一款為旅宿業打造的 B2B 三合一整合型訂房系統，用戶遍及亞洲、美洲等國家，旅宿用戶達上千家。<br/>
          </p>
          <p class="text-md mb-48">
            然而系統早期所規劃的鋪價功能較簡易，加上產品市場逐漸拓展，使用者也從需求較單純的民宿業者增加至旅館業者，<span class="text-md-bold">目前介面功能無法達到有效的鋪設價格，對使用者來說不僅費時也容易出錯</span>。
          </p>
        </div>
        <div class="task mb-48">
          <h2 class="mb-16">專案挑戰與決策</h2>
            <ul class="text-md">
              <div class="flex mb-24">
                <span class="mr-8">•</span>
                <li>
                  <span class="text-md-bold">無法與真實與用者進行訪談</span><br>
                  此產品向來都是由業務端帶回使用者反饋並發起優化的需求，因此 UI/UX 設計師很少有機會與真實使用者接觸。為了解決此問題我訪談了集團旗下的 OwlStay 實體旅宿部門的同事，瞭解使用者在操作上的真實痛點。
                </li>
              </div>
              <div class="flex">
                <span class="mr-8">•</span>
                <li>
                  <span class="text-md-bold">與產品顧問持不同意見</span><br>
                  在討論優化階段產品顧問提出想把原有鋪價流程一次翻新的做法，但 UI/UX 端持盡量以不要影響到目前使用者的操作為原則。針對這點我做出簡易 Prototype 以實際操作體驗來說服產品顧問。
                </li>
              </div>
            </ul>
        </div>
        <div class="highlight">
          <h2 class="mb-16">
            反饋搶先看 👀
          </h2>
          <div class="feedback row">
            <div class="col-md-4 content-pr-8 mb-16">
              <div class="border-thinner border-radius-4 shadow-sm p-8">
                <div class="text-sm-bold">
                  ⭐⭐⭐⭐⭐
                  <br />
                  批次鋪價功能的推出對於年底需要長時間鋪價真的非常方便！
                  <p class="text-sm">
                    - 北部旅宿業者
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 content-pr-8 mb-16">
              <div class="border-thinner border-radius-4 shadow-sm p-8">
                <div class="text-sm-bold">
                  ⭐⭐⭐⭐⭐
                  <br />
                  國定假期功能清楚明瞭！還可以針對不同假期做價格上的調整，很棒！
                  <p class="text-sm">
                    - 東部旅宿業者
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 content-pr-8">
              <div class="border-thinner border-radius-4 shadow-sm p-8">
                <div class="text-sm-bold">
                  ⭐⭐⭐⭐⭐
                  <br />
                  新規劃的國定假日鋪價功能成為我們商品在市場上的獨有買點！
                  <p class="text-sm">
                    - 業務同事
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="cover-photo container p-0">
        <figure class="figure">
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/hote_+front_desk+.png"
            class="figure-img img-fluid border-radius-4"
            alt="..."
          />
        </figure>
      </section>
      <section id="step-1" class="1gold container text-md">
        <div class="project-title">
          <div class="title-group">
            <h4 class="mr-8">1</h4>
            <div>
              <h3 class="mb-6">目標</h3>
              <h2>我們要解決的問題</h2>
            </div>
          </div>
        </div>
        <ul>
          <div class="flex mb-8">
            <span class="mr-8">‣</span>
            <li class="text-md">進行設定介面開發，達到更符合使用者期待的鋪價功能</li>
          </div>
          <div class="flex mb-8">
            <span class="mr-8">‣</span>
            <li class="text-md">依照現有使用者的反饋來優化現行介面，讓系統中新舊功能並存</li>
          </div>
          <div class="flex">
            <span class="mr-8">‣</span>
            <li class="text-md">針對國定假日進行快速且彈性的鋪價</li>
          </div>
        </ul>
      </section>
      <section id="step-2" class="2understand container text-md">
        <div class="row content mt-16 mb-16">
          <div class="col-md-5 content-pr-48 mb-48">
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
              <span class="text-md-bold">對奧丁丁旗下 OwlStay 旅宿團隊進行鋪價習慣訪談，並參考業務帶回來的旅宿業者反饋</span>，得知使用者的鋪價習慣通常是先鋪設一年的平日、假日房價再鋪設國定假日房價，有些國外旅客較多的旅宿業者甚至會參考鄰國的連假日期去制訂銷售價格。          </p>
          </div>
          <div class="col-md-7 content-pl-48 text-align-center">
            <div class="text-sm-bold plan_border mb-8">平日房價</div>
            <i class="las la-long-arrow-alt-down"></i>
            <div class="text-sm-bold plan_border mb-8 mt-8">假日房價</div>
            <i class="las la-long-arrow-alt-down"></i>
            <div class="text-sm-bold plan_border mt-8">國定假日房價</div>
            <i class="las la-long-arrow-alt-down"></i>
            <div class="text-sm-bold plan_border mt-8">鄰國連假房價</div>
          </div>
        </div>
      </section>
      <section id="step-3" class="3define container text-md">
        <div class="row content mt-16 mb-16">
          <div class="col-md-5 content-pr-48 mb-48">
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
              使用者們最常反應的就是目前介面在鋪設<span class="text-md-bold">長區間且多時段的房價時只能一項一項去設定</span>，操作繁雜且重複性高的操作也容易造成鋪價錯誤的情況，先前就有旅宿業者沒有設定到連假價格而造成虧損的問題。</p>
          </div>
          <div class="col-md-7 content-pl-48">
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
      <section id="step-4" class="4brainstorming container text-md mb-60">
        <div class="content mt-16 mb-16">
          <div class="col">
            <div class="project-title">
              <div class="title-group">
                <h4 class="mr-8">4</h4>
                <div class="">
                  <h3 class="mb-8">思考</h3>
                  <h2>腦力激盪來拆解任務</h2>
                </div>
              </div>
            </div>
            <div class="analyze row mb-80">
              <div class="col-md-5 content-pr-48 mb-48">
                <h5 class="mb-16">I. 分析目前的鋪價步驟</h5>
                <p class="text-md">
                  目前介面只能針對<span class="text-md-bold">單一房型做單一專案的單一區間做鋪價</span>，如有多房型多專案搭配的情況下鋪價步驟則會倍數增加，對使用者是很大的負擔。
                </p>
              </div>
              <div class="col-md-7 text-align-center content-pl-48">
                <figure class="figure">
                  <img
                    src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/brainstorming1.png"
                    class="figure-img img-fluid"
                    style="width: 450px"
                    alt="..."
                  />
                </figure>
              </div>
            </div>
            <div class="improve row mb-80">
              <div class="col-md-5 content-pr-48 mb-48">
                <h5 class="mb-16">II. 找出可優化的空間</h5>
                <ul>
                  <div class="flex mb-24">
                    <span class="mr-8">•</span>
                    <li>
                      <span class="text-md-bold"> 省去重複步驟 - </span>
                        由使用者的鋪價步驟可得知使用者大多是<span class="text-md-bold">由房型出發，再依照不同專案及區間調整房價</span>，串接平台價格通常會一致，如果可省去每次都重複的步驟對使用者操作將會更友善。
                    </li>
                  </div>
                  <div class="flex">
                    <span class="mr-8">•</span>
                    <li>
                      <span class="text-md-bold">輕鬆選取國定假日區間 - </span>
                      我也觀察到雖然目前介面中有提供國定假日的日期資訊，但使用者無法在鋪價時同時看到連假日期，為此<span class="text-md-bold">我們進行下拉日期介面的優化及規劃可複選國定假日的鋪價介面。</span>
                    </li>
                  </div>
                </ul>
              </div>
              <div class="col-md-7 text-align-center content-pl-48">
                <div class="text-align-initial">
                  <figure class="figure">
                    <img
                      src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/brainstorming2.png"
                      class="figure-img img-fluid"
                      style="width: 450px"
                      alt="..."
                    />
                    <div class="text-sm mt-8">同顏色表示重複操作的步驟</div>
                  </figure>
                </div>
              </div>
            </div>
            <div class="soluction row">
              <div class="col-md-5 content-pr-48 mb-48">
                <h5 class="mb-16">III. 優化過後的鋪價步驟</h5>
                <p class="text-md">
                  可複選的房型或專案價格，再搭配區間做設定以最有效的方法進行鋪價，以上述例子而言<span class="text-md-bold">節省了 4.5 倍的操作。</span>
                </p>
              </div>
              <div class="col-md-7 text-align-center content-pl-48">
                <figure class="figure">
                  <img
                    src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/brainstorming3.png"
                    class="figure-img img-fluid"
                    style="width: 450px"
                    alt="..."
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="step-5" class="5design-procress bg-grey-darkest text-md adjust-pt-dark-bg">
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
            <div class="col-md-5 content-pr-48 mb-48">
              <h5 classWireframe>I. Wireframe</h5>
              <p class="text-md">
                與組員們一同討論優化流程後，我就會將文字流程以 Wireframe 的方式呈現出來，與工程師做初步討論並快速修改。
              </p>
            </div>
            <div class="col-md-7 content-pl-48">
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
            <div class="col-md-5 content-pr-48 mb-48">
              <h5 class="mb-16">II. UI Library</h5>
              <p class="text-md">
                後台比起視覺更重視的是使用者完成任務的流程，<span class="text-md-bold">在規劃介面時為避免使用者的學習成本增加</span>，應該遵從既有的介面及流程，並依原有的介面原件快速做出 Mockup 與團隊討論。
              </p>
            </div>
            <div class="col-md-7 content-pl-48">
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
            <div class="col-md-5 content-pr-48 mb-48">
              <h5 class="mb-16">III. Prototype</h5>
              <p class="text-md">
                直接做出 Prototype 來給使用者測試可達到高擬真度且更可以看出使用者對畫面的操作流程以及互動。<br>
                由於此專案為收費管理系統，恕無法提供 Prototpye 實作介面。
              </p>
            </div>
            <div class="col-md-7 content-pl-48">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/prototype.png"
                class="figure-img img-fluid"
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>
      <section id="step-6" class="6result bg-grey-darkest text-md adjust-pb-dark-bg">
        <div class="container font-color-lighter">
          <div class="col-md-5 content-pr-48">
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
          <div class="col-md-5 content-pr-48">
            <p class="text-md mb-48">
              鋪價新功能讓使用者可由多房型、多專案做多元組合的鋪價。規劃以 tab 方式與原本的月曆做切換，<span class="text-md-bold">既不會影響原先版面也可滿足有批次鋪價需求的使用者，以最平靜不干擾使用者的方式推來推出新功能。</span>
            </p>
          </div>
          <div class="col-md-9 mb-80">
            <h5 class="mb-16">鋪設多專案</h5>
            <img
              src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/mutipul-plans-chose.png"
              class="figure-img img-fluid border-radius-16 shadow mb-16"
              alt="..."
            />
            <p class="text-md mb-16">
              由房型或是專案多選來鋪設價格，可以解決使用者需要一直重複設定的問題
            </p>
          </div>
          <div class="col-md-9 mb-80 ml-auto">
            <h5 class="mb-16">快速設定國定假日</h5>
            <img
              src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/nationai-holiday.png"
              class="figure-img img-fluid border-radius-16 shadow mb-16"
              alt="..."
            />
            <p class="text-md mb-16">
              使用者可以直接選擇欲鋪價的國定假日，以介面呈現來解決使用者需記憶及來回比對的負擔
            </p>
          </div>
          <div class="col-md-9">
            <h5 class="mb-16">優化下拉月曆內容</h5>
            <img
              src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/price_calendar.png"
              class="figure-img img-fluid border-radius-16 shadow mb-16"
              alt="..."
            />
            <p class="text-md mb-16">
              將國定假日也呈現在下拉月曆上，讓使用者在鋪價時可隨時留意
            </p>
          </div>
        </div>
      </section>
      <section id="step-7" class="7iterate container text-md mt-60">
        <div class="col-md-5 content-pr-48">
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
            批次鋪價功能推出後獲得使旅宿業者的正面反饋，不只大量節省了人力也對國定假日可自動帶入的功能也表示是項極為方便的操作，這正向反饋也推動了第二階段鄰國國定假日的開發。<br>
            業務端也表示在一開始做競品分析就知道國內並沒擁有國定假日鋪價功能的旅宿管理系統，因此這也是銷售的一大賣點。
          </p>
        </div>
      </section>
      <section id="step-8" class="8takeaway container text-md mb-60">
        <div class="col-md-5 content-pr-48">
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
            在規劃後台系統新功能時最重要的是要顧及現存使用者的習慣，<span class="text-md-bold">使用者通常不喜歡變動，所以在規劃新功能時盡量以不要影響到目前使用者的操作為最高原則。</span>
          </p>
        </div>
      </section>
      <section class="more-project bg-blue-lightest pt-80">
        <div class="container">
          <h2>更多設計專案</h2>
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
                <div class="text-md-bold mt-24">奧丁丁市集改版</div>
                <div class="text-md">
                  品牌再造
                  <span class="font-color-light"> | </span>
                  網站重構
                  <span class="font-color-light"> | </span>
                  APP 規劃
                  <span class="font-color-light"> | </span>
                  UX 研究
                  <span class="font-color-light"> | </span>
                  UI 設計
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
                UX 研究
                <span class="font-color-light"> | </span>
                UI 設計
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
  </div>
</template>

<script>
import PageElevator from '../../components/PageElevator.vue'

export default {
  name: "projectPMS",
  components: {
    PageElevator
  },
  data () {
    return {
      anchors: [
        {
          name: '總覽',
          id: '#overall'
        },        
        {
          name: '目標',
          id: '#step-1'
        },
        {
          name: '理解',
          id: '#step-2'
        },
        {
          name: '定義',
          id: '#step-3'
        },
        {
          name: '思考',
          id: '#step-4'
        },
        {
          name: '設計過程',
          id: '#step-5'
        },
        {
          name: '成果',
          id: '#step-6'
        },
        {
          name: '迭代',
          id: '#step-7'
        },
        {
          name: '反思',
          id: '#step-8'
        }
      ]
    }
  }
};
</script>

<style lang="scss" src="../../styles/pms.scss" scoped></style>
