<template>
  <div>
    <PageElevator :anchors="anchors" />
    <main class="project-market">
      <section class="title container">
        <h1 class="mb-24">{{ $t('market_project.title') }}</h1>
        <p class="text-md line-height-sm mb-8">
          {{ $t('common.project_includes') }}
          <span class="font-color-light"> | </span>
          {{ $t('common.re_branding') }}
          .
          {{ $t('common.refactor_website') }}
          .
          {{ $t('common.app') }}
          .
          {{ $t('common.ux_research') }}
          .
          {{ $t('common.ui_design') }}
        </p>
        <p class="text-md line-height-sm mb-8">
          {{ $t('common.project_scale') }}
          <span class="font-color-light"> | </span>
          {{ $t('market_project.project_scale_answer') }}
        </p>
        <p class="text-md line-height-sm">
          {{ $t('common.my_role') }}
          <span class="font-color-light"> | </span>
          {{ $t('common.uiux_designer') }}
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
          <h2 class="mb-16"> {{ $t('common.project_background') }}</h2>
          <p v-html="$t('market_project.project_background_answer')"></p>
        </div>
        <div class="task mb-48">
          <h2 class="mb-16">{{ $t('common.challenges') }}</h2>
            <ul class="text-md">
              <div class="flex mb-24">
                <span class="mr-8">•</span>
                <li>
                  <span class="text-md-bold">{{ $t('market_project.overview.challenges_title1') }}</span><br>
                  {{ $t('market_project.overview.challenges_answer1') }}
                </li>
              </div>
              <div class="flex">
                <span class="mr-8">•</span>
                <li>
                  <span class="text-md-bold">{{ $t('market_project.overview.challenges_title2') }}</span><br>
                  {{ $t('market_project.overview.challenges_answer2') }}
                </li>
              </div>
            </ul>
        </div>
        <div class="highlight">
          <h2 class="mb-16">{{ $t('market_project.overview.results') }}</h2>
          <div class="highlight row">
            <div class="col-sm-4 new_user mb-24">
              <p class="text-xxl gradient-font">
                +230<span class="text-l">%</span>
              </p>
              <p class="text-md-bold">{{ $t('market_project.overview.results_answer1') }}</p>
            </div>
            <div class="col-sm-4 viewing_time mb-24">
              <p class="text-xxl gradient-font">
                +81<span class="text-l">%</span>
              </p>
              <p class="text-md-bold">{{ $t('market_project.overview.results_answer2') }}</p>
            </div>
            <div class="col-sm-4 bounce_rate">
              <p class="text-xxl gradient-font">
                -24<span class="text-l">%</span>
              </p>
              <p class="text-md-bold">{{ $t('market_project.overview.results_answer3') }}</p>
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
      <section id="step-1" class="1goal container text-md">
        <div class="project-title">
          <div class="title-group">
            <h4 class="mr-8">1</h4>
            <div class="">
              <h3 class="mb-8">{{ $t('page_elevator.goal') }}</h3>
              <h2>{{ $t('market_project.goal.title') }}</h2>
            </div>
          </div>
        </div>
        <ul>
          <div class="flex mb-8">
            <span class="mr-8">‣</span>
            <li class="text-md">
              {{ $t('market_project.goal.goal1') }}
            </li>
          </div>
          <div class="flex mb-8">
            <span class="mr-8">‣</span>
            <li class="text-md">
              {{ $t('market_project.goal.goal2') }}
            </li>
          </div>
          <div class="flex mb-8">
            <span class="mr-8">‣</span>
            <li class="text-md">
              {{ $t('market_project.goal.goal3') }}
            </li>
          </div>
        </ul>
      </section>
      <section id="step-2" class="2understand container text-md">
        <div class="project-title">
          <div class="title-group">
            <h4 class="mr-8">2</h4>
            <div class="">
              <h3 class="mb-8">{{ $t('page_elevator.empathize') }}</h3>
              <h2>{{ $t('market_project.empathize.title') }}</h2>
            </div>
          </div>
        </div>
        <div class="user-talk row content mb-80">
          <div class="col-md-5 content-pr-48 mb-48">
            <h5 class="mb-16">{{ $t('market_project.empathize.subtitle1') }}</h5>
            <p v-html="$t('market_project.empathize.text1')"></p>
          </div>
          <div class="col-md-7 content-pl-48">
            <div class="talking-bobble mb-16">
              <div class="user-talk text-sm-bold mb-8">
                {{ $t('market_project.empathize.user_talk1') }}
              </div>
              <div class="user-photo-emoji user-image-relative flex">
                <figure class="figure mr-16">
                  <img
                    src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/userA.png"
                    class="figure-img img-fluid"
                    alt="..."
                    width="60"
                    height="60"
                  />
                </figure>
                <span class="emoji-position">😕</span>
                <div class="name mt-auto">
                  <p class="text-sm">Cindy Wu</p>
                  <p class="text-sm color_grey-light">{{ $t('market_project.empathize.user_ordinary') }}</p>
                </div>
              </div>
            </div>
            <div class="talking-bobble mb-16">
              <div class="user-talk text-sm-bold mb-8">
                {{ $t('market_project.empathize.user_talk2') }}
              </div>
              <div class="user-photo-emoji user-image-relative flex">
                <figure class="figure mr-16">
                  <img
                    src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/userB.png"
                    class="figure-img img-fluid"
                    alt="..."
                    width="60"
                    height="60"
                  />
                </figure>
                <span class="emoji-position">😫</span>
                <div class="name mt-auto">
                  <p class="text-sm">Vincent Chang</p>
                  <p class="text-sm color_grey-light">{{ $t('market_project.empathize.user_premiere') }}</p>
                </div>
              </div>
            </div>
            <div class="talking-bobble mb-16">
              <div class="user-talk text-sm-bold mb-8">
                {{ $t('market_project.empathize.user_talk3') }}
              </div>
              <div class="user-photo-emoji user-image-relative flex">
                <figure class="figure mr-16">
                  <img
                    src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/userC.png"
                    class="figure-img img-fluid"
                    alt="..."
                    width="60"
                    height="60"
                  />
                </figure>
                <span class="emoji-position">😧</span>
                <div class="name mt-auto">
                  <p class="text-sm">Lily text</p>
                  <p class="text-sm color_grey-light">{{ $t('market_project.empathize.user_ordinary') }}</p>
                </div>
              </div>
            </div>
            <div class="talking-bobble">
              <div class="user-talk text-sm-bold mb-8">
                {{ $t('market_project.empathize.user_talk4') }}
              </div>
              <div class="user-photo-emoji user-image-relative flex">
                <figure class="figure mr-16">
                  <img
                    src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/userD.png"
                    class="figure-img img-fluid"
                    alt="..."
                    width="60"
                    height="60"
                  />
                </figure>
                <span class="emoji-position">👏</span>
                <div class="name mt-auto">
                  <p class="text-sm">Joyce Chen</p>
                  <p class="text-sm color_grey-light">{{ $t('market_project.empathize.user_manager') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="user-talk row content">
          <div class="col-md-5 content-pr-48 mb-48">
            <h5 class="mb-16">{{ $t('market_project.empathize.subtitle2') }}</h5>
            <p v-html="$t('market_project.empathize.text2')"></p>
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
                  <h3 class="mb-8">{{ $t('page_elevator.define') }}</h3>
                  <h2>{{ $t('market_project.define.title') }}</h2>
                </div>
              </div>
            </div>
            <ul class="text-md">
              <div class="flex mb-24">
                <span class="mr-8">•</span>
                <li v-html="$t('market_project.define.text1')"></li>
              </div>
              <div class="flex mb-24">
                <span class="mr-8">•</span>
                <li v-html="$t('market_project.define.text2')"></li>
              </div>
              <div class="flex">
                <span class="mr-8">•</span>
                <li v-html="$t('market_project.define.text3')"></li>
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
                  <h3 class="mb-8">{{ $t('page_elevator.ideate') }}</h3>
                  <h2>{{ $t('market_project.ideate.title') }}</h2>
                </div>
              </div>
            </div>
            <p class="text-md" v-html="$t('market_project.ideate.text')"></p>
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
                  <h3 class="mb-8">{{ $t('page_elevator.design') }}</h3>
                  <h2>{{ $t('market_project.design.title') }}</h2>
                </div>
              </div>
            </div>
            <div class="1ia content mb-80">
              <h5 class="col-md-5 mb-16">
                {{ $t('market_project.design.subtitle1') }}
              </h5>
              <div class="row">
                <p class="text-md col-md-5 content-pr-48 mb-48" v-html="$t('market_project.design.text1')"></p>
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
              <h5 class="col-md-5 mb-16">
                  {{ $t('market_project.design.subtitle2') }}
              </h5>
              <div class="user-talk text-align-left flex-center flex-start mb-8">
                <div class="memoji text-align-center">
                  <img
                    src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/CEO.png"
                    class="figure-img img-fluid"
                    alt="..."
                    width="60"
                  />
                </div>
                <div class="talk-dialog ml-8">
                  {{ $t('market_project.design.talking_bubble1') }}
                </div>
              </div>
              <div class="user-talk text-align-left flex-center flex-start mb-24">
                <div class="memoji text-align-center">
                  <img
                    src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/edna.png"
                    class="figure-img img-fluid"
                    alt="..."
                    width="60"
                  />
                </div>
                <div class="talk-dialog ml-8" v-html="$t('market_project.design.talking_bubble2')"></div>
              </div>
              <div class="row">
                <p class="col-md-5 text-md content-pr-48 mb-48" v-html="$t('market_project.design.text2')"></p>
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
              <h5 class="col-md-5 mb-16">
                {{ $t('market_project.design.subtitle3') }}
              </h5>
              <div class="row">
                <p class="text-md col-md-5 content-pr-48 mb-48" v-html="$t('market_project.design.text3')"></p>
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
              <h5 class="mb-16">
                {{ $t('market_project.design.subtitle4') }}
              </h5>
              <div class="row">
                <div class="col-md-5 content-pr-48 mb-48">
                  <p class="text-md mb-24" v-html="$t('market_project.design.text4')"></p>
                  <a target="_blank" href="https://www.figma.com/proto/KZODm2NGxinG76KXApm5QX/Edna-portfolio?node-id=848%3A4496&scaling=min-zoom&page-id=848%3A1808&starting-point-node-id=848%3A4496" class="a-white">
                    <img alt="Xd icon" src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/figma-icon.png" class="" data-v-64193183="" height="30">
                      {{ $t('common.prototype_cta') }}<i class="las la-long-arrow-alt-right ml-4"></i>
                  </a>
                </div>
                <figure class="figure col-md-7 content-pl-48">
                  <img
                    v-lazy="'https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/prototype.png'"
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
                  <h3 class="mb-8">{{ $t('page_elevator.result') }}</h3>
                  <h2>{{ $t('market_project.result.title') }}</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-5 content-pr-48 mb-48">
                <p class="text-md mb-24" v-html="$t('market_project.result.text')"></p>
                  <a target="_blank" href="https://www.owlting.com/market/" class="a-white">
                    🌟 {{ $t('common.view_project_cta') }}<i class="las la-long-arrow-alt-right ml-4"></i>
                  </a>
              </div>
              <div class="highlight col-md-7 content-pl-48 mb-80">
                <div class="row">
                  <div class="col-sm-6 new_user mb-48">
                    <p class="text-xl">+230<span class="text-l">%</span></p>
                    <p class="text-md">{{ $t('market_project.overview.results_answer1') }}</p>
                  </div>
                  <div class="col-sm-6 viewing_time mb-48">
                    <p class="text-xl">+81<span class="text-l">%</span></p>
                    <p class="text-md">{{ $t('market_project.overview.results_answer2') }}</p>
                  </div>
                  <div class="col bounce_rate">
                    <p class="text-xl">-24<span class="text-l">%</span></p>
                    <p class="text-md">{{ $t('market_project.overview.results_answer3') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 mb-80 mr-auto">
            <img
              src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/mockup-home.png"
              class="figure-img img-fluid border-radius-16 shadow mb-16"
              alt="..."
            />
            <h5 class="mt-16">
              {{ $t('market_project.result.mockup_title1') }}  - {{ $t('market_project.result.mockup_text1') }}
            </h5>
          </div>
          <div class="col-md-12 mb-80 ml-auto">
            <img
              src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/mockup-category.png"
              class="figure-img img-fluid border-radius-16 shadow mb-16"
              alt="..."
            />
            <h5 class="mt-16">
              {{ $t('market_project.result.mockup_title2') }}  - {{ $t('market_project.result.mockup_text2') }}
            </h5>
          </div>
          <div class="col-md-12 mb-80 mr-auto">
            <img
              src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/mockup-hover.png"
              class="figure-img img-fluid border-radius-16 shadow mb-16"
              alt="..."
            />
            <h5 class="mt-16">
              {{ $t('market_project.result.mockup_title3') }} - {{ $t('market_project.result.mockup_text3') }}
            </h5>
            <p class="text-md mb-16">
            </p>
          </div>
          <div class="col-md-12 ml-auto">
            <img
              src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/mockup-404.png"
              class="figure-img img-fluid border-radius-16 shadow mb-16"
              alt="..."
            />
            <h5 class="mt-16">
              {{ $t('market_project.result.mockup_title4') }} - {{ $t('market_project.result.mockup_text4') }}
            </h5>
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
                  <h3 class="mb-8">{{ $t('page_elevator.iterate') }}</h3>
                  <h2>{{ $t('market_project.iterate.title') }}</h2>
                </div>
              </div>
            </div>
            <p class="text-md mb-48" v-html="$t('market_project.iterate.text')"></p>
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
                  <h3 class="mb-8">{{ $t('page_elevator.app') }}</h3>
                  <h2>{{ $t('market_project.app.title') }}</h2>
                </div>
              </div>
            </div>
            <p class="text-md mb-48" v-html="$t('market_project.app.text')"></p>
            <div class="mb-48">
              <div class="d-flex">
                <a target="_blank" href="https://itunes.apple.com/app/id1564061027" class="mr-16" data-v-64193183="">
                  <img alt="從App Store下載APP" src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/appstore.png" class="badges" data-v-64193183="" height="40">
                </a>
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.owlting.app.owlmarket" class="mr-16" data-v-64193183="">
                  <img alt="從App Store下載APP" src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/market/googleplay.png" class="badges" data-v-64193183="" height="40">
                </a>
              </div>
            </div>
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
          <div class="project-title col">
            <div class="title-group ">
              <h4 class="mr-8">9</h4>
              <div class="">
                  <h3 class="mb-8">{{ $t('page_elevator.takeaway') }}</h3>
                  <h2>{{ $t('market_project.takeaway.title') }}</h2>
              </div>
            </div>
          </div>
          <div class="text-md col-md-5 content-pr-48">
            <ul>
              <div class="flex mb-24">
                <span class="mr-8">•</span>
                <li v-html="$t('market_project.takeaway.text1')"></li>
              </div>
              <div class="flex">
                <span class="mr-8">•</span>
                <li v-html="$t('market_project.takeaway.text2')"></li>
              </div>
            </ul>
          </div>
        </div>
      </section>
      <section class="more-project bg-blue-lightest pt-80">
        <div class="container">
          <h2>{{ $t('common.more_project') }}</h2>
          <div class="row">
            <div class="col-md-6 content-pr-8 mt-24 mb-24">
              <router-link class="" :to="{ name: 'ProjectWeb' }">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/official-web/official_website-hero.png"
                  class="figure-img img-fluid border-radius-4 shadow-sm"
                  alt="..."
                />
              </router-link>
              <div class="text-md-bold mt-24">{{ $t('common.owlting_website') }}</div>
              <div class="text-md">
                {{ $t('common.refactor_website') }}
                <span class="font-color-light"> | </span>
                {{ $t('common.ux_research') }}
                <span class="font-color-light"> | </span>
                {{ $t('common.ui_design') }}
                <span class="font-color-light"> | </span>
                {{ $t('common.official_website') }}
              </div>
              <router-link class="btn btn-link" :to="{ name: 'ProjectWeb' }">
                {{ $t('common.lear_more_cta') }}<i class="las la-long-arrow-alt-right"></i>
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
  name: "projectMarket",
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
        name: t('page_elevator.iterate'),
        id: '#step-7'
      },
      {
        name: t('page_elevator.app'),
        id: '#step-8'
      },
      {
        name: t('page_elevator.takeaway'),
        id: '#step-9'
      }
    ])

    return { anchors }
  }
};
</script>

<style lang="scss" src="../../styles/market.scss" scoped></style>
