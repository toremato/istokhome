<template>
  <v-container>
    <v-container class="section">
      <v-row no-gutters>
        <v-col class="d-flex justify-center align-center" sm="3" md="2">
          <v-avatar
            color="grey lighten-1"
            height="125"
            width="125"
            class="d-flex flex-column justify-center py-4"
          >
            <v-icon size="50" color="white">fas fa-user</v-icon>
            <!-- <span class="white--text caption">Изменить</span> -->
          </v-avatar>
        </v-col>
        <v-col class="d-flex flex-column justify-space-between py-4">
          <!-- <v-card class="d-flex flex-column justify-center"> -->
          <span class="display-1 font-weight-bold">{{ performer.name }}</span>
          <div>
            <span class="subtitle-1 mr-12">{{ performer.sub_performer_category.name }}</span>
            <span class="subtitle-1 grey--text">{{ performer.city.name }}</span>
          </div>
          <!-- </v-card> -->
        </v-col>
        <v-col class="d-flex justify-end py-4">
          <v-btn :block="isMobile" @click="testButton" depressed rounded class="primary text-none">Редактировать профиль</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="section mt-6 pa-0">
      <v-tabs
        v-model="active"
        centered
        class="d-flex flex-column justify-center"
      >
        <!-- <v-tab :ripple="false">обзор</v-tab> -->
        <v-tab>обзор</v-tab>
        <v-tab>проекты</v-tab>
        <v-tab>отзывы</v-tab>
        <v-tab>услуги</v-tab>
      </v-tabs>
      <v-divider class="mb-6"></v-divider>
      <v-tabs-items v-model="active">
        <v-tab-item>
          <v-col cols="8" class="mx-auto">
            <p class="common-tab-title mb-7 mt-5">
              Заполненность профиля:
              <span style="color: #1A1A1A">Начинающий</span>
            </p>
            <!-- <v-divider dark></v-divider> -->
            <v-progress-linear
              :value="progressValue"
              height="15px"
              color="#208F5A"
              rounded
            >
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-col>
        </v-tab-item>
        <v-tab-item>
          <!--          <nuxt-link to="/new-project" class="logo-link">-->
          <!--            <v-btn>Добавить проект</v-btn>-->
          <!--          </nuxt-link>-->
          <v-col v-if="projects.length" cols="8" class="mx-auto">
            <p class="mb-2">Количество проектов:<span>3</span></p>
            <v-card
              v-for="project in projects"
              :key="project.id"
              class="d-flex mx-auto mb-7"
            >
              <v-container>
                <v-row>
                  <v-col cols="auto">
                    <v-img
                      :src="require('assets/images/project_image.svg')"
                      height="125"
                      width="125"
                      contain
                      class="ml-2"
                    />
                  </v-col>
                  <v-col class="py-0">
                    <v-row
                      class="flex-column ma-0 fill-height"
                      justify="center"
                    >
                      <v-col class="pb-0 mb-2">
                        <div class="d-flex justify-space-between">
                          <p v-text="project.name"></p>
                          <div class="d-flex project-edit-link">
                            <v-icon class="pb-1" small>mdi-lead-pencil</v-icon>
                            <p class="mb-0 ml-1">Редактировать</p>
                          </div>
                        </div>
                      </v-col>
                      <v-col class="py-0">
                        <v-row>
                          <v-col cols="auto" class="v-card-first-row py-0">
                            <v-rating
                              :value="0"
                              color="amber"
                              half-increments
                              small
                              dense
                              class="ml-n1 mb-3"
                            />
                            <div class="d-flex">
                              <div class="mr-3">
                                <p class="card-info-name mb-3">Категория:</p>
                                <p class="card-info-name mb-2">Стоимость:</p>
                              </div>
                              <div>
                                <p
                                  v-text="project.sub_project_category.name"
                                  class="card-info-answer mb-3"
                                />
                                <p
                                  v-text="project.price + ' тг'"
                                  class="card-info-answer mb-2"
                                />
                              </div>
                            </div>
                          </v-col>
                          <v-col cols="auto" class="py-0">
                            <div class="d-flex mb-3">
                              <v-icon small color="red">mdi-heart</v-icon>
                              <p class="ml-2">0</p>
                            </div>
                            <div class="d-flex">
                              <div class="mr-3">
                                <p class="card-info-name mb-3">Заказов:</p>
                                <p class="card-info-name mb-2">Переходов:</p>
                              </div>
                              <div>
                                <p v-text="0" class="card-info-answer mb-3" />
                                <p v-text="0" class="card-info-answer mb-2" />
                              </div>
                            </div>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col v-else cols="3" class="mx-auto clickable">
            <div @click="goToCreate()" class="no-projects mx-auto">
              <v-img
                :src="require('assets/images/plus_icon.svg')"
                class="mx-auto no-project-icon"
                width="31"
                height="31"
              />
              <p class="new-project-card-text">Новый проект</p>
            </div>
          </v-col>
        </v-tab-item>
        <v-tab-item>
          <h4>Ещё никто не оставил отзыва о вас</h4>
        </v-tab-item>
        <v-tab-item>
          <h4>Услуги</h4>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
    <v-container class="common-block mb-4">
      <v-col cols="8" class="mx-auto">
        <v-row>
          <div @click="goToCreate()" class="no-projects-common mr-10 clickable">
            <v-img
              :src="require('assets/images/plus_icon.svg')"
              class="mx-auto no-project-icon"
              width="31"
              height="31"
            />
            <p class="new-project-card-text">Новый проект</p>
          </div>
          <div class="premium">
            <v-img
              :src="require('assets/images/bookmark_icon.svg')"
              class="mx-auto no-project-icon"
              width="31"
              height="31"
            />
            <p class="premium-text">Стать премиум</p>
          </div>
        </v-row>
      </v-col>
    </v-container>
    <v-container class="address-block mb-4">
      <v-col cols="8" class="mx-auto">
        <v-row>
          <div class="name">
            <p class="mb-2">Регионы обслуживания:</p>
            <p class="mb-2">Награды:</p>
            <p>Адрес:</p>
          </div>
          <div class="address">
            <p class="mb-2">Алматы, Караганда,нур-султан</p>
            <p class="mb-2">Награда 1, Награда 2, Награда 3</p>
            <p>
              проспект Аль-Фараби 19к2Б<br />
              050000 Алматы<br />
              Россия<br />
              +7-7473170747
            </p>
          </div>
        </v-row>
      </v-col>
    </v-container>

    <!-- <v-container>
      <v-row class="mb-6" no-gutters>
        <v-col
          v-for="n in 2"
          :key="n"
          :lg="cols[n - 1]"
          :md="6"
          :sm="cols[n - 1]"
        >
          <v-card class="pa-2" outlined tile> col-{{ cols[n - 1] }} </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col v-for="n in 3" :key="n" cols="sm">
          <v-card class="pa-2" outlined tile>
            col
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->
    <v-container fluid>
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <!-- <v-row>
        <v-col cols="12" md="8">
          <v-card class="pa-2" outlined tile>
            .col-12 .col-md-8
          </v-card>
        </v-col>
        <v-col cols="6" md="4">
          <v-card class="pa-2" outlined tile>
            .col-6 .col-md-4
          </v-card>
        </v-col>
      </v-row> -->

      <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
      <!-- <v-row>
        <v-col v-for="n in 3" :key="n" cols="6" md="4">
          <v-card class="pa-2" outlined tile>
            .col-6 .col-md-4
          </v-card>
        </v-col>
      </v-row> -->

      <!-- Columns are always 50% wide, on mobile and desktop -->
      <!-- <v-row>
        <v-col v-for="n in 2" :key="n" cols="6">
          <v-card class="pa-2" outlined tile>
            .col-6
          </v-card>
        </v-col>
      </v-row> -->
    </v-container>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      false: false,
      active: 0,
      progressValue: 60,
      proj: [
        {
          id: 1,
          title: 'Кухня Лофт стиль',
          rating: 4.5,
          category: 'Ванная',
          price: '23 990',
          order: '20 000',
          transitions: '20 000/мес',
          src: ''
        },
        {
          id: 2,
          title: 'Кухня Лофт стиль',
          rating: 4.5,
          category: 'Ванная',
          price: '23 990',
          order: '20 000',
          transitions: '20 000/мес',
          src: ''
        }
      ]
    }
  },
  computed: {
    ...mapState({
      performer: (state) => state.performer.self,
      projects: (state) => state.performer.projects
      // city: (state) => state.performer.cities.find(city => city.id === state.performer.self.city).name,
      // city: (state) => state.performer.cities.find( t => t.id === 1 ),
      // category: (state) => state.categories.performer.find(cat => cat.id > 71).name
    }),
    isMobile() {
      const { smAndDown } = this.$vuetify.breakpoint
      return smAndDown
    }
  },
  mounted() {
    setTimeout(() => {
      console.log('THIS', this.$store.state)
    }, 1000)
  },
  methods: {
    testButton() {
      console.log('STATE: ', this.$store.state)
    },
    goToCreate() {
      this.$router.push('/new-project')
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  background: #fff;
  border-radius: 10px;
  .v-tabs {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .v-window {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}
.v-window-item {
  min-height: 140px;
}
p {
  margin: 0;
}
.v-card-first-row {
  margin-right: 10%;
}
.project-edit-link {
  font-size: 0.875rem;
  color: #808080;
}
.card-info-name {
  color: #808080;
}
.premium {
  text-align: center;
  border-radius: 10px;
  width: 239px;
  height: 181px;
  background-color: rgba(216, 64, 11, 0.08);
  padding-top: 7%;
  margin-top: 0.7rem;
}
.no-projects {
  text-align: center;
  border-radius: 10px;
  width: 239px;
  height: 181px;
  background-color: #ebecec;
  padding-top: 20%;
  margin-top: 0.7rem;
}
.no-projects-common {
  text-align: center;
  border-radius: 10px;
  width: 239px;
  height: 181px;
  background-color: #ebecec;
  padding-top: 7%;
  margin-top: 0.7rem;
}
.no-project-icon {
  margin-bottom: 14.36%;
}
.new-project-card-text {
  font-size: 0.875rem;
  color: #808080;
  margin-bottom: 22.65%;
}
.common-tab-title {
  color: #808080;
}
.common-block {
  margin-top: 2rem;
  border-radius: 10px;
  background-color: white;
  height: 15rem;
}
.premium-text {
  font-size: 0.875rem;
  color: #d8400b;
  margin-bottom: 22.65%;
}
.name {
  color: #808080;
  margin-right: 10%;
}
.address-block {
  margin-top: 2rem;
  border-radius: 10px;
  background-color: white;
  height: 13rem;
}
</style>
