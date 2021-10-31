<template>
  <div>
    <PageElevator :anchors="anchors" />
    <main class="project-official-website">
      <section class="title container">
        <h1 class="mb-24">{{ $t('common.owlting_website') }}</h1>
        <p class="text-md line-height-sm mb-8">
          {{ $t('common.project_includes') }}
          <span class="font-color-light"> | </span>
          {{ $t('common.refactor_website') }}
          .
          {{ $t('common.ux_research') }}
          .
          {{ $t('common.ui_design') }}
        </p>
        <p class="text-md line-height-sm mb-8">
          {{ $t('common.project_scale') }}
          <span class="font-color-light"> | </span>
          {{ $t('official_web_project.project_scale_answer') }}
        </p>
        <p class="text-md line-height-sm">
          {{ $t('common.my_role') }}
          <span class="font-color-light"> | </span>
          {{ $t('common.uiux_designer') }}
          .
          {{ $t('official_web_project.rd_project_owner') }}
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
      <section id="overall" class="overall container text-md">
        <div class="background mb-48">
          <h2 class="mb-16"> {{ $t('common.project_background') }}</h2>
          <p v-html="$t('official_web_project.project_background_answer')"></p>
        </div>
        <div class="task mb-48">
          <h2 class="mb-16">{{ $t('common.challenges') }}</h2>
            <ul class="text-md">
              <div class="flex">
                <span class="mr-8">•</span>
                <li>
                  <span class="text-md-bold">{{ $t('official_web_project.overview.challenges_title1') }}</span><br>
                  {{ $t('official_web_project.overview.challenges_answer1') }}
                </li>
              </div>
            </ul>
        </div>
        <div class="highlight">
          <h2 class="mb-16">
            {{ $t('official_web_project.overview.results') }}
          </h2>
          <div class="feedback row">
            <div class="col-lg-4 content-pr-8 mb-16">
              <div class="border-thinner border-radius-4 shadow-sm p-8 h-full">
                <div class="text-sm-bold flex flex-col h-full">
                  ⭐ ⭐ ⭐ ⭐ ⭐
                  <br />
                    {{ $t('official_web_project.overview.results_answer1') }}
                  <p class="text-sm mt-16">
                    {{ $t('official_web_project.overview.result_owner1') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 content-pr-8 mb-16">
              <div class="border-thinner border-radius-4 shadow-sm p-8">
                <div class="text-sm-bold flex flex-col h-full">
                  ⭐ ⭐ ⭐ ⭐ ⭐
                  <br />
                    {{ $t('official_web_project.overview.results_answer2') }}
                  <p class="text-sm mt-16">
                    {{ $t('official_web_project.overview.result_owner2') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 content-pr-8">
              <div class="border-thinner border-radius-4 shadow-sm p-8">
                <div class="text-sm-bold flex flex-col h-full">
                  ⭐ ⭐ ⭐ ⭐ ⭐
                  <br />
                    {{ $t('official_web_project.overview.results_answer3') }}
                <p class="text-sm mt-16">
                    {{ $t('official_web_project.overview.result_owner3') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="cover-photo container p-0">
        <figure class="figure">
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/solutions.png"
            class="figure-img img-fluid border-radius-4"
            alt="..."
          />
        </figure>
      </div>
      <section id="step-1" class="1gold container text-md">
        <div class="project-title">
          <div class="title-group">
            <h4 class="mr-8">1</h4>
            <div class="">
              <h3 class="mb-8">{{ $t('page_elevator.goal') }}</h3>
              <h2>{{ $t('official_web_project.goal.title') }}</h2>
            </div>
          </div>
        </div>
        <ul>
          <div class="flex mb-8">
            <span class="mr-8">‣</span>
            <li class="text-md">{{ $t('official_web_project.goal.goal1') }}</li>
          </div>
          <div class="flex mb-8">
            <span class="mr-8">‣</span>
            <li class="text-md">{{ $t('official_web_project.goal.goal2') }}</li>
          </div>
          <div class="flex">
            <span class="mr-8">‣</span>
            <li class="text-md">{{ $t('official_web_project.goal.goal3') }}</li>
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
              <h3 class="mb-8">{{ $t('page_elevator.empathize') }}</h3>
                  <h2>{{ $t('official_web_project.empathize.title') }}</h2>
                </div>
              </div>
            </div>
            <p class="text-md" v-html="$t('official_web_project.empathize.text')"></p>
          </div>
          <div class="col-md-7 content-pl-48">
            <div class="user-talk text-align-left flex-center flex-end">
              <div class="talk-dialog mb-24 mr-16" style="width: 300px">
                {{ $t('official_web_project.empathize.user_talk1') }}
              </div>
              <div class="memoji text-align-center">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/CEO.png"
                  class="figure-img img-fluid"
                  alt="..."
                  width="60"
                />
                <p class="text-sm color_grey-light">{{ $t('official_web_project.empathize.user1') }}</p>
              </div>
            </div>
            <div class="user-talk text-align-left flex-center flex-end">
              <div class="talk-dialog mb-24 mr-16" style="width: 300px">
                {{ $t('official_web_project.empathize.user_talk2') }}
              </div>
              <div class="memoji text-align-center">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/co-workerA.png"
                  class="figure-img img-fluid"
                  alt="..."
                  width="60"
                />
                <p class="text-sm color_grey-light">{{ $t('official_web_project.empathize.user2') }}</p>
              </div>
            </div>
            <div class="user-talk text-align-left flex-center flex-end">
              <div class="talk-dialog mb-24 mr-16" style="width: 300px">
                {{ $t('official_web_project.empathize.user_talk3') }}
              </div>
              <div class="memoji text-align-center">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/co-workerB.png"
                  class="figure-img img-fluid"
                  alt="..."
                  width="60"
                />
                <p class="text-sm color_grey-light">{{ $t('official_web_project.empathize.user3') }}</p>
              </div>
            </div>
            <div class="user-talk text-align-left flex-center flex-end">
              <div class="talk-dialog mb-24 mr-16" style="width: 300px">
                {{ $t('official_web_project.empathize.user_talk4') }}
              </div>
              <div class="memoji text-align-center">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/co-workerC.png"
                  class="figure-img img-fluid"
                  alt="..."
                  width="60"
                />
                <p class="text-sm color_grey-light">{{ $t('official_web_project.empathize.user4') }}</p>
              </div>
            </div>
            <div class="user-talk text-align-left flex-center flex-start">
              <div class="memoji text-align-center">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/userA.png"
                  class="figure-img img-fluid"
                  alt="..."
                  width="60"
                />
                <p class="text-sm color_grey-light">{{ $t('official_web_project.empathize.user5') }}</p>
              </div>
              <div class="talk-dialog mb-24 ml-16" style="width: 300px">
                {{ $t('official_web_project.empathize.user_talk5') }}
              </div>
            </div>
            <div class="user-talk text-align-left flex-center flex-start">
              <div class="memoji text-align-center flex-shrink">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/userB.png"
                  class="figure-img img-fluid"
                  alt="..."
                  width="60"
                />
                <p class="text-sm color_grey-light">{{ $t('official_web_project.empathize.user6') }}</p>
              </div>
              <div class="talk-dialog mb-24 ml-16" style="width: 300px">
                {{ $t('official_web_project.empathize.user_talk6') }}
              </div>
            </div>
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
                  <h3 class="mb-8">{{ $t('page_elevator.define') }}</h3>
                  <h2>{{ $t('official_web_project.define.title') }}</h2>
                </div>
              </div>
            </div>
            <ul class="text-md">
              <div class="flex mb-24">
                <span class="mr-8">•</span>
                <li v-html="$t('official_web_project.define.text1')"></li>
              </div>
              <div class="flex mb-24">
                <span class="mr-8">•</span>
                <li v-html="$t('official_web_project.define.text2')"></li>
              </div>
              <div class="flex mb-24">
                <span class="mr-8">•</span>
                <li v-html="$t('official_web_project.define.text3')"></li>
              </div>
              <div class="flex mb-8">
                <span class="mr-8">•</span>
                <li v-html="$t('official_web_project.define.text4')"></li>
              </div>
            </ul>
          </div>
          <div class="col-md-7 flex-center content-pl-48">
            <figure class="figure">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/%E8%88%8A%E5%AE%98%E7%B6%B2.png"
                class="figure-img img-fluid border-radius-4 shadow-sm"
                alt="..."
              />
            </figure>
          </div>
        </div>
      </section>
      <section id="step-4" class="4brainstorming container text-md mb-60">
        <div class="row content mt-16 mb-16">
          <div class="col-md-5 content-pr-48 mb-48">
            <div class="project-title">
              <div class="title-group">
                <h4 class="mr-8">4</h4>
                <div class="">
                  <h3 class="mb-8">{{ $t('page_elevator.ideate') }}</h3>
                  <h2>{{ $t('official_web_project.ideate.title') }}</h2>
                </div>
              </div>
            </div>
            <p class="text-md">
              {{ $t('official_web_project.ideate.text') }}
            </p>
          </div>
          <div  class="col-md-7 flex-center content-pl-48">
            <figure class="figure">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/official-web-brainstorming.png"
                class="figure-img img-fluid shadow-sm border-radius-4"
                alt="..."
              />
            </figure>
          </div>
        </div>
      </section>
      <section id="step-5" class="5design-procress bg-grey-darkest text-md adjust-pt-dark-bg">
        <div class="container font-color-lighter">
          <div class="content mt-16 mb-16">
            <div class="project-title">
              <div class="title-group">
                <h4 class="mr-8">5</h4>
                <div class="">
                  <h3 class="mb-8">{{ $t('page_elevator.design') }}</h3>
                  <h2>{{ $t('official_web_project.design.title') }}</h2>
                </div>
              </div>
            </div>
            <div class="ia content mb-80">
              <h5 class="mb-16">{{ $t('official_web_project.design.subtitle1') }}</h5>
              <div class="row">
                <div class="col-md-5 content-pr-48 mb-48">
                  <p class="text-md">
                    {{ $t('official_web_project.design.text1') }}
                  </p>
                </div>
                <div class="col-md-7 content-pl-48">
                  <figure class="figure">
                    <img
                      src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/ia.png"
                      class="figure-img img-fluid"
                      alt="..."
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div class="wireframe content mb-80">
              <h5 class="mb-16">{{ $t('official_web_project.design.subtitle2') }}</h5>
              <div class="row">
                <div class="col-md-5 content-pr-48 mb-48">
                  <p class="text-md" v-html="$t('official_web_project.design.text2')"></p>
                </div>
                <div class="col-md-7 content-pl-48">
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
            <div class="col-md-5 content-pr-48 mb-48">
              <h5 class="mb-16">{{ $t('official_web_project.design.subtitle3') }}</h5>
              <p class="text-md">
                {{ $t('official_web_project.design.text3') }}
              </p>
            </div>
            <div class="elements flex-center space-around mb-32">
              <div class="row">
                <div class="col-md-6 flex">
                  <div class="col">
                    <figure class="figure">
                      <img
                        src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/elenment1.png"
                        class="figure-img img-fluid"
                        alt="..."
                      />
                    </figure>
                  </div>
                  <div class="col">
                    <figure class="figure">
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
                    <figure class="figure">
                      <img
                        src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/elenment3.png"
                        class="figure-img img-fluid"
                        alt="..."
                      />
                    </figure>
                  </div>
                  <div class="col">
                    <figure class="figure">
                      <img
                        src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/element4.png"
                        class="figure-img img-fluid"
                        alt="..."
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="design content mb-80">
              <h5 class="mb-16">{{ $t('official_web_project.design.subtitle4') }}</h5>
            <div class="thinking row mb-60">
              <div class="col-md-5 content-pr-48 bg-grey-darkest mb-48">
                <p class="text-md" v-html="$t('official_web_project.design.text4')"></p>
              </div>
              <div class="col-md-7 content-pr-48">
                  <div class="flex-center through-line">
                    <span class="border-circle text-md line-height-2 mr-24">{{ $t('official_web_project.design.core1') }}</span>
                    <span class="border-circle text-md line-height-2 mr-24">{{ $t('official_web_project.design.core2') }}</span>
                    <span class="border-circle text-md line-height-2">{{ $t('official_web_project.design.core3') }}</span>
                </div>
              </div>
            </div>
            <div class="visual col-lg-12">
              <div class="color mb-48">
                <p class="text-md-bold mb-32">
                  <span class="mr-8">•</span>{{ $t('official_web_project.design.idea1') }}
                </p>
                <div class="color mb-80">
                  <div class="space-around">
                    <div class="col-md-4">
                      <figure class="figure">
                        <img
                          src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/color-code.png"
                          class="figure-img img-fluid"
                          alt="..."
                        />
                      </figure>
                    </div>
                    <div class="col-md-4">
                      <figure class="figure">
                        <img
                          src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/color-code2.png"
                          class="figure-img img-fluid"
                          alt="..."
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div class="various mb-80">
                <p class="text-md-bold mb-32">
                  <span class="mr-8">•</span>{{ $t('official_web_project.design.idea2') }}
                </p>
                <div class="plantes flex-center space-around mb-56">
                  <div class="col-xs-3">
                    <figure class="figure">
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
                    <figure class="figure">
                      <img
                        src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/planet-OwlStay.png"
                        class="figure-img img-fluid"
                        alt="..."
                        width="200"
                        height="180"
                      />
                    </figure>
                  </div>
                  <div class="col-xs-3">
                    <figure class="figure">
                      <img
                        src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/planet-OwlJourney.png"
                        class="figure-img img-fluid"
                        alt="..."
                        width="120"
                        height="120"
                      />
                    </figure>
                  </div>
                  <div class="col-xs-3">
                    <figure class="figure">
                      <img
                        src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/planet-OwlPay.png"
                        class="figure-img img-fluid"
                        alt="..."
                        width="160"
                        height="140"
                      />
                    </figure>
                  </div>
                </div>
                <div class="owl col-lg-6">
                  <figure class="figure">
                    <img
                      src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/owl.png"
                      class="figure-img img-fluid"
                      alt="..."
                      width="400px"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div class="iterate row content mb-80">
            <div class="col-md-5 content-pr-48 mb-48">
              <h5 class="mb-16">{{ $t('official_web_project.design.subtitle5') }}</h5>
              <p class="text-md" v-html="$t('official_web_project.design.text5')"></p>
            </div>
            <div class="row">
              <div class="col-sm-6 content-pr-8 mb-16">
                <figure class="figure">
                  <img
                    src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/homepage-dark.png"
                    class="figure-img img-fluid border-radius-4"
                    alt="..."
                  />
                </figure>
              </div>
              <div class="col-sm-6 content-pl-8">
                <figure class="figure">
                  <img
                    src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/homepage-light.png"
                    class="figure-img img-fluid border-radius-4"
                    alt="..."
                  />
                </figure>
              </div>
            </div>
          </div>
          <div class="prototype content mb-80">
              <h5 class="mb-16">{{ $t('official_web_project.design.subtitle6') }}</h5>
            <div class="row">
              <div class="col-md-5 content-pr-48 mb-48">
                <p class="text-md mb-24">
                  {{ $t('official_web_project.design.text6') }}
                </p>
                <a target="_blank" href="https://xd.adobe.com/view/d2429262-013f-4cfb-918d-edf8e99885a0-8711/" class="a-white">
                  <img alt="Xd icon" src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/Xd-icon.png" class="mr-8" height="25">
                  {{ $t('common.prototype_cta') }}<i class="las la-long-arrow-alt-right ml-4"></i>
                </a>
              </div>
              <div class="col-md-7 content-pl-48">
                <figure class="figure pad_border">
                  <img
                    src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/website-prototype2.gif"
                    class="figure-img img-fluid border-radius-4"
                    alt="..."
                  />
                </figure>
              </div>
            </div>
          </div>
          <div class="debug content">
              <h5 class="mb-16">{{ $t('official_web_project.design.subtitle7') }}</h5>
            <div class="row">
              <div class="col-md-5 content-pr-48 mb-48">
                <p class="text-md" v-html="$t('official_web_project.design.text7')"></p>
              </div>
              <div class="col-md-7 content-pl-48">
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
      <section id="step-6" class="6result bg-grey-darkest text-md adjust-pb-dark-bg">
        <div class="container font-color-lighter">
          <div class="row">
            <div class="col-md-6 content-pr-48">
              <div class="project-title">
                <div class="title-group">
                  <h4 class="mr-8">6</h4>
                  <div class="">
                  <h3 class="mb-8">{{ $t('page_elevator.result') }}</h3>
                    <h2>{{ $t('official_web_project.result.title') }}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class=" col-md-12 content-pr-48 mb-48">
                <a target="_blank" href="https://www.owlting.com/market/" class="a-white">
                  🌟 {{ $t('common.view_project_cta') }}<i class="las la-long-arrow-alt-right ml-4"></i>
                </a>
              </div>
            </div>
            <div class="col-md-9 mb-80">
              <h5 class="mb-16">{{ $t('official_web_project.result.mockup_title1') }}</h5>
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/mockup-banner.gif"
                class="figure-img img-fluid border-radius-16 shadow"
                alt="..."
              />
              <p class="text-md mt-16 mb-16">
                {{ $t('official_web_project.result.mockup_text1') }}
              </p>
            </div>
            <div class="col-md-9 ml-auto mb-80">
              <h5 class="mb-16">{{ $t('official_web_project.result.mockup_title2') }}</h5>
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/mockup-carousel.gif"
                class="figure-img img-fluid border-radius-16 shadow"
                alt="..."
              />
              <p class="text-md mt-16 mb-16">
                {{ $t('official_web_project.result.mockup_text2') }}
              </p>
            </div>
            <div class="col-md-9">
              <h5 class="mb-16">{{ $t('official_web_project.result.mockup_title3') }}</h5>
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/mockup-global.gif"
                class="figure-img img-fluid border-radius-16 shadow"
                alt="..."
              />
              <p class="text-md mt-16 mb-16">
                {{ $t('official_web_project.result.mockup_text3') }}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="step-7" class="7takeaway container text-md mt-60 mb-60">
        <div class="col-md-5 content-pr-48">
          <div class="row">
            <div class="project-title">
              <div class="title-group">
                <h4 class="mr-8">7</h4>
                <div class="">
                  <h3 class="mb-8">{{ $t('page_elevator.takeaway') }}</h3>
                  <h2>{{ $t('official_web_project.takeaway.title') }}</h2>
                </div>
              </div>
            </div>
            <p class="text-md" v-html="$t('official_web_project.takeaway.text')"></p>
          </div>
        </div>
      </section>
      <section class="more-project bg-blue-lightest pt-80">
        <div class="container">
          <h2>{{ $t('common.more_project') }}</h2>
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
                <div class="text-md-bold mt-24">{{ $t('common.market') }}</div>
                <div class="text-md">
                  {{ $t('common.re_branding') }}
                  <span class="font-color-light"> | </span>
                  {{ $t('common.website') }}
                  <span class="font-color-light"> | </span>
                  {{ $t('common.app') }}
                  <span class="font-color-light"> | </span>
                  {{ $t('common.ux_research') }}
                  <span class="font-color-light"> | </span>
                  {{ $t('common.ui_design') }}
                </div>
                <router-link class="btn btn-link" :to="{ name: 'ProjectMarket' }">
                  {{ $t('common.lear_more_cta') }}<i class="las la-long-arrow-alt-right"></i>
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
              <div class="text-md-bold mt-24">{{ $t('common.pms') }}</div>
              <div class="text-md">
                {{ $t('common.ux_research') }}
                <span class="font-color-light"> | </span>
                {{ $t('common.ui_design') }}
                <span class="font-color-light"> | </span>
                {{ $t('common.b2b') }}
                <span class="font-color-light"> | </span>
                {{ $t('common.saas') }}
              </div>
              <router-link class="btn btn-link" :to="{ name: 'ProjectPMS' }">
                {{ $t('common.lear_more_cta') }}<i class="las la-long-arrow-alt-right"></i>
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
import { useI18n } from 'vue-i18n'
import { computed } from 'vue';

export default {
  name: "projectWeb",
  components: {
    PageElevator
  },
  setup () {
    const { t } = useI18n()

    const anchors = computed(() => [
      {
        name: t('page_elevator.overview'),
        id: '#overall'
      },
      {
        name: t('page_elevator.goal'),
        id: '#step-1'
      },
      {
        name: t('page_elevator.empathize'),
        id: '#step-2'
      },
      {
        name: t('page_elevator.define'),
        id: '#step-3'
      },
      {
        name: t('page_elevator.ideate'),
        id: '#step-4'
      },
      {
        name: t('page_elevator.design'),
        id: '#step-5'
      },
      {
        name: t('page_elevator.result'),
        id: '#step-6'
      },
      {
        name: t('page_elevator.takeaway'),
        id: '#step-7'
      }
    ])

    return { anchors }
  }
};
</script>

<style lang="scss" src="../../styles/official-website.scss" scoped></style>
