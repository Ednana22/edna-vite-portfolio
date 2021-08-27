<template>
  <div id="page-elevator">
    <a v-for="i in 7" :key="`elevator-${i}`" @click.prevent="onElevatorClick(`#step-${i}`)">{{ i }}</a>
  </div>
  <main class="project-official-website">
    <section class="title container pt-120">
      <h1 class="mb-24">奧丁丁集團官網重構</h1>
      <p class="text-md mb-4">
        負責內容<span class="font-color-light"> | </span>UX研究、UI
        設計、重整網站架構
      </p>
      <p class="text-md mb-4">
        專案規模<span class="font-color-light"> | </span>跨十三部門，約20人
      </p>
      <p class="text-md mb-4">
        專案角色<span class="font-color-light"> | </span>UI/UX
        Designer、工程部門對外窗口
      </p>
    </section>
    <section class="banner container p-0">
      <figure class="figure col-md-12">
        <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/official_website-hero.png"
            class="figure-img img-fluid"
            alt="..."
          />
        <div class="bnanner"></div>
      </figure>
    </section>
    <section class="task container text-md">
      <h2 class="mb-16">集團介紹</h2>
      <p class="text-md mb-48">
        奧丁丁集團創立於2010年，是一間以區塊鏈技術為核心的科技公司，其產品涵蓋B2B商業服務、B2B管理後台、B2C電商平台、實體旅宿等共七大事業體。
      </p>
      <h2 class="mb-16">專案背景</h2>
      <p class="">
        官方網站是集團傳遞精神的重要管道，而使用者涵蓋了面試者、公司成員、合作商甚至投資者等，對公司來說是個不可輕忽的存在。在奧丁丁集團成立初期所架設的官網頁面中並無保留太多的談性空間，因此無法清楚的將集團近年來的資訊正確傳達給使用者，這也造成了使用者容易從網站中獲得過時且不完整的資訊問題，再加上老舊的視覺風格與集團近年來定義的VI調性不一、使用者對網站的負面評價等等，促成了此次集團官網改版。
      </p>
    </section>
    <div class="cover-photo container p-0">
      <figure class="figure">
        <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/solutions.png"
            class="figure-img img-fluid"
            alt="..."
          />
      </figure>      
    </div>
    <section class="1gold container">    
        <div class="project-title">
          <div class="title-group">
            <h4 class="mr-8">1</h4>
            <div class="">
              <h3 class="mb-6">目標</h3>
              <h2>網站改版希望達成的目的</h2>
            </div>
          </div>
        </div>   
      <ul>
        <div class="flex mb-8">
          <span class="mr-8">‣</span>
          <li>
            重構官網，使其成為同業中的亮點
          </li>
        </div>
        <div class="flex mb-8">
          <span class="mr-8">‣</span>
          <li>
            跨部門進行集團旗下七個事業體的資訊整合
          </li>
        </div>
        <div class="flex mb-8">
          <span class="mr-8">‣</span>
          <li>
            從集團VI延伸，為網站定義新風格
          </li>
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
                <h3 class="mb-6">理解任務</h3>
                <h2>釐清需求來源及現有問題</h2>
              </div>
            </div>
          </div>
          <p class="text-md">
            新官網代表的是整個奧丁丁集團，再加此需求原自於CEO，因此在執行此任務時團隊更加的謹慎。在此次專案中我同時扮演了UIUX設計師及工程部門對外窗口。而我們從訪談公司同事以及身邊親友中獲得使用者對舊官網的負面反饋，並計畫在新官網規劃階段一併排除。
          </p>
        </div>
        <div class="col-md-6 content-pl-48">
          <div class="user-talk text-align-center flex-center flex-end">
            <div class="talk-dialog mb-24 mr-16 ">
              我們公司的官網被競業嘲笑
            </div>
            <div class="memoji text-align-center">
              <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/CEO.png"
                  class="figure-img img-fluid"
                  alt="..."
                  width="60px "
                />
              <p class="text-sm color_grey-light">同事A</p>
            </div>
          </div>
          <div class="user-talk text-align-left flex-center flex-end">
            <div class="talk-dialog mb-24 mr-16" style="width:300px">
              別人問我在哪工作，我都不好意思丟官網，只好丟104給他們看
            </div>
            <div class="memoji text-align-center">
              <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/co-workerA.png"
                  class="figure-img img-fluid"
                  alt="..."
                  width="60px"
                />
              <p class="text-sm color_grey-light">同事B</p>
            </div>
          </div>
          <div class="user-talk text-align-left flex-center flex-end">
            <div class="talk-dialog mb-24 mr-16 ">
              網頁架構彈性小，要擴增資訊會有難度
            </div>
            <div class="memoji text-align-center">
              <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/co-workerB.png"
                  class="figure-img img-fluid"
                  alt="..."
                  width="60px "
                />
              <p class="text-sm color_grey-light">同事C</p>
            </div>
          </div>
          <div class="user-talk text-align-left flex-center flex-start">
            <div class="memoji text-align-center">
              <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/co-workerC.png"
                  class="figure-img img-fluid"
                  alt="..."
                  width="60px "
                />
              <p class="text-sm color_grey-light">同事D</p>
            </div>
            <div class="talk-dialog mb-24 ml-16" style="width:300px">
              採訪我們的媒體在官網上常常找不到需要的資訊有時還會寫錯
            </div>
          </div>
          <div class="user-talk text-align-left flex-center flex-start">
            <div class="memoji text-align-center">
              <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/userA.png"
                  class="figure-img img-fluid"
                  alt="..."
                  width="60px "
                />
              <p class="text-sm color_grey-light">使用者A</p>
            </div>
            <div class="talk-dialog mb-24 ml-16" style="width:300px">
              媒體報導時間軸有十年！怎麼都滑不完！
            </div>
          </div>
          <div class="user-talk text-align-left flex-center flex-end">
            <div class="talk-dialog mb-24 mr-16 ">
              所以你們公司是在做什麼的啊？
            </div>
            <div class="memoji text-align-center">
              <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/userB.png"
                  class="figure-img img-fluid"
                  alt="..."
                  width="60px "
                />
              <p class="text-sm color_grey-light">使用者B</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="3define container text-md">
      <div class="row content mt-16 mb-16 ">
        <div class="col-md-6 content-pr-48 mb-48">
          <div class="project-title">
            <div class="title-group">
              <h4 class="mr-8">3</h4>
              <div class="">
                <h3 class="mb-8">定義</h3>
                <h2>分析目前問題</h2>
              </div>
            </div>
          </div>
          <ul class="text-md">
            <div class="flex mb-8">
              <span class="mr-8">•</span>
              <li>
                <span class="text-md-bold">各事業體介紹不清</span> -
                各事業體介紹除了一小段文字敘述外，其餘都是外導連結，這除了會打斷使用者的操作也無法對內容深入瞭解。
              </li>
            </div>
            <div class="flex mb-8">
              <span class="mr-8">•</span>
              <li>
                <span class="text-md-bold">不良介面設計</span> -
                網站中有元素在滑動時會固定在畫面上方，擋住內容的情形，在媒體報導頁更有一長串長達十年的時間軸虛滾動，導致使用者難以輕鬆瀏覽頁面。
              </li>
            </div>
            <div class="flex mb-8">
              <span class="mr-8">•</span>
              <li>
                <span class="text-md-bold">網站架構卻乏維護</span>-
                因網站架構老舊且無後台可維護，因此無法頻繁的更新內容，導致使用者獲得的資訊錯誤或已過時。
              </li>
            </div>
            <div class="flex mb-8">
              <span class="mr-8">•</span>
              <li>
                <span class="text-md-bold">卻乏一致性的設計規劃</span>-
                頁面視覺過於凌亂，且與近年來集團 規劃的VI風格相差甚遠，導致品牌風格難以塑造。
              </li>
            </div>
          </ul>
        </div>
        <div class="col-md-6 content-pl-48">
          <figure class="figure">
            <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/%E8%88%8A%E5%AE%98%E7%B6%B2.png"
                class="figure-img img-fluid border-radius-4 shadow"
                alt="..."
              />
          </figure>
        </div>
      </div>
    </section>
    <section class="4brainstorming container text-md mb-60">
     <div class="row content mt-16 mb-16">
        <div class="col-md-6 content-pr-48 mb-48">
          <div class="project-title">
            <div class="title-group">
              <h4 class="mr-8">4</h4>
              <div class="">
                <h3 class="mb-8">思考</h3>
                <h2>這是些酷炫的想法</h2>
              </div>
            </div>
          </div>
          <p class="text-md">
            在發想網站主視覺及頁面元素時緊扣著網站想傳達給使用者的三個核心要點「科技產業、領域專業、產品多元性」。一眼就能呈現給使用者產品多元性是我認為這次設計最大的考驗。
          </p>
        </div>
            <div class="col-md-6 content-pl-48 flex-center contnet-pl-48 through-line">
              <span class="border-circle text-md line-height-2 mr-24">科技</span>
              <span class="border-circle text-md line-height-2 mr-24">專業</span>
              <span class="border-circle text-md line-height-2 mr-24">多元</span>
            </div>
      </div>      
    </section>
    <section class="5design-procress bg-grey-darkest text-md adjust-pt-dark-bg">
      <div class="container font-color-lighter">
        <div class="content mt-16 mb-16">
          <div class="project-title">
            <div class="title-group col">
              <h4 class="mr-8">5</h4>
              <div class="">
                <h3 class="mb-8">設計過程</h3>
                <h2>越早討論越早<span class="line-through">失敗</span>順利</h2>
              </div>
            </div>
          </div>
          <div class="ia content mb-80">
            <p class="text-md-bold row mb-16">I. 資訊架構</p>
            <div class="row">
              <div class="col-md-6 content-pr-48 mb-48">
                <p class="text-md">
                確認資訊架構後會與工程團隊報告改版規模，由於這次專案的時辰較緊迫，團隊決定分階段執行，與人資部門達成共識後決定將迫切性相對低的「企業徵才」放入改版的第二階段。
                </p>
              </div>
              <div class="col-md-6 content-pl-48">
              <figure class="figure">
                <img
                    src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/ia.png"
                    class="figure-img img-fluid"
                    alt="..."/>
              </figure>
              </div>
            </div>
          </div>          
          <div class="wireframe  content mb-80">
            <p class="text-md-bold row mb-16">I. Wireframe</p>
            <div class="row">
              <div class="col-md-6 content-pr-48 mb-48">
                <p class="text-md">
                  規劃出Wireframe並與需求端確認資訊呈現後，就可以上傳至雲端請各部門協助文案內容。因為牽涉到各部門的時程安排以及英日翻譯，所以Wireframe在設計端越早完成對於整個專案的排程也會更順利，使用的協作軟體是google
                  sheet 。
                </p>
              </div>
              <div class="col-md-6 content-pl-48">
                <figure class="figure">
                  <img
                      src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/wireframe.png"
                      class="figure-img img-fluid border-radius-4"
                      alt="..."
                    />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div class="element row content mb-80">
          <div class="col-md-6 content-pr-48  mb-48">
            <p class="text-md-bold mb-16">II. 搜集現有元素延伸</p>
            <p class="text-md">
              由集團現有元素中以貫穿集團及七個事業體的貓頭鷹及VI科技藍光譜為發想，由藍色光譜可延伸出的科技感幫助我進一步探索官網的視覺意象。
            </p>
          </div>
          <div class="elements flex-center space-around mb-32">
            <div class="row">
              <div class="col-md-6 flex">
                <div class="col">
                  <figure class="figure ">
                    <img
                        src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/elenment1.png"
                        class="figure-img img-fluid"
                        alt="..."
                      />
                  </figure>
                </div>
                <div class="col">
                  <figure class="figure ">
                    <img
                        src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/elenment2.png"
                        class="figure-img img-fluid"
                        alt="..."
                      />
                  </figure>
                </div>
              </div>
              <div class="col-md-6 flex">
                <div class="col">
                  <figure class="figure ">
                    <img src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/elenment3.png" class="figure-img img-fluid"
                              alt="..."/>
                  </figure>
                </div>
                <div class="col">
                  <figure class=" figure ">
                    <img src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/element4.png"
                        class="figure-img img-fluid" alt="..."/>
                  </figure>
                </div>
              </div>
            </div>
          </div>
    
    
        </div>
        <div class="design content mb-80">
          <div class="thinking row mb-60">
            <div class="col-md-6 content-pr-48 bg-grey-darkest mb-48 ">
              <p class="text-md-bold mb-16">III. 發想網站視覺</p>
              <p class="text-md">
                在發想網站主視覺及頁面元素時緊扣著網站想傳達給使用者的三個核心要點「科技產業、領域專業、產品多元性」。一眼就能呈現給使用者產品多元性是我認為這次設計最大的考驗。
              </p>
            </div>
          </div>
          <div class="visual col-lg-12">
            <div class="color mb-48">
              <p class="text-md-bold mb-32"><span class="mr-8">•</span>以色彩發想</p>
              <div class="color mb-80">
                <div class="space-around">
                  <div class="col-md-4">
                    <figure class="figure">
                      <img src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/color-code.png"
                        class="figure-img img-fluid"
                        alt="..."  />
                    </figure>
                  </div>
                  <div class="col-md-4">
                    <figure class="figure">
                      <img src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/color-code2.png"
                        class="figure-img img-fluid"
                        alt="..."/>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div class="various mb-80">
              <p class="text-md-bold mb-32"><span class="mr-8">•</span>以產品多元性發想</p>
              <div class="plantes flex-center  space-around mb-56">
                <div class="col-xs-3">
                  <figure class="figure ">
                    <img
                      src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/planet-market.png"
                      class="figure-img img-fluid"
                      alt="..."
                      width="128"
                      height="130"
                    />
                  </figure>
                </div>
                <div class="col-xs-3">
                  <figure class="figure ">
                    <img src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/planet-OwlStay.png"
                            class="figure-img img-fluid"
                            alt="..."
                            width="200"
                            height="180"/>
                  </figure>
                </div>
                <div class="col-xs-3">
                  <figure class="figure ">
                    <img src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/planet-OwlJourney.png"
                            class="figure-img img-fluid"
                            alt="..."
                            width="120"
                            height="120"/>
                  </figure>
                </div>
                <div class="col-xs-3">
                  <figure class=" figure ">
                    <img src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/planet-OwlPay.png"
                      class="figure-img img-fluid" alt="..." width="160" height="140" />
                  </figure>
                </div>
              </div>
              <div class="owl col-lg-6">
                <figure class="figure">
                  <img
                      src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/owl.png"
                      class="figure-img img-fluid"
                      alt="..." width="400px"
                    />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div class="iterate row content mb-80">
          <div class="col-md-6 content-pr-48 mb-48">
            <p class="text-md-bold  mb-16">VI. 設計迭代</p>
            <p class="text-md">
              設計迭代沒有絕對的「完美」，以合適的設計傳達集團信念給使用者就算達到迭代目的。與集團高層討論過後認為暗色宇宙系列雖然搶眼也吸睛，但缺少科技產業的簡潔、專業感，因此使用一個迭代將來修正上述問題。
            </p>
          </div>
          <div class="row">
            <div class="col-sm-6 content-pr-8 mb-16">
              <figure class="figure">
                <img src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/homepage-dark.png" class="figure-img img-fluid border-radius-4" alt="..."/>
              </figure>
            </div>
            <div class="col-sm-6 content-pl-8">
              <figure class="figure">
                <img src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/homepage-light.png" class="figure-img img-fluid border-radius-4" alt="..."/>
              </figure>
            </div>
          </div>
        </div>
        <div class="prototype content mb-80">
          <p class="text-md-bold row mb-16">V. Prototype 交付予工程師</p>
          <div class="row">
            <div class="col-md-6 content-pr-48 mb-48">
              <p class="text-md">
                此專案我使用Adobe
                Xd來模擬視差滾動以及滾動連帶的過場動畫，prototype的視覺化能幫助設計師與工程師討論時可以快速對焦，若實作時辰上有困難也可以立刻討論作出相對應調整。
              </p>
            </div>
            <div class="col-md-6 content-pl-48">
              <figure class="figure pad_border ">
                <img src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/website-prototype2.gif"
              class="figure-img img-fluid border-radius-4"
              alt="..." />
              </figure>
            </div>
          </div>
        </div>
        <div class="debug content">
          <div class="row">
            <div class="col-md-6 content-pr-48 mb-48">
              <p class="text-md-bold mb-16">VI. 協助工程師抓除錯</p>
              <p class="text-md">
                在最後上線前須幫助工程師一同除錯，多語系的呈現、各種裝置及雙平台手機測試、社群平台開啟呈現出來的效果等等，都是正式上線前需一一確認的。
              </p>
            </div>
            <div class="col-md-6 content-pl-48 ">
              <figure class="figure">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/RDs.png"
                  class="figure-img img-fluid border-radius-4"
                  alt="..."
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="6result bg-grey-darkest text-md adjust-pb-dark-bg">
      <div class="container font-color-lighter">
        <div class="row">
          <div class="col-md-6 content-pr-48">
            <div class="project-title">
              <div class="title-group">
                <h4 class="mr-8">6</h4>
                <div class="">
                  <h3 class="mb-8">完成</h3>
                  <h2>成品頁面</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-9 mb-80">
            <p class="text-md-bold mb-16">首頁主視覺</p>
            <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/mockup-banner.gif"
                class="figure-img img-fluid border-radius-16 shadow"
                alt="..."
              />
            <p class="text-md mt-16 mb-16">
              將集團產品多元性以及貓頭鷹展翅的理念傳達給視覺設計部門後，由視覺設計師製作出的svg動畫動態效果非常吸睛。
            </p> 
          </div>
          <div class="col-md-9 ml-auto mb-80">
            <p class="text-md-bold mb-16">產品輪播簡介</p>
            <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/mockup-carousel.gif"
                class="figure-img img-fluid border-radius-16 shadow"
                alt="..."
              />
            <p class="text-md mt-16 mb-16">
              需一眼讓使用者理解集團旗下眾多服務，並選出最具代表性的背景圖呈現服務類別。
            </p>             
          </div>
          <div class="col-md-9">
            <p class="text-md-bold mb-16">動態據點呈現</p>
            <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/mockup-global.gif"
                class="figure-img img-fluid border-radius-16 shadow"
                alt="..."
              />
            <p class="text-md mt-16 mb-16">
              UIUX出設計圖後由視覺設計師協助完成據點動畫，非常感謝同事的協助讓動畫得以完美呈現。
            </p>               
          </div>
        </div>
      </div>
    
    </section>
    <section class="7takeaway container text-md mt-60 mb-60">
      <div class="col-md-6 content-pr-48">
        <div class="row">
          <div class="project-title">
            <div class="title-group">
              <h4 class="mr-8">7</h4>
              <div class="">
                <h3 class="mb-8">收穫及反思</h3>
                <h2>可惡早知道</h2>
              </div>
            </div>
          </div>
          <p class="text-md ">
            這次的官網改版對集團來說是非常成功的專案，符合企業風格的網站以及清晰的產品介紹是獲得最多好評的。然而總是有可以做到更好地方，例如將舊頁面資料更全面的歸檔整理；多部門討論時可採期限限制的方法來避免來回的資訊修改等。
          </p>
        </div>
      </div>
    </section>
    <section class="more-project bg-grey-lightest pt-80">
      <div class="container">
        <h2 class="">更多設計專案</h2>
        <div class="row">
          <div class="col-md-6 content-pr-8 mt-24 mb-24">
            <div class="card-border-grey border-radius-4 ">
              <router-link class="" :to="{ name: 'ProjectMarket' }">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/market-hero.png"
                  class="figure-img img-fluid border-radius-4 shadow-sm"
                  alt="..."
                />
              </router-link>   
              <div class="text-md-bold mt-24">  
                奧丁丁市集平台改版
              </div> 
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
    name: 'projectWeb'
}
</script>

<style lang="scss" src="../../styles/official-website.scss" scoped>
</style>
