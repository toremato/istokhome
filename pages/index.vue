<template>
  <v-container fluid class="pa-0">
    <!-- <v-img :src="require('assets/images/main_bg.svg')" class="welcome-section"></v-img> -->
    <div class="welcome-section d-flex flex-column justify-center">
      <v-container class="d-flex flex-column align-center">
        <h1 class="white--text text-center display-2 font-weight-bold my-12">Лучшие дизайнеры, архитекторы и <br> мастера ремонта</h1>
        <div class="d-flex mt-12" :class="isMobile ? 'welcome-search-mobile' : 'welcome-search'">
          <v-text-field hide-details full-width solo flat placeholder="Дизайн спальной комнаты..."></v-text-field>
          <div class="search-icon-wrapper d-flex align-center px-4"><v-icon medium>mdi-magnify</v-icon></div>
        </div>
      </v-container>
    </div>
    <v-container>
      <h1 class="mt-7">Как это работает</h1>
      <h3 class="grey--text">Начните в 3 простых шага</h3>
      <v-row>
        <v-col cols="12" md="4">
          <v-img :src="require('assets/images/how_it_works_1.svg')" class="mb-3"></v-img>
          <div class="d-flex align-start">
            <h3 class="grey--text mr-2">1.</h3>
            <h4 class="font-weight-medium">Найдите вдохновение и выберите понравившийся дизайн</h4>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <v-img :src="require('assets/images/how_it_works_2.svg')" class="mb-3"></v-img>
          <div class="d-flex align-start">
            <h3 class="grey--text mr-2">2.</h3>
            <h4 class="font-weight-medium">Посмотрите портфолио автора и напишите ему</h4>
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <v-img :src="require('assets/images/how_it_works_3.svg')" class="mb-3"></v-img>
          <div class="d-flex align-start">
            <h3 class="grey--text mr-2">3.</h3>
            <h4 class="font-weight-medium">Наймите профессионала и оставьте отзыв о его работе</h4>
          </div>
        </v-col>
      </v-row>
      <h1 class="mt-9">Лучшие подборки для вас</h1>
      <h3 class="grey--text my-3">Посмотрите тысячи красивых работ</h3>
      <v-row class="mb-7">
        <v-col cols="6" sm="6" md="3">
          <v-img :src="require('assets/images/best_works_1.svg')" class="d-flex align-center">
            <h3 class="text-center white--text">Кухня</h3>
          </v-img>
        </v-col>
        <v-col cols="6" sm="6" md="3">
          <v-img :src="require('assets/images/best_works_2.svg')" class="d-flex align-center">
            <h3 class="text-center white--text">Ванные комнаты</h3>
          </v-img>
        </v-col>
        <v-col cols="6" sm="6" md="3">
          <v-img :src="require('assets/images/best_works_3.svg')" class="d-flex align-center">
            <h3 class="text-center white--text">Спальни</h3>
          </v-img>
        </v-col>
        <v-col cols="6" sm="6" md="3">
          <v-img :src="require('assets/images/best_works_4.svg')" class="d-flex align-center">
            <h3 class="text-center white--text">Офисы</h3>
          </v-img>
        </v-col>
      </v-row>
      <v-img :src="require('assets/images/safe_payment.svg')"></v-img>
      <h1 class="mt-9">Услуги</h1>
      <h3 class="grey--text my-3">Посмотрите тысячи красивых работ</h3>
      <v-row>
        <v-col class="d-flex flex-column justify-space-between">
          <div>
            <v-img :src="require('assets/images/services_1.svg')">
              <h2 class="text-center white--text mt-6">Дизайн проекта</h2>
            </v-img>
          </div>
          <div>
            <v-img :src="require('assets/images/services_2.svg')">
              <h2 class="text-center white--text mt-6">Ремонт и отделка</h2>
            </v-img>
          </div>
        </v-col>
        <v-col>
          <v-img :src="require('assets/images/services_3.svg')">
            <h2 class="text-center white--text mt-12">Проектирование</h2>
          </v-img>
        </v-col>
        <v-col class="d-flex flex-column justify-space-between">
          <div>
            <v-img :src="require('assets/images/services_4.svg')">
              <h2 class="text-center white--text mt-6">Схемы и чертежи</h2>
            </v-img>
          </div>
          <div>
            <v-img :src="require('assets/images/services_5.svg')">
              <h2 class="text-center white--text mt-6">Визуализация</h2>
            </v-img>
          </div>
        </v-col>
      </v-row>
      <h1 class="mt-9">Лучшие профессионалы для вас</h1>
      <h3 class="grey--text my-3">Лучшие мастера для вашего проекта</h3>
      <v-row>
        <v-col cols="6" md="3">
          <v-card flat class="pa-4 profs_card">
            <h4>Алина Бабаева</h4>
            <h5 class="grey--text subtitle-2 mb-3">Интерьер дизайнер</h5>
            <v-img :src="require('assets/images/profs_1.svg')"></v-img>
            <v-img :src="require('assets/images/profs_2.svg')" class="my-3"></v-img>
            <h5 class="primary--text text-center">Посмотреть портфолио</h5>
          </v-card>
        </v-col>
        <v-col cols="6" md="3">
          <v-card flat class="pa-4 profs_card">
            <h4>Алина Бабаева</h4>
            <h5 class="grey--text subtitle-2 mb-3">Интерьер дизайнер</h5>
            <v-img :src="require('assets/images/profs_3.svg')"></v-img>
            <v-img :src="require('assets/images/profs_4.svg')" class="my-3"></v-img>
            <h5 class="primary--text text-center">Посмотреть портфолио</h5>
          </v-card>
        </v-col>
        <v-col cols="6" md="3">
          <v-card flat class="pa-4 profs-card">
            <h4>Алина Бабаева</h4>
            <h5 class="grey--text subtitle-2 mb-3">Интерьер дизайнер</h5>
            <v-img :src="require('assets/images/profs_5.svg')"></v-img>
            <v-img :src="require('assets/images/profs_6.svg')" class="my-3"></v-img>
            <h5 class="primary--text text-center">Посмотреть портфолио</h5>
          </v-card>
        </v-col>
        <v-col cols="6" md="3">
          <v-card flat class="pa-4 profs_card">
            <h4>Алина Бабаева</h4>
            <h5 class="grey--text subtitle-2 mb-3">Интерьер дизайнер</h5>
            <v-img :src="require('assets/images/profs_1.svg')"></v-img>
            <v-img :src="require('assets/images/profs_1.svg')" class="my-3"></v-img>
            <h5 class="primary--text text-center">Посмотреть портфолио</h5>
          </v-card>
        </v-col>
      </v-row>
      <h1 class="mt-9">Отзывы</h1>
      <h3 class="grey--text my-3">Отзывы могут помочь вам с выбором</h3>
      <v-row>
        <v-col cols="12" md="6">
          <v-card flat class="reviews-card pa-5 pt-7">
            <h4>Алина Бабаева</h4>
            <div class="d-flex align-end mb-3">
              <v-rating color="amber" :value="4.5" half-increments small dense class="ml-n1"></v-rating>
              <span class="body-2 ml-1">4.5</span>
            </div>
            <p class="body-2 font-weight-thin grey--text text--darken-2">
              First off, the display is lovely, it's an IPS LCD screen, this by
              far is not the best screen on the market but this phone has done a
              great job in keeping the colors rich and bright. The size of the
              screen is perfect for watching videos. I spend a lot of time on
              youtube and other streaming sites and because of the screen I rely
              on msaid videos.
            </p>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card flat class="reviews-card pa-5 pt-7">
            <h4>Алина Бабаева</h4>
            <div class="d-flex align-end mb-3">
              <v-rating color="amber" :value="4.5" half-increments small dense class="ml-n1"></v-rating>
              <span class="body-2 ml-1">4.5</span>
            </div>
            <p class="body-2 font-weight-thin grey--text text--darken-2">
              First off, the display is lovely, it's an IPS LCD screen, this by
              far is not the best screen on the market but this phone has done a
              great job in keeping the colors rich and bright. The size of the
              screen is perfect for watching videos. I spend a lot of time on
              youtube and other streaming sites and because of the screen I rely
              on msaid videos.
            </p>
          </v-card>
        </v-col>
      </v-row>
      <v-container class="discount-section py-6 px-12 my-12">
        <v-row>
          <v-spacer></v-spacer>
          <v-col md="5">
            <v-card flat class="pa-6">
              <h3>Получи скидку на первую заявку</h3>
              <span class="body-2 font-weight-thin grey--text text--darken-2">Напиши свой email адрес и мы отправим промокод на почту</span>
              <v-text-field outlined dense flat placeholder="Введите email" class="mt-6"></v-text-field>
              <div class="d-flex justify-end">
                <v-btn rounded depressed class="primary text-none body-2 px-6">Получить промокод</v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>
<script>
export default {
  computed: {
    isMobile() {
      const { smAndDown } = this.$vuetify.breakpoint
      return smAndDown
    }
  }
}
</script>
<style lang="scss" scoped>
.welcome-section {
  background: url('~assets/images/main_bg.svg') no-repeat;
  background-size: cover;
  height: calc(100vh - 56px);

  .welcome-search {
    // width: 800px;
    width: 70%;
  }
  .welcome-search-mobile {
    width: 95%;
  }
  .search-icon-wrapper {
    background: #fff;
    cursor: pointer;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}
.profs-card,
.reviews-card {
  border-radius: 10px !important;
  cursor: pointer;
}
.discount-section {
  background: url("~assets/images/discount_bg.svg") no-repeat;
  background-size: cover;
}
.discount-section,
.discount-card {
  border-radius: 10px !important;
}
</style>
<style lang="scss">
.welcome-search,
.welcome-search-mobile {
  .v-input__slot {
    // background: red !important;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 1px solid rgba(40, 47, 54, 0.15);
  }
}
</style>
