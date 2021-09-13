<template>
  <PageElevator :anchors="anchors" />
  <main class="project-market">
    <section class="title container">
      <h1 class="mb-24">奧丁丁市集改版</h1>
      <p class="text-md line-height-sm mb-8">
        負責內容<span class="font-color-light"> | </span
        >品牌再造、網站重構、APP規劃、UX研究、UI設計、使用者測試
      </p>
      <p class="text-md line-height-sm mb-8">
        專案規模<span class="font-color-light"> | </span>跨五部門，約15人
      </p>
      <p class="text-md line-height-sm">
        專案角色<span class="font-color-light"> | </span>UI/UX 設計師
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
    <section id="overall" class="overall container text-md">
      <div class="background mb-48">
        <h2 class="mb-16">專案背景</h2>
        <p class="">
          奧丁丁市集是一個專注於推廣在地商家與台灣小農的電商平台，涵蓋上千項嚴選商品累計合作逾兩千名小農及中小型優質商家。 <br />
          然而<span class="text-md-bold">網站不支援響應式、頁面模式不符合使用者的瀏覽習慣、低效的瀏覽體驗也直接影響了高跳出率與低轉化率。</span><br/>
          公司內部業務經理則反映，當展示網站給合作廠商時<span class="text-md-bold">經常被質疑公司網站的可用性、安全性</span>，這也導致內部人員對產品提不起信心。
        </p>
      </div>
      <div class="task mb-48">
        <h2 class="mb-16">專案挑戰與決策</h2>
          <ul class="text-md">
            <div class="flex mb-24">
              <span class="mr-8">•</span>
              <li>
                <span class="text-md-bold">調整結構過於複雜</span> -
                此次調整規模除了使用者介面的流程與前端框架更動之外也牽扯到後端的資料架構，有牽一髮而動全身的疑慮。規劃初期我先以資訊架構與工程部門討論改版規模，最後決定以頁面迭代的方式進行。
              </li>
              
            </div>
            <div class="flex">
              <span class="mr-8">•</span>
              <li>
                <span class="text-md-bold">設計頁面時與CEO意見相左</span> -
                CEO指定首頁不要BANNER！經過細問才得知原來CEO認為轉換率差的巨大輪播Banner浪費了頁面最精華的部分，我也從頁面數據以及熱點分布圖驗證了此論點。
                在嘗試多種版面設計後由四格分割的版型獲得組員信賴，也跨部門的達成不要給使用者過多促銷資訊的共識。
              </li>
            </div>
          </ul> 
      </div>      
      <div class="highlight">
        <h2 class="mb-16">成果搶先看 👀</h2>
        <div class="highlight row">
          <div class="col-sm-4 new_user mb-24">
            <p class="text-xxl gradient-font">
              230<span class="text-l">%</span>
            </p>
            <p class="text-md-bold">新使用者增加</p>
          </div>
          <div class="col-sm-4 viewing_time mb-24">
            <p class="text-xxl gradient-font">
              81<span class="text-l">%</span>
            </p>
            <p class="text-md-bold">平均停留時間增加</p>
          </div>
          <div class="col-sm-4 bounce_rate">
            <p class="text-xxl gradient-font">
              -24<span class="text-l">%</span> 
            </p>
            <p class="text-md-bold">跳出率明顯優化</p>
          </div>
        </div>
      </div>      
    </section>
    <section class="cover-photo container p-0">
      <figure class="figure">
        <img
          src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/%E6%9E%9C%E8%BE%B2.png"
          class="figure-img img-fluid border-radius-4"
          alt="..."
        />
      </figure>
    </section>
    <section id="step-1" class="1gold container text-md">
      <div class="project-title">
        <div class="title-group">
          <h4 class="mr-8">1</h4>
          <div class="">
            <h3 class="mb-6">目標</h3>
            <h2>我們要解決的問題</h2>
          </div>
        </div>
      </div>
      <ul>
        <div class="flex mb-8">
          <span class="mr-8">‣</span>
          <li class="text-md">
            品牌再造
            ( 進行跨部門合作：公關部、市集部、品牌形象部、視覺設計部、工程部 )
          </li>
        </div>
        <div class="flex mb-8">
          <span class="mr-8">‣</span>
          <li class="text-md">
            重構一個響應式的電子商務網站以符合使用者瀏覽習性，重構同時一定要考量現有用戶的使用者習慣
          </li>
        </div>
        <div class="flex mb-8">
          <span class="mr-8">‣</span>
          <li class="text-md">以電商平台幫助在地優質小農推廣用心製造的產品</li>
        </div>
      </ul>
    </section>
    <section id="step-2" class="2understand container text-md">
      <div class="project-title">
        <div class="title-group">
          <h4 class="mr-8">2</h4>
          <div class="">
            <h3 class="mb-6">理解</h3>
            <h2>瞭解我們的使用者</h2>
          </div>
        </div>
      </div>
      <div class="user-talk row content mb-80">
        <div class="col-md-5 content-pr-48 mb-48">
          <h5 class="mb-16">I. 使用者訪談</h5>
          <p>
            我們訪談不同層級的會員以及利害關係人，這使我能夠瞭解不同使用者在<span class="text-md-bold">使用網站時的場景、所遇到的痛點以及對產品的期望</span>，也讓我對使用者們有更深一層的認識。
          </p>
        </div>
        <div class="col-md-7 content-pl-48">
          <div class="talking-bobble mb-16">
            <div class="user-talk text-sm-bold mb-8">
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
                <p class="text-sm">Cindy Wu</p>
                <p class="text-sm color_grey-light">一般會員</p>
              </div>
            </div>
          </div>
          <div class="talking-bobble mb-16">
            <div class="user-talk text-sm-bold mb-8">
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
                <p class="text-sm">Vincent Chang</p>
                <p class="text-sm color_grey-light">鑽石會員</p>
              </div>
            </div>
          </div>
          <div class="talking-bobble mb-16">
            <div class="user-talk text-sm-bold mb-8">
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
                <p class="text-sm">Lily Lin</p>
                <p class="text-sm color_grey-light">一般會員</p>
              </div>
            </div>
          </div>
          <div class="talking-bobble">
            <div class="user-talk text-sm-bold mb-8">
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
                <p class="text-sm">Joyce Chen</p>
                <p class="text-sm color_grey-light">業務經理</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="user-talk row content">
        <div class="col-md-5 content-pr-48 mb-48">
          <h5 class="mb-16">II. 使用者地圖模擬</h5>
          <p>
            根據使用者訪談、研究結果以及網站用戶數據分析，我們分析使用者的行為以及相似性，並創建出與使用者輪廓相仿的人物誌。此角色幫助團隊在規劃產品時有<span class="text-md-bold">更明確的方向也對使用者產生了同理心，</span>團隊更重視使用者所遇到的問題。
          </p>
        </div>
        <div class="col-md-7 content-pl-48">
          <figure class="figure">
            <img
              src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/user-journey_W.png"
              class="figure-img img-fluid border-radius-4 shadow-sm"
              alt="..."
            />
          </figure>
        </div>
      </div>
    </section>
    <section id="step-3" class="3define container text-md">
      <div class="row content">
        <div class="col-md-5 content-pr-48 mb-48">
          <div class="project-title">
            <div class="title-group">
              <h4 class="mr-8">3</h4>
              <div class="">
                <h3 class="mb-6">定義</h3>
                <h2>分析現行介面的問題</h2>
              </div>
            </div>
          </div>
          <ul class="text-md">
            <div class="flex mb-24">
              <span class="mr-8">•</span>
              <li>
                <span class="text-md-bold">網站只有手機版</span> -
                依使用者數據分析得知有80%的使用者瀏覽裝置都是手機，因此最初的設計由手機版開始規劃是正確的方向，但在網頁上只有手機版的呈現方式卻會造成不良的使用者體驗。
              </li>
            </div>
            <div class="flex mb-24">
              <span class="mr-8">•</span>
              <li>
                <span class="text-md-bold">資訊過於複雜</span> -
                消費者難以在第一時間找到商品資訊，過小的促銷文宣無法達到吸引目光的效果。
              </li>
            </div>
            <div class="flex">
              <span class="mr-8">•</span>
              <li>
                <span class="text-md-bold">缺乏品牌精神</span> -
                我們想給消費者最天然、友善且能幫助小農的優質選物，而網站設計與高品質商品難以呼應下很難將品牌理念傳達給消費者。
              </li>
            </div>
          </ul> 
        </div>
        <div class="col-md-7 flex-center content-pl-48">
          <figure class="figure">
            <img
              src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/old-version.png"
              class="figure-img img-fluid border-radius-4"
              alt="..."
            />
          </figure>
        </div>
      </div>
    </section>
    <section id="step-4" class="4brainstorming container text-md mb-60">
      <div class="row content">
        <div class="col-md-5 content-pr-48 mb-48">
          <div class="project-title">
            <div class="title-group">
              <h4 class="mr-8">4</h4>
              <div class="">
                <h3 class="mb-6">思考</h3>
                <h2>跨部門一同規劃出品牌風格</h2>
              </div>
            </div>
          </div>
          <p class="text-md">
            在腦力激盪會議中我們<span class="text-md-bold">由品牌的初衷「以不變的心，做不變的事」來延伸品牌的風格調性，</span>其中也包含了商品照期望呈現風格，營造安心、在地、友善的質感選物電商。
          </p>
        </div>
        <div class="col-md-7 flex-center content-pl-48">
          <figure class="figure">
            <img
              src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/brainstorming.png"
              class="figure-img img-fluid border-radius-4 shadow-sm"
              alt="..."
            />
          </figure>
        </div>
      </div>
    </section>
    <section
      id="step-5"
      class="5design-procress bg-grey-darkest text-md adjust-pt-dark-bg">
      <div class="container font-color-lighter">
        <div class="content">
          <div class="project-title">
            <div class="title-group col">
              <h4 class="mr-8">5</h4>
              <div class="">
                <h3 class="mb-8">設計過程</h3>
                <h2>重構優化及平凡討論</h2>
              </div>
            </div>
          </div>
          <div class="1ia content mb-80">
            <h5 class="col-md-5 mb-16">
              I. 資訊架構
            </h5>
            <div class="row">
              <p class="text-md col-md-5 content-pr-48 mb-48">
                在進行改版前我會先與工程團隊對焦使用者、業務端面臨的問題，由於需調整的網站結構過於複雜<span class="text-md-bold">最後我們達成共識「以頁面迭代的方式運行改版」</span>，以舊網站為架構去翻新舊頁面並補強目前缺少的頁面。資訊架構圖中有亮色外框為新規劃頁面，其餘皆為需要翻新的舊頁面，將各頁面標示出代號在製作Wireframe時可方便與工程師討論。
              </p>
              <figure class="figure col-md-7 content-pl-48">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/ia.png"
                  class="figure-img img-fluid"
                  alt="..."
                />
              </figure>
            </div>
          </div>
          <div class="2wireframe content mb-80">
            <h5 class="col-md-5 mb-16">II. Wireframe</h5>
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
                什麼！哪個電商不用輪播Banner？<br />這不就是使用者最習慣的一種版型嗎？
              </div>
            </div>
            <div class="row">
              <p class="col-md-5 text-md content-pr-48 mb-48">
                上述是我在做Ｗireframe時遇到的情境，<span class="text-md-bold">CEO提出了與以往我們習慣的電商完全背離的需求</span>，經過討論才得知原來CEO並不是反對Banner而是認為巨大的輪播版位浪費了頁面最精華的部分且使用者大多會忽略順序在後方的Banner，我也從頁面數據以及熱點分布圖驗證了此論點。<span class="text-md-bold">
                <br/>在嘗試了幾種非輪播版型的設計後內部一致認同現在採用四格切割版型</span>，也跨部門的達成不要給予使用者過多促銷資訊的共識。
              </p>
              <div class="col-md-7 content-pl-48">
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
            <h5 class="col-md-5 mb-16">III. UI Kit</h5>
            <div class="row">
              <p class="text-md col-md-5 content-pr-48 mb-48">
                經由腦力激盪後組員一同定義品牌再造的風格，我以之延伸並定義了介面元件來達產品是覺的一致性。
                <br/>💡：一定要將最終確定的UI Kit元件及狀態分享給工程師，這可以幫助工程端在製作Component時方便很多，也可減少來回修改的次數。
              </p>
              <figure class="figure col-md-7 content-pl-48">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/UI+kit.png"
                  class="figure-img img-fluid"
                  alt="..."
                />
              </figure>
            </div>
          </div>
          <div class="4prototpye content mb-80">
            <h5 class="mb-16">IV. Prototype</h5>
            <div class="row">
              <p class="text-md col-md-5 content-pr-48 mb-48">
                邀請公司內部的市集使用者進行新版面任務測試，根據螢幕錄影及熱點分析再進行介面優化，<span class="text-md-bold">聆聽反饋確保舊用戶在新介面中獲得高品質的使用者體驗。</span>              </p>
              <figure class="figure col-md-7 content-pl-48">
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
    <section
      id="step-6"
      class="6result bg-grey-darkest text-md adjust-pb-dark-bg"
    >
      <div class="container font-color-lighter">
        <div class="content">
          <div class="project-title col">
            <div class="title-group">
              <h4 class="mr-8">6</h4>
              <div class="">
                <h3 class="mb-8">成果</h3>
                <h2>頁面展示</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <p class="text-md col-md-5 content-pr-48 mb-48">
              此次改版計畫是以頁面分階段迭代方式進行，<span class="text-md-bold">由數據顯示使用者接觸最多的首頁以及能將網站架構補齊的分類頁為第一階段上線</span>。
            </p>
            <div class="highlight col-md-7 content-pl-48 mb-80">
              <div class="row">
                <div class="col-sm-6 new_user mb-48">
                  <p class="text-xl">230<span class="text-l">%</span></p>
                  <p class="text-md">新使用者增加</p>
                </div>
                <div class="col-sm-6 viewing_time mb-48">
                  <p class="text-xl">81<span class="text-l">%</span></p>
                  <p class="text-md">工作平均長度增加</p>
                </div>
                <div class="col bounce_rate">
                  <p class="text-xl">-24<span class="text-l">%</span></p>
                  <p class="text-md">跳出率明顯優化</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-9 mb-80">
          <h5 class="mb-16">首頁瀏覽</h5>
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/mockup-homepage.gif"
            class="figure-img img-fluid border-radius-16 shadow mb-16"
            alt="..."
          />
          <p class="text-md mb-16">
            參考網頁數據以使用者的喜好做網頁內容的排序
          </p>
        </div>
        <div class="col-md-9 mb-80 ml-auto">
          <h5 class="mb-16">Navbar產品分類</h5>
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/mockup-homepage.png"
            class="figure-img img-fluid border-radius-16 shadow mb-16"
            alt="..."
          />
          <p class="text-md mb-16">
            依照使用者最感興趣的分類排序至前並將各分類細項歸納，讓使用者能清楚找到需購買的商品
          </p>
        </div>
        <div class="col-md-9 mb-80">
          <h5 class="mb-16">分類頁瀏覽</h5>
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/mockup-category.gif"
            class="figure-img img-fluid border-radius-16 shadow mb-16"
            alt="..."
          />
          <p class="text-md mb-16">
            左側分類標觸控範圍有特別加大並加上hover效果，提供使用者更安心的操作
          </p>
        </div>
        <div class="col-md-9 ml-auto">
          <h5 class="mb-16">404頁面</h5>
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/mockup-404.png"
            class="figure-img img-fluid border-radius-16 shadow mb-16"
            alt="..."
          />
          <p class="text-md mb-16">
            將404規劃為不只是導回首頁的頁面，當使用者找不到商品除了知道頁面不存在很沮喪外，還是可以去逛逛其他相同屬性的商品或是探索分類
          </p>
        </div>
      </div>
    </section>
    <section id="step-7" class="7iterate container text-md mt-60">
      <div class="row content">
        <div class="col-md-5 content-pr-48">
          <div class="project-title col">
            <div class="title-group">
              <h4 class="mr-8">7</h4>
              <div class="">
                <h3 class="mb-8">迭代</h3>
                <h2>由頁面數據進行優化</h2>
              </div>
            </div>
          </div>
          <p class="text-md mb-48">
            由蹤數據得知<span class="text-md-bold">「限時活動」Banner點閱率有顯著增加</span>，也從熱點分析圖證實了堅持保留使用者習慣的分類列是正確的設計。
            <br/>其中我們也<span class="text-md-bold">秉持著使用者為中心的原則將「編輯嚴選、最新上架」調整至頁面上方，</span>再觀察數據後發現使用者的瀏覽動線更為順暢，且原本被忽略的專區也連帶提升了點擊率。
          </p>
        </div>
        <figure class="figure col-md-7 content-pl-48 flex-center">
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/heat-map.png"
            class="figure-img img-fluid"
            alt="..."
          />
        </figure>
      </div>
    </section>
    <section id="step-8" class="8app container text-md">
      <div class="row content">
        <div class="col-md-5 content-pr-48">
          <div class="project-title col">
            <div class="title-group">
              <h4 class="mr-8">8</h4>
              <div class="">
                <h3 class="mb-6">APP開發</h3>
                <h2>2021年疫情下的產品</h2>
              </div>
            </div>
          </div>
          <p class="text-md mb-48">
            奧丁丁市集APP是由於2021年5月台灣COVID-19疫情爆發導致生鮮網購銷量暴增而催產出來的產品，奉命以最快高效率做開發<span class="text-md-bold">將不改變既有使用者操作行為為目標，</span>
            除了讓原有用戶輕鬆上手外也能增添黏著度，其中也規劃了APP獨有的短影片宣傳功能。
          </p>
        </div>
        <figure class="figure col-md-7 content-pl-48">
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/market-app.png"
            class="figure-img img-fluid border-radius-4 shadow-sm"
            alt="..."
          />
        </figure>
      </div>
    </section>
    <section id="step-9" class="9takeaway container text-md mb-60">
      <div class="content">
        <div class="project-title">
          <div class="title-group">
            <h4 class="mr-8">9</h4>
            <div class="">
              <h3 class="mb-6">收穫及反思</h3>
              <h2>收到的反饋都是優化的機會</h2>
            </div>
          </div>
        </div>
        <div class="text-md col-md-5 content-pr-48">
          <ul>
            <div class="flex mb-24">
              <span class="mr-8">•</span>
              <li>
                <span class="text-md-bold">挑戰突破框架 - </span>
                當時規劃Banner版面時遇到的難題，現在看來這個任務不只讓我跳脫了慣性思考，甚至學會運用更多資源來幫助自己梳理設計脈絡，成果也令使用者及組員非常滿意。
              </li>
            </div>
            <div class="flex">
              <span class="mr-8">•</span>
              <li>
                <span class="text-md-bold">當自己是目標受眾時最有感 - </span>
                奧丁丁市集是我自己非常喜歡平時也會使用的產品，從這次的品牌再造所營造的品牌調性到產品實作，最我來說都是非常寶貴的經驗，自己除了是設計者以外也是使用者，在角色切換時特別有感。看到整體業績提升以及真正有幫助到這塊土地上的農友時非常感動。
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
    <section class="more-project bg-blue-lightest pt-80">
      <div class="container">
        <h2>更多設計專案</h2>
        <div class="row">
          <div class="col-md-6 content-pr-8 mt-24 mb-24">
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
          <div class="col-md-6 content-pl-8 mt-24 mb-24">
            <router-link class="" :to="{ name: 'ProjectPMS' }">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/pms-hero.png"
                class="figure-img img-fluid border-radius-4 shadow-sm"
                alt="..."
              />
            </router-link>
            <div class="text-md-bold mt-24">旅宿管理系統規劃</div>
            <div class="text-md">
              UX研究
              <span class="font-color-light"> | </span>
              UI設計
              <span class="font-color-light"> | </span>
              B2B
              <span class="font-color-light"> | </span>
              Saas                     
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
import PageElevator from '../../components/PageElevator.vue'

export default {
  name: "projectMarket",
  components: {
    PageElevator
  },
  data() {
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
          name: 'APP',
          id: '#step-8'
        },
        {
          name: '反思',
          id: '#step-9'
        }
      ]
    }
  }
};
</script>

<style lang="scss" src="../../styles/market.scss" scoped></style>
