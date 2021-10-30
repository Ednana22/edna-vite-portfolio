<template>
  <main class="page-about mt-0">
    <div class="banner">
      <figure class="figure col-12">
        <div class="pic"></div>
      </figure>
    </div>
    <section class="about container">
      <h1>Hi! I'm Edna</h1>
      <p class="text-md mb-24" v-html="$t('about_page.text')"></p>
      <div class="res mb-8 col-sm-6">
        <figure class="figure mr-8">
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/homepage/icon-resume.svg"
            class="figure-img img-fluid"
            alt="..."
          />
        </figure>
        <a href="https://drive.google.com/file/d/1NFNcFEzZj7I_Punp-17jKKBReY3QVjeK/view?usp=sharing" target="_blank">{{ $t('about_page.view_resume_cat') }}
        </a>
      </div>
    </section>
    <section class="time_line-h container">
      <h2 class="mb-16">{{ $t('about_page.steps.title') }}</h2>
      <div class="timeline-h flex space-between">
        <div class="now">
          <p class="text-md">now - 2018</p>
          <div class="circle-grey mt-8 mb-8"></div>
          <p class="text-md-bold">{{ $t('common.uiux_designer') }}</p>
          <p class="text-sm">{{ $t('about_page.steps.owlting') }}</p>
        </div>
        <div class="2018">
          <p class="text-md">2018 - 2017</p>
          <div class="circle-grey mt-8 mb-8"></div>
          <p class="text-md-bold">{{ $t('about_page.steps.web_designer') }}</p>
          <p class="text-sm">{{ $t('about_page.steps.shopee') }}</p>
        </div>
        <div class="2015">
          <p class="text-md">2017 - 2015</p>
          <div class="circle-grey mt-8 mb-8"></div>
          <p class="text-md-bold">{{ $t('about_page.steps.visual_designer') }}</p>
          <p class="text-sm">{{ $t('about_page.steps.the_diner') }}</p>
        </div>
        <div class="2014">
          <p class="text-md">2015 - 2014</p>
          <div class="circle-grey mt-8 mb-8"></div>
          <p class="text-md-bold">{{ $t('about_page.steps.eu_bachelor') }}</p>
          <p class="text-sm" v-html="$t('about_page.steps.epac')"></p>
        </div>
        <div class="2014">
          <p class="text-md">2013 - 2010</p>
          <div class="circle-grey mt-8 mb-8"></div>
          <p class="text-md-bold">{{ $t('about_page.steps.cd') }}</p>
          <p class="text-sm">{{ $t('about_page.steps.mcu') }}</p>
        </div>
      </div>
    </section>
    <section class="time_line-v container">
      <h2 class="mb-16">{{ $t('about_page.steps.title') }}</h2>
      <div class="timeline-v column space-between">
        <div class="flex mb-24">
          <div class="circle-grey mt-14 mr-16"></div>
          <div class="now">
            <p class="text-md">now - 2018</p>
            <p class="text-md-bold">{{ $t('common.uiux_designer') }}</p>
            <p class="text-sm">{{ $t('about_page.steps.owlting') }}</p>
          </div>
        </div>
        <div class="flex mb-24">
          <div class="circle-grey mt-14 mr-16"></div>
          <div class="now">
            <p class="text-md">2018 - 2016</p>
            <p class="text-md-bold">{{ $t('about_page.steps.web_designer') }}</p>
          <p class="text-sm">{{ $t('about_page.steps.shopee') }}</p>
          </div>
        </div>
        <div class="flex mb-24">
          <div class="circle-grey mt-14 mr-16"></div>
          <div class="now">
            <p class="text-md">2016 - 2015</p>
            <p class="text-md-bold">{{ $t('about_page.steps.visual_designer') }}</p>
          <p class="text-sm">{{ $t('about_page.steps.the_diner') }}</p>
          </div>
        </div>
        <div class="flex mb-24">
          <div class="circle-grey mt-14 mr-16"></div>
          <div class="now">
            <p class="text-md">2015 - 2014</p>
            <p class="text-md-bold">{{ $t('about_page.steps.eu_bachelor') }}</p>
          <p class="text-sm" v-html="$t('about_page.steps.epac')"></p>
          </div>
        </div>
        <div class="flex">
          <div class="circle-grey mt-14 mr-16"></div>
          <div class="now">
            <p class="text-md">2013 - 2010</p>
            <p class="text-md-bold">{{ $t('about_page.steps.cd') }}</p>
          <p class="text-sm">{{ $t('about_page.steps.mcu') }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="skil_tree container">
      <h2 class="mb-16">{{ $t('about_page.skill_tree.title') }}</h2>
      <div class="row mb-48">
        <div class="col-xl-2 col-md-3 col-4 text-align-center">
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/figma.png"
            class="figure-img img-fluid"
            style="width: 100px"
            alt="..."
          />
          <p class="text-sm-bold text-align-center">Figma</p>
        </div>
        <div class="col-xl-2 col-md-3 col-4 text-align-center">
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/sketch.png"
            class="figure-img img-fluid"
            style="width: 100px"
            alt="..."
          />
          <p class="text-sm-bold text-align-center">Sketch</p>
        </div>
        <div class="col-xl-2 col-md-3 col-4 text-align-center">
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/HTML.png"
            class="figure-img img-fluid"
            style="width: 100px"
            alt="..."
          />
          <p class="text-sm-bold text-align-center">HTML</p>
        </div>
        <div class="col-xl-2 col-md-3 col-4 text-align-center">
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/CSS.png"
            class="figure-img img-fluid"
            style="width: 100px"
            alt="..."
          />
          <p class="text-sm-bold text-align-center">CSS</p>
        </div>
        <div class="col-xl-2 col-md-3 col-4 text-align-center">
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/JavaScript.png"
            class="figure-img img-fluid"
            style="width: 100px"
            alt="..."
          />
          <p class="text-sm-bold text-align-center">JavaScript ( {{ $t('about_page.skill_tree.learning') }} )</p>
        </div>
        <div class="col-xl-2 col-md-3 col-4 text-align-center">
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/Sass.png"
            class="figure-img img-fluid"
            style="width: 100px"
            alt="..."
          />
          <p class="text-sm-bold text-align-center">Sass</p>
        </div>
        <div class="col-xl-2 col-md-3 col-4 text-align-center">
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/Bootstrap.png"
            class="figure-img img-fluid"
            style="width: 100px"
            alt="..."
          />
          <p class="text-sm-bold text-align-center">Bootstrap</p>
        </div>
        <div class="col-xl-2 col-md-3 col-4 text-align-center">
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/Photoshop.png"
            class="figure-img img-fluid"
            style="width: 100px"
            alt="..."
          />
          <p class="text-sm-bold text-align-center">Photoshop</p>
        </div>
        <div class="col-xl-2 col-md-3 col-4 text-align-center">
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/Illustrator.png"
            class="figure-img img-fluid"
            style="width: 100px"
            alt="..."
          />
          <p class="text-sm-bold text-align-center">Illustrator</p>
        </div>
        <div class="col-xl-2 col-md-3 col-4 text-align-center">
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/Adobe+Xd.png"
            class="figure-img img-fluid"
            style="width: 100px"
            alt="..."
          />
          <p class="text-sm-bold text-align-center">Adobe Xd</p>
        </div>
        <div class="col-xl-2 col-md-3 col-4 text-align-center">
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/After+Effect.png"
            class="figure-img img-fluid"
            style="width: 100px"
            alt="..."
          />
          <p class="text-sm-bold text-align-center">After Effect</p>
        </div>
        <div class="col-xl-2 col-md-3 col-4 text-align-center">
          <img
            src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/premiere.png"
            class="figure-img img-fluid"
            style="width: 100px"
            alt="..."
          />
          <p class="text-sm-bold text-align-center">Premiere</p>
        </div>
      </div>
    </section>
    <section class="NNgroup container">
      <div class="row mb-48">
        <div class="col-md-6 content-pr-48 mb-48">
          <h2 class="mb-16">{{ $t('about_page.nngroup.title') }}</h2>
          <p class="text-md">
            {{ $t('about_page.nngroup.text') }}
          </p>
        </div>
        <div class="col-md-6 flex-center column content-pl-48">
          <figure class="figure mb-16 flex-center">
            <img
              src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/nngroup.png"
              class="figure-img img-fluid"
              width="200px"
              alt="..."
            />
          </figure>
          <div class="emoji flex-center">
            <figure class="figure">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/heart.png"
                class="figure-img img-fluid mr-24"
                width="40px"
                alt="..."
              />
            </figure>
            <figure class="figure">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/chicken.png"
                class="figure-img img-fluid mr-24"
                width="40px"
                alt="..."
              />
            </figure>
            <figure class="figure">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/soup.png"
                class="figure-img img-fluid"
                width="40px"
                alt="..."
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section class="switzerland container">
      <div class="row mb-48">
        <div class="col-md-6 content-pr-48 mb-48">
          <h2 class="mb-16">{{ $t('about_page.la_suisse.title') }}</h2>
          <p class="text-md">
             {{ $t('about_page.la_suisse.text') }}
          </p>
        </div>
        <div class="col-md-6 flex-center column content-pl-48">
          <figure class="figure mb-24 flex-center">
            <img
              src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/swiss-flag.png"
              class="figure-img img-fluid"
              width="90px"
              alt="..."
            />
          </figure>
          <div class="emoji flex-center">
            <figure class="figure">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/book.png"
                class="figure-img img-fluid mr-24"
                width="40px"
                alt="..."
              />
            </figure>
            <figure class="figure">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/artist-palette.png"
                class="figure-img img-fluid mr-24"
                width="40px"
                alt="..."
              />
            </figure>
            <figure class="figure">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/student.png"
                class="figure-img img-fluid mr-24"
                width="40px"
                alt="..."
              />
            </figure>
            <figure class="figure">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/speech-balloon.png"
                class="figure-img img-fluid mr-24"
                width="40px"
                alt="..."
              />
            </figure>
            <figure class="figure">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/france.png"
                class="figure-img img-fluid mr-24"
                width="40px"
                alt="..."
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section class="side_project container">
      <div class="row">
        <div class="col-md-6 content-pr-48 mb-48">
          <h2 class="mb-16">{{ $t('about_page.side_project.title') }}</h2>
          <p class="text-md">
            {{ $t('about_page.side_project.text') }}
          </p>
        </div>
        <div class="col-md-6 flex-center column content-pl-48">
          <figure class="figure mb-24 flex-center">
            <img
              src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/app-icon.png"
              class="figure-img img-fluid"
              width="90px"
              alt="..."
            />
          </figure>
          <div class="emoji flex-center">
            <figure class="figure">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/muscle.png"
                class="figure-img img-fluid mr-24"
                width="40px"
                alt="..."
              />
            </figure>
            <figure class="figure">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/relex-w.png"
                class="figure-img img-fluid mr-24"
                width="40px"
                alt="..."
              />
            </figure>
            <figure class="figure">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/relex-m.png"
                class="figure-img img-fluid mr-24"
                width="40px"
                alt="..."
              />
            </figure>
            <figure class="figure">
              <img
                src="https://ednasportfolio.s3.ap-northeast-1.amazonaws.com/about/phone.png"
                class="figure-img img-fluid mr-24"
                width="40px"
                alt="..."
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section class="connect-section">
      <div class="container">
        <div class="connection-area">
          <p class="text-md-bold mb-16 say-hi">
            {{ $t('meeting.title') }}
          </p>
          <div class="row connect-way">
            <div class="mail mb-8 col-sm-6 content-pl-48 mobile-mb-24">
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
export default {};
</script>

<style lang="scss" src="../styles/about.scss"></style>
