<template>
  <div id="page-elevator">
    <a v-for="i in 7" :key="`elevator-${i}`" @click.prevent="onElevatorClick(`#step-${i}`)">{{ i }}</a>
  </div>
  <main class="project-market" >
    <section class="title container pt-120">
      <h1 class="mb-24">奧丁丁市集平台改版</h1>
      <p class="text-md mb-4">
        負責內容<span class="font-color-light"> | </span>品牌再造、網站重構、UX研究、UI設計、使用者測試
      </p>
      <p class="text-md mb-4">
        專案規模<span class="font-color-light"> | </span>跨五部門，約15人
      </p>
      <p class="text-md mb-4">
        專案角色<span class="font-color-light"> | </span>UI/UX deaigner
      </p>
    </section>
    <section class="banner container p-0">
      <figure class="figure col-mb-12">
        <img
      src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/market-hero.png"
      class="figure-img img-fluid"
      alt="..."
    />
        <div class="bnanner"></div>
      </figure>
    </section>
    <section class="story container text-md">
      <h2 class="mb-16">成果搶先看 👀</h2>
      <div class="highlight row mb-48">
        <div class="col-md-4 new_user mb-24">
          <p class="text-xxl font-color-blue">230<span class="text-l">%</span></p>
          <p>新使用者增加</p>
        </div>
        <div class="col-md-4 viewing_time mb-24">
          <p class="text-xxl font-color-blue">81<span class="text-l">%</span></p>
          <p>工作平均長度增加</p>
        </div>
        <div class="col-md-4 bounce_rate mb-24">
          <p class="text-xxl font-color-blue">-24<span class="text-l">%</span></p>
          <p>跳出率明顯優化</p>
        </div>
      </div>
      <h2 class="mb-16">產品介紹</h2>
      <p class="text-md mb-48">
        奧丁丁市集是一個專注於<span class="text-md-bold"
      >推廣在地商家與台灣小農的電商平台</span>，涵蓋上千項嚴選商品累計合作逾兩千名小農及中小型優質商家。
      </p>
      <div class="mb-48">
        <h2 class="mb-16">專案背景</h2>
        <p class="mb-48">
          奧丁丁市集成立於2010年，當年食安問題層出不窮，舉凡塑化劑、防腐劑、香精牛奶到毒醬油，使消費者意識食安意識抬頭，也讓奧丁丁市集的「產地直送、有機蔬果」概念脫穎而出。<br />
      然而近年許多有機生鮮電商崛起，奧丁丁市集<span class="text-md-bold"
        >舊網站架構不支援響應式、頁面模式不符合使用者的瀏覽習慣、低效的瀏覽體驗也大程度的造成了低轉化率和高跳出率造成產品優勢不再。</span><br />
      而公司內部業務經理則反映，當展示網站給潛在合作廠商時<span
        class="text-md-bold"
        >經常被質疑公司網站的可用性、安全性及工程團隊能力，這也導致內部人員對產品提不起信心。</span>
        </p>
      </div>
      <div class="mb-48">
        <h2 class="mb-16">目標</h2>
        <ul>
          <div class="flex mb-8">
            <span class="mr-8">‣</span>
            <li>
              品牌再造進行跨部門合作
              (公關部、市集部、品牌形象部、視覺設計部、工程部)
            </li>
          </div>
          <div class="flex mb-8">
            <span class="mr-8">‣</span>
            <li>
              重構一個響應式的電子商務網站，方便用戶瀏覽和購買，重構同時一定要考量現有用戶的使用者習慣
            </li>
          </div>
          <div class="flex mb-8">
            <span class="mr-8">‣</span>
            <li>
              以電商平台幫助在地優質小農推廣用心製造的產品
            </li>
          </div>
        </ul>
      </div>
      <figure class="figure">
        <img
      src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/%E6%9E%9C%E8%BE%B2.png"
      class="figure-img img-fluid"
      alt="..."
    />
      </figure>
    </section>
    <section id="step-1" class="1task container text-md">
      <div class="row content">
        <div class="col-md-6 content-pr-48 mb-48">
          <div class="project-title">
            <div class="title-group">
              <h4 class="mr-8">1</h4>
              <div class="">
                <h3 class="mb-6">使用者研究</h3>
                <h2>聽聽你的使用者怎麼想</h2>
              </div>
            </div>
          </div>
          <p class="">
            訪談奧丁丁市集的不同層級的會員，使我們能夠瞭解不同用戶在<span
          class="text-md-bold"
          >使用網站時的場景、需求以及期望。</span>
            透過調查、競品分析進行市場定位，分析競品網站功能與特點的同時也幫我們<span
          class="text-md-bold"
          >梳理出奧丁丁市集在生鮮有機領域的立足點並同時推行品牌再造。</span>
          </p>
        </div>
        <div class="col-md-12 flex-top">
          <div class="col-md-4">
            <figure class="figure">
              <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/%E8%88%8A%E7%89%88%E9%9D%A2.png"
            class="figure-img img-fluid"
            alt="..."
          />
              <div class="bnanner"></div>
            </figure>
          </div>
          <div class="col-md-6">
            <div class="talking-bobble mb-16">
              <div class="user-talk mb-8">
                從桌機打開是一整個長長的網頁感覺很奇怪，瀏覽的範圍很小，我都是直接搜尋需要的物品就結帳，很希望能在首頁有些商品的資訊。
              </div>
              <div class="user-photo-emoji user-image-relative flex">
                <figure class="figure mr-16">
                  <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/userA.png"
                class="figure-img img-fluid"
                alt="..."
                width="60px"
                height="60px"
              />
                </figure>
                <span class="emoji-position">😕</span>
                <div class="name">
                  <p class="text-sm ">Cindy Wu</p>
                  <p class="text-sm color_grey-light">一般會員</p>
                </div>
              </div>
            </div>
            <div class="talking-bobble mb-16">
              <div class="user-talk mb-8">
                下單後無法從頁面得知出貨狀態有點困擾。
              </div>
              <div class="user-photo-emoji user-image-relative flex">
                <figure class="figure mr-16">
                  <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/userB.png"
                class="figure-img img-fluid"
                alt="..."
                width="60px"
                height="60px"
              />
                </figure>
                <span class="emoji-position">😫</span>
                <div class="name">
                  <p class="text-sm ">Vincent Chang</p>
                  <p class="text-sm color_grey-light">鑽石會員</p>
                </div>
              </div>
            </div>
            <div class="talking-bobble mb-16">
              <div class="user-talk mb-8">
                很希望分類可以再好找一點，有時候Banner會有折扣碼，但字真的滿小的，而且不確定在哪一張裡，要特別留意。
              </div>
              <div class="user-photo-emoji user-image-relative flex">
                <figure class="figure mr-16">
                  <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/userC.png"
                class="figure-img img-fluid"
                alt="..."
                width="60px"
                height="60px"
              />
                </figure>
                <span class="emoji-position">😧</span>
                <div class="name">
                  <p class="text-sm ">Lily Lin</p>
                  <p class="text-sm color_grey-light">一般會員</p>
                </div>
              </div>
            </div>
            <div class="talking-bobble">
              <div class="user-talk mb-8">
                跟客戶們開會時都是用電腦網頁，造成缺點直接暴露出來的窘境。主打商品Banner區域太小，點閱率及轉換率都無法發揮最佳效果。非常希望推動改版！
              </div>
              <div class="user-photo-emoji user-image-relative flex">
                <figure class="figure mr-16">
                  <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/userD.png"
                class="figure-img img-fluid"
                alt="..."
                width="60px"
                height="60px"
              />
                </figure>
                <span class="emoji-position">👏</span>
                <div class="name">
                  <p class="text-sm ">Joyce Chen</p>
                  <p class="text-sm color_grey-light">業務經理</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="step-2" class="2define container text-md mb-60">
      <div class="row content">
        <div class="col-md-6 content-pr-48">
          <div class="project-title">
            <div class="title-group">
              <h4 class="mr-8">2</h4>
              <div class="">
                <h3 class="mb-6">定義</h3>
                <h2>原來我們的使用者長這樣</h2>
              </div>
            </div>
          </div>
          <p class="text-md mb-48">
            根據使用者訪談、研究結果以及網站用戶數據分析，我們分析使用者的行為以及相似性，並創建出與使用者輪廓相仿的人物誌。此角色幫助團隊在規劃產品時有更明確的方向，也因產生了同理心，團隊更重視使用者所遇到的問題。
            從使用者地圖可得知使用者面臨的購物情況，進而討論優化產品的方向來幫助用戶更順利的完成購物、優化體驗讓使用者成為我們的忠實客戶。
          </p>
        </div>
        <div class="user-journey-image col-md-6 content-pl-48">
          <figure class="figure user-journey-mobile">
            <img
          src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/user-journey_M.png"
          class="figure-img img-fluid  border-thinner border-radius-4"
          alt="..."
          width="340px"
        />
            <div class="bnanner"></div>
          </figure>
          <figure class="figure user-journey-web">
            <img
          src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/user-journey_W.png"
          class="figure-img img-fluid border-1 border-radius-8"
          alt="..."
        />
            <div class="bnanner"></div>
          </figure>
        </div>
      </div>
    </section>
    <section id="step-3" class="3precress bg-grey-darkest text-md adjust-pt-dark-bg">
      <div class="container font-color-lighter">
        <div class="content">
          <div class="project-title">
            <div class="title-group col">
              <h4 class="mr-8">3</h4>
              <div class="">
                <h3 class="mb-8">設計過程</h3>
                <h2>重構優化及平凡討論</h2>
              </div>
            </div>
          </div>
          <div class="1ia content mb-80">
            <p class="text-md-bold col-md-6 mb-16">I. 資訊架構 釐清功能的層級</p>
            <div class="row">
              <p class="text-md col-md-6 content-pr-48 mb-48">
                在進行改版前UIUX設計師會先與工程團隊對焦使用者、業務端面臨的問題，工程團隊建議以頁面迭代的方式運行改版，因此新網站架構是以舊網站為骨架去翻新舊頁面、補強缺少的頁面。在下方資訊架構圖有橘色外框為新頁面，其餘皆為需要翻新的舊頁面，將各頁面標示出代號也在製作wireframe時方便與工程師討論。
              </p>
              <figure class="figure col-md-6 content-pl-48">
                <img
              src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/ia.png"
              class="figure-img img-fluid"
              alt="..."
            />
              </figure>
            </div>
          </div>
          <div class="2wireframe content mb-80">
            <p class="text-md-bold col-md-6 mb-16">
              II .wireframe & UI Design
            </p>
            <div class="user-talk text-align-left flex-center flex-start mb-8">
              <div class="memoji text-align-center">
                <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/CEO.png"
                class="figure-img img-fluid"
                alt="..."
                width="60px "
              />
              </div>
              <div class="talk-dialog ml-8">
                首頁不要Banner！
              </div>
            </div>
            <div class="user-talk text-align-left flex-center flex-start mb-24">
              <div class="memoji text-align-center">
                <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/edna.png"
                class="figure-img img-fluid"
                alt="..."
                width="60px "
              />
              </div>
              <div class="talk-dialog ml-8">
                什麼！哪個電商不用輪播Banner？<br>這不就是使用者最習慣的一種版型嗎？
              </div>
            </div>
            <div class="row">
              <p class="col-md-6 text-md content-pr-48 mb-48">
                上述是我在做Ｗireframe時遇到的情境，CEO提出了與以往我們習慣的電商完全背離的需求，從討論中得知CEO認為巨大的輪播Banner浪費了最精華的頁面且轉換率差。為了佐證CEO的論點，我請負責行銷的同仁幫忙整理先前輪播Banner的點擊率以及熱點分布圖，得知除了前兩張Banner點擊率略高以外之後的點擊率都非常低，也查到NNGroup文獻指出對Carousel Design有效性的質疑。
                在嘗試了幾種非輪播版型的設計後內部一致認同現在採用的版型，也跨部門的達成不要給使用者過多的促銷資訊，最多四張Banner的共識。
              </p>
              <div class="col-md-6 content-pl-48">
                <div class="mb-16">
                  <div class="flex">
                    <div class="col mr-8">
                      <img
                    src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/wireframe1.png"
                    class="figure-img img-fluid"
                    alt="..."
                  />
                    </div>
                    <div class="col mr-8">
                      <img
                    src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/wireframe2.png"
                    class="figure-img img-fluid"
                    alt="..."
                  />
                    </div>
                    <div class="col">
                      <img
                    src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/wireframe3.png"
                    class="figure-img img-fluid"
                    alt="..."
                  />
                    </div>
                  </div>
                </div>
                <div class="mb-48">
                  <div class="col">
                    <figure class="figure">
                      <img
                    src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/wireframe-4.png"
                    class="figure-img img-fluid"
                    alt="..."
                  />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="3ui-kit content mb-80">
            <p class="text-md-bold col-md-6 mb-16">
              III. UI Kit
            </p>
            <div class="row">
              <p class="text-md col-md-6 content-pr-48 mb-48">
                做使用者研究調查的同時我也與品牌形象部、公關部、視覺設計部進行跨部門合作，定義品牌再造風格並以之延伸介面元件。一定要將最終確定的UI
                kit元件及狀態分享給工程師，這可以幫助工程端在製作component時方便很多，也可減少來回的微互動修改。
              </p>
              <figure class="figure col-md-6 content-pl-48">
                <img
              src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/UI+kit.png"
              class="figure-img img-fluid"
              alt="..."
            />
              </figure>
            </div>
          </div>
          <div class="4prototpye content">
            <p class="text-md-bold col">
              V. Prototype 釐清畫面與使用者的互動
            </p>
            <div class="row">
              <p class="text-md col-md-6 content-pr-48 mb-48">
                使用Figma將元件都系統性的設定為component，使wireframe精緻化的過程迅速也方便討論後立即修改。邀請公司內部的市集使用者進行新版面任務測試，根據螢幕錄影及熱點分析再進行介面優化，聆聽反饋確保舊用戶在新介面中獲得高品質的使用者體驗。
              </p>
              <figure class="figure col-md-6 content-pl-48">
                <img
              src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/prototype.gif"
              class="figure-img img-fluid border-radius-4"
              alt="..."
            />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="step-4" class="4mockup bg-grey-darkest text-md adjust-pb-dark-bg">
      <div class="container font-color-lighter">
        <div class="content">
          <div class="project-title col">
            <div class="title-group">
              <h4 class="mr-8">4</h4>
              <div class="">
                <h3 class="mb-8">完成</h3>
                <h2>成果展示</h2>
              </div>
            </div>
          </div>
          <p class="text-md col-md-6 content-pr-48 mb-48">
            此次改版計畫是以頁面分階段迭代方式進行，由數據顯示使用者接觸最多的首頁以及能將網站架構補齊的分類頁為第一階段上線，而設計永遠都要比工程端開發早規劃並在Prototype測試時就進行優化。
          </p>
          <div class="highlight col-md-6 space-between mb-48">
            <div class="new_user mb-48">
              <p class="text-xl">230<span class="text-l">%</span></p>
              <p>新使用者增加</p>
            </div>
            <div class="viewing_time mb-48">
              <p class="text-xl">81<span class="text-l">%</span></p>
              <p>工作平均長度增加</p>
            </div>
            <div class="bounce_rate mb-48">
              <p class="text-xl">-24<span class="text-l">%</span></p>
              <p>跳出率明顯優化</p>
            </div>
          </div>
        </div>
        <div class="col-md-9 mb-80">
          <p class="text-md-bold mb-16">首頁瀏覽</p>
          <img
          src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/mockup-homepage.gif"
          class="figure-img img-fluid border-radius-16 shadow mb-16"
          alt="..."
          />
          <p class="text-md mb-16">
            參考GA數據以使用者的喜好做網頁內容的排序。
          </p>
        </div>
        <div class="col-md-9 mb-80 ml-auto">
          <p class="text-md-bold mb-16">Navbar產品分類</p>
          <img
          src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/mockup-homepage.png"
          class="figure-img img-fluid border-radius-16 shadow mb-16"
          alt="..."
          />
          <p class="text-md mb-16">
            依照使用者最感興趣的分類排序至前並將各分類細項歸納，讓使用者能清楚找到需購買的商品。
          </p>
        </div>        
        <div class="col-md-9 mb-80">
          <p class="text-md-bold mb-16">分類頁瀏覽</p>
          <img
          src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/mockup-category.gif"
          class="figure-img img-fluid border-radius-16 shadow mb-16"
          alt="..."
          />
          <p class="text-md mb-16">
            左側分類標觸控範圍有特別加大並加上hover效果，提供使用者更安心的操作。
          </p>
        </div>
        <div class="col-md-9 ml-auto">
          <p class="text-md-bold mb-16">404頁面</p>
          <img
        src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/mockup-404.png"
        class="figure-img img-fluid border-radius-16 shadow mb-16"
        alt="..."
      />
          <p class="text-md mb-16">
            將404規劃為不只是導回首頁的頁面，已使用情境而言當使用者找不到商品時除了知道頁面不存在很沮喪外，還是可以去逛逛其他相同屬性的商品或是探索分類。
          </p>
        </div>
      </div>
    </section>
    <section id="step-5" class="5iterate container text-md mt-60">
      <div class="row content">
        <div class="col-md-6 content-pr-48">
          <div class="project-title col">
            <div class="title-group">
              <h4 class="mr-8">5</h4>
              <div class="">
                <h3 class="mb-8">迭代</h3>
                <h2>再次聆聽使用者</h2>
              </div>
            </div>
          </div>          
          <p class="text-md mb-48">
            新介面上線兩個月後我們進行網站追蹤系統分析，發現「限時活動banner區域」點閱率有顯著改善，也從熱點追蹤證實了堅持保留使用者習慣的分類列是正確的設計。其中我們還發現使用者看完「限時活動banner區域」通常會接著尋找第二熱門的「編輯嚴選」及「最新上架」而忽略了中間的「特選專區」秉持著使用者為中心的原則微調專區順序，再觀察數據後發現使用者的瀏覽動線更為順暢，且原本被忽略的專區也連帶提高了點擊率。
          </p>
        </div>
        <figure class="figure col-md-6 content-pl-48 ">
          <img
        src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/heat-map.png"
        class="figure-img img-fluid"
        alt="..."
      />
        </figure>
      </div>
    </section>
    <section id="step-6" class="6takeaway container text-md">
      <div class="content">
        <div class="project-title">
          <div class="title-group">
            <h4 class="mr-8">6</h4>
            <div class="">
              <h3 class="mb-6">收穫及反思</h3>
              <h2>收到的反饋都是優化的機會</h2>
            </div>
          </div>
        </div>
        <div class="text-md col-md-6 content-pr-48">
          <ul>
            <div class="flex mb-8">
              <span class="mr-8">•</span>
              <li>
                <span class="text-md-bold">挑戰突破框架 - </span>
                就上述設計介面UI時遇到的Banner難題，當時聽到設計被打槍甚至說服CEO失敗其實非常慌亂，不過現在看來這一個任務不只讓我跳脫了慣性思考甚至學會運用更多資源來幫助自己梳理設計脈絡，成果也令使用者及同事非常滿意。
              </li>
            </div>
            <div class="flex mb-8">
              <span class="mr-8">•</span>
              <li>
                <span class="text-md-bold">當自己是目標受眾時最有感 - </span>
                奧丁丁市集是我自己非常喜歡平時也會使用的產品，從這次的品牌再造所營造的品牌調性到產品實作，最我來說都是非常寶貴的經驗，自己除了是設計者以外也是使用者，在角色切換時特別有感。看到整體業績提升以及真正有幫助到這塊土地上的農友時非常感動，好產品就是消費者、供應商、平台三贏的局面吧。
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
    <section id="step-7" class="7app container text-md mb-60">
      <div class="row content">
        <div class="col-md-6 content-pr-48">
          <div class="project-title col">
            <div class="title-group">
              <h4 class="mr-8">7</h4>
              <div class="">
                <h3 class="mb-6">驚喜包</h3>
                <h2>APP開發</h2>
              </div>
            </div>
          </div>
          <p class="text-md mb-48">
            奧丁丁市集APP是由於2021年5月台灣COVID-19疫情升溫而催產出來的，將不改既有使用者操作行為為目標，以網站的基本架構做Flutter雙平台的開發，開發時也特別規劃了APP獨有的短影片宣傳功能。
          </p>
        </div>
        <figure class="figure col-md-6 content-pl-48">
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/market-app.png"
            class="figure-img img-fluid border-radius-4 shadow-sm"
            alt="..."
          />
        </figure>
      </div>
    </section>
    <section class="more-project bg-grey-lightest pt-80">
      <div class="container">
        <h2 class="h2">更多設計專案</h2>
        <div class="row">
          <div class="col-md-6 content-pr-8 mt-24 mb-24">       
              <router-link class="" :to="{ name: 'ProjectWeb' }">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/official_website-hero.png"
                  class="figure-img img-fluid border-radius-4 shadow-sm"
                  alt="..."
                />
              </router-link>                  
              <div class="text-md-bold mt-24">  
                奧丁丁集團官網重構
              </div> 
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
          <div class="col-md-6 content-pl-8 mt-24 mb-24">
            <router-link class="" :to="{ name: 'ProjectPMS' }">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/pms-hero.png"
                class="figure-img img-fluid border-radius-4 shadow-sm"
                alt="..."
              />
            </router-link>                 
            <div class="text-md-bold mt-24">  
              旅宿管理系統功能規劃
            </div> 
            <div class="text-md">
                UX研究
                <span class="font-color-light"> | </span>
                UI設計 
                <span class="font-color-light"> | </span>
                B2B
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
  name: 'projectMarket',
  methods: {
    onElevatorClick (anchor) {
      const offsetTop = document.querySelector(anchor).offsetTop;
      console.log(offsetTop)

      window.scroll({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" src="../../styles/market.scss" scoped>
</style>
