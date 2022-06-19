<template>
  <div>
    <PageElevator :anchors="anchors" />
      <main class="project-pms">
        <section class="title container">
          <h1 class="mb-24">{{ $t('pms_project.title') }}</h1>
          <p class="text-md line-height-sm mb-8">
            {{ $t('common.project_includes') }}
            <span class="font-color-light"> | </span>
            {{ $t('common.ux_research') }}
            .
            {{ $t('common.ui_design') }}
          </p>
          <p class="text-md line-height-sm mb-8">
            {{ $t('common.project_scale') }}
            <span class="font-color-light"> | </span>
            {{ $t('pms_project.project_scale_answer') }}
          </p>
          <p class="text-md line-height-sm">
            {{ $t('common.my_role') }}
            <span class="font-color-light"> | </span>
            {{ $t('common.uiux_designer') }}
          </p>
        </section>
        <section class="banner container p-0">
          <figure class="figure col-md-12">
            <img
              src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/pms-hero.png"
              class="figure-img img-fluid border-radius-4"
              alt="..."
            />
          </figure>
        </section>
        <section id="overall" class="overall container text-md">
          <div class="background mb-48">
            <h2 class="mb-16"> {{ $t('common.project_background') }}</h2>
            <p class="text-md mb-8" v-html="$t('pms_project.project_background_answer')"></p>
          </div>
          <div class="task mb-48">
            <h2 class="mb-16">{{ $t('common.challenges') }}</h2>
              <ul class="text-md">
                <div class="flex mb-24">
                  <span class="mr-8">•</span>
                  <li>
                    <span class="text-md-bold">{{ $t('pms_project.overview.challenges_title1') }}</span><br>
                    {{ $t('pms_project.overview.challenges_answer1') }}
                  </li>
                </div>
                <div class="flex">
                  <span class="mr-8">•</span>
                  <li>
                    <span class="text-md-bold">{{ $t('pms_project.overview.challenges_title2') }}</span><br>
                    {{ $t('pms_project.overview.challenges_answer2') }}
                  </li>
                </div>
              </ul>
          </div>
          <div class="highlight">
            <h2 class="mb-16">
              {{ $t('pms_project.overview.results') }}
            </h2>
            <div class="feedback row">
              <div class="col-lg-4 content-pr-8 mb-16">
                <div class="border-thinner border-radius-4 shadow-sm p-8">
                  <div class="text-sm-bold">
                    ⭐ ⭐ ⭐ ⭐ ⭐
                    <br />
                    {{ $t('pms_project.overview.results_answer1') }}
                    <p class="text-sm mt-16">
                      {{ $t('pms_project.overview.result_owner1') }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 content-pr-8 mb-16">
                <div class="border-thinner border-radius-4 shadow-sm p-8">
                  <div class="text-sm-bold">
                    ⭐ ⭐ ⭐ ⭐ ⭐
                    <br />
                    {{ $t('pms_project.overview.results_answer2') }}
                    <p class="text-sm mt-16">
                      {{ $t('pms_project.overview.result_owner2') }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 content-pr-8">
                <div class="border-thinner border-radius-4 shadow-sm p-8">
                  <div class="text-sm-bold">
                    ⭐ ⭐ ⭐ ⭐ ⭐
                    <br />
                    {{ $t('pms_project.overview.results_answer3') }}
                    <p class="text-sm mt-16">
                      {{ $t('pms_project.overview.result_owner3') }}
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
        <section id="step-1" class="1goal container text-md">
          <div class="project-title">
            <div class="title-group">
              <h4 class="mr-8">1</h4>
              <div>
                <h3 class="mb-8">{{ $t('page_elevator.goal') }}</h3>
                <h2>{{ $t('pms_project.goal.title') }}</h2>
              </div>
            </div>
          </div>
          <ul>
            <div class="flex mb-8">
              <span class="mr-8">‣</span>
              <li class="text-md">{{ $t('pms_project.goal.goal1') }}</li>
            </div>
            <div class="flex mb-8">
              <span class="mr-8">‣</span>
              <li class="text-md">{{ $t('pms_project.goal.goal2') }}</li>
            </div>
            <div class="flex">
              <span class="mr-8">‣</span>
              <li class="text-md">{{ $t('pms_project.goal.goal3') }}</li>
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
                    <h2>{{ $t('pms_project.empathize.title') }}</h2>
                  </div>
                </div>
              </div>
              <p class="text-md" v-html="$t('pms_project.empathize.text')"></p>
            </div>
            <div class="col-md-7 content-pl-48 text-align-center">
              <div class="text-sm-bold plan_border mb-8">{{ $t('pms_project.empathize.step1') }}</div>
              <i class="las la-long-arrow-alt-down"></i>
              <div class="text-sm-bold plan_border mb-8 mt-8">{{ $t('pms_project.empathize.step2') }}</div>
              <i class="las la-long-arrow-alt-down"></i>
              <div class="text-sm-bold plan_border mt-8">{{ $t('pms_project.empathize.step3') }}</div>
              <i class="las la-long-arrow-alt-down"></i>
              <div class="text-sm-bold plan_border mt-8">{{ $t('pms_project.empathize.step4') }}</div>
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
                    <h2>{{ $t('pms_project.define.title') }}</h2>
                  </div>
                </div>
              </div>
              <p class="text-md" v-html="$t('pms_project.define.text')"></p>
            </div>
            <div class="col-md-7 content-pl-48">
              <figure class="figure border-thin border-radius-4">
                <img
                  v-lazy="'https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/painpoint.png'"
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
                    <h3 class="8">{{ $t('page_elevator.ideate') }}</h3>
                    <h2>{{ $t('pms_project.ideate.title') }}</h2>
                  </div>
                </div>
              </div>
              <div class="analyze row mb-80">
                <div class="col-md-5 content-pr-48 mb-48">
                  <h5 class="mb-16">{{ $t('pms_project.ideate.subtitle1') }}</h5>
                  <p class="text-md" v-html="$t('pms_project.ideate.text1')"></p>
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
                <div class="col-md-12 content-pr-48 mb-48">
                  <h5 class="mb-16">{{ $t('pms_project.ideate.subtitle2') }}</h5>
                  <ul>
                    <div class="flex mb-24">
                      <span class="mr-8">•</span>
                      <li v-html="$t('pms_project.ideate.text2-1')"></li>
                    </div>
                    <div class="flex">
                      <span class="mr-8">•</span>
                      <li v-html="$t('pms_project.ideate.text2-2')"></li>
                    </div>
                  </ul>
                </div>
                <div class="col-md-12 mb-40">
                  <div style="width: fit-content; margin: auto">
                    <figure class="figure">
                      <img
                        src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/PMS-Flow.png"
                        class="figure-img img-fluid"
                        style="width:"
                        alt="..."
                      />
                    </figure>
                  </div>
                </div>
                <div class="col-md-12">
                  <div style="width: fit-content; margin: auto">
                    <figure class="figure">
                      <img
                        src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/PMS-Flow2.png"
                        class="figure-img img-fluid"
                        style="width:"
                        alt="..."
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div class="solution row">
                <div class="col-md-5 content-pr-48 mb-48">
                  <h5 class="mb-16">{{ $t('pms_project.ideate.subtitle3') }}</h5>
                  <p class="text-md" v-html="$t('pms_project.ideate.text3')"></p>
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
        <section id="step-5" class="5design-process bg-grey-darkest text-md adjust-pt-dark-bg">
          <div class="container font-color-lighter">
            <div class="project-title">
              <div class="title-group">
                <h4 class="mr-8">5</h4>
                <div class="">
                  <h3 class="mb-8">{{ $t('page_elevator.design') }}</h3>
                  <h2>{{ $t('pms_project.design.title') }}</h2>
                </div>
              </div>
            </div>
            <div class="1wireframe row content mb-80">
              <div class="col-md-5 content-pr-48 mb-48">
                <h5 class="mb-16">{{ $t('pms_project.design.subtitle1') }}</h5>
                <p class="text-md">
                  {{ $t('pms_project.design.text1') }}
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
                <h5 class="mb-16">{{ $t('pms_project.design.subtitle2') }}</h5>
                <p class="text-md" v-html="$t('pms_project.design.text2')"></p>
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
            <div class="3prototype row content mb-80">
              <div class="col-md-5 content-pr-48 mb-48">
                <h5 class="mb-16">{{ $t('pms_project.design.subtitle3') }}</h5>
                <p class="text-md" v-html="$t('pms_project.design.text3')"></p>
                <p class="text-sm mt-16" v-html="$t('pms_project.design.text3-2')"></p>
              </div>
              <div class="col-md-7 content-pl-48 text-align-center">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/prototype.png"
                  class="figure-img img-fluid"
                  style="width: 400px;"
                  alt="..."
                />
              </div>
            </div>
            <div class="4usability_test, row content">
              <div class="col-md-5 content-pr-48 mb-48">
                <h5 class="mb-16">{{ $t('pms_project.design.subtitle4') }}</h5>
                <p class="text-md" v-html="$t('pms_project.design.text4')"></p>
              </div>
              <div class="col-md-7 content-pl-48 text-align-center">
                <img
                  src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/Usability+Testing.png"
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
                    <h3 class="mb-8">{{ $t('page_elevator.result') }}</h3>
                    <h2>{{ $t('pms_project.result.title') }}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 content-pr-48">
              <p class="text-md mb-48" v-html="$t('pms_project.result.text')"></p>
            </div>
            <div class="col-md-12 mb-80">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/mutipul-plans-chose.png"
                class="figure-img img-fluid border-radius-16 shadow mb-16"
                alt="..."
              />
              <h5 class="mt-16">
                {{ $t('pms_project.result.mockup_title1') }} - {{ $t('pms_project.result.mockup_text1')}}
              </h5>
            </div>
            <div class="col-md-12 mb-80 ml-auto">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/nationai-holiday.png"
                class="figure-img img-fluid border-radius-16 shadow mb-16"
                alt="..."
              />
              <h5 class="mt-16">
                {{ $t('pms_project.result.mockup_title2') }} - {{ $t('pms_project.result.mockup_text2') }}
              </h5>
            </div>
            <div class="col-md-12">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/PMS/price_calendar.png"
                class="figure-img img-fluid border-radius-16 shadow mb-16"
                alt="..."
              />
              <h5 class="mt-16">
                {{ $t('pms_project.result.mockup_title3') }} - {{ $t('pms_project.result.mockup_text3') }}
              </h5>
            </div>
          </div>
        </section>
        <section id="step-7" class="7iterate container text-md mt-60">
          <div class="col-md-12 content-pr-48">
            <div class="project-title">
              <div class="title-group">
                <h4 class="mr-8">7</h4>
                <div class="">
                  <h3 class="8">{{ $t('page_elevator.iterate') }}</h3>
                  <h2>{{ $t('pms_project.iterate.title') }}</h2>
                </div>
              </div>
            </div>
            <p class="text-md" v-html="$t('pms_project.iterate.text')"></p>
          </div>
        </section>
        <section id="step-8" class="8takeaway container text-md mb-60">
          <div class="col-md-12 content-pr-48">
            <div class="project-title">
              <div class="title-group">
                <h4 class="mr-8">8</h4>
                <div class="">
                  <h3 class="mb-8">{{ $t('page_elevator.takeaway') }}</h3>
                  <h2>{{ $t('pms_project.takeaway.title') }}</h2>
                </div>
              </div>
            </div>
            <p class="text-md" v-html="$t('pms_project.takeaway.text')"></p>
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
  name: "projectPMS",
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
        name: t('page_elevator.takeaway'),
        id: '#step-8'
      }
    ])

    return { anchors }
  }
};
</script>

<style lang="scss" src="../../styles/pms.scss" scoped></style>
