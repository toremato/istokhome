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
          <span class="subtitle-1 grey--text">Алматы</span>
          <!-- </v-card> -->
        </v-col>
        <v-col class="d-flex justify-end py-4">
          <v-btn :block="isMobile" depressed rounded class="primary text-none">Редактировать профиль</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="section mt-6">
      <v-tabs centered class="d-flex flex-column justify-center">
        <!-- <v-tab :ripple="false">обзор</v-tab> -->
        <v-tab>обзор</v-tab>
        <v-tab>проекты</v-tab>
        <v-tab>отзывы</v-tab>
        <v-tab>услуги</v-tab>
        <!-- <v-divider></v-divider> -->
        <v-tab-item>
          <h4>Обзор</h4>
        </v-tab-item>
        <v-tab-item>
          <nuxt-link to="/new-project" class="logo-link">
            <v-btn>Добавить проект</v-btn>
          </nuxt-link>
        </v-tab-item>
        <v-tab-item>
          <h4>Ещё никто не оставил отзыва о вас</h4>
        </v-tab-item>
        <v-tab-item>
          <h4>Услуги</h4>
        </v-tab-item>
      </v-tabs>
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
      false: false
    }
  },
  components: {},
  computed: {
    ...mapState({
      performer: (state) => state.performer.self
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
  }
}
</script>

<style lang="scss" scoped>
.section {
  background: #fff;
  border-radius: 10px;
}
.v-window-item {
  height: 400px;
}
</style>
