<template>
  <v-app>
    <!-- <v-app-bar clipped-left fixed flat app class="primary"> -->
    <v-app-bar flat app class="primary app-bar">
      <v-container>
        <v-toolbar flat class="primary p-0">
          <!-- <div tile> -->
          <!-- <v-row> -->
          <nuxt-link to="/" class="logo-link">
            <img id="logo" src="/logo_white.svg" alt="logo" />
          </nuxt-link>
          <!-- </div> -->
          <div v-if="!isMobile">
            <nuxt-link to="/" class="white--text ml-10 pt-1 font-weight-bold subtitle-2">КАТЕГОРИИ</nuxt-link>
            <nuxt-link to="/" class="white--text ml-10 pt-1 font-weight-bold subtitle-2">СПЕЦИАЛИСТЫ</nuxt-link>
            <!-- <nuxt-link to="/" class="white--text ml-10 pt-1 font-weight-bold subtitle-2">БЛОГ</nuxt-link> -->
          </div>
          <v-spacer></v-spacer>
          <nuxt-link to="/partners" class="white--text mr-4 pt-1 font-weight-bold subtitle-2">ИСПОЛНИТЕЛЯМ</nuxt-link>
          <!-- <nuxt-link to="/" class="mr-8">
            <v-icon small color="white">fas fa-envelope</v-icon>
          </nuxt-link>
          <nuxt-link to="/" class="mr-8">
            <v-icon small color="white">fas fa-search</v-icon>
          </nuxt-link> -->
          <nuxt-link to="/partners/me" class="d-flex">
            <!-- <span v-if="user">{{user.first_name}}</span> -->
          </nuxt-link>
          <v-menu open-on-hover offset-y>
            <template v-slot:activator="{ on }">
              <v-btn depressed color="primary" v-on="on">
                <v-icon small color="white">fas fa-user</v-icon>
                <h5 v-if="user" class="white--text ml-2">{{user.first_name}}</h5>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-if="user" class="d-flex flex-column">
                <v-btn text depressed color="primary text-none" @click="$router.push({ path: '/partners/me' })">Профиль</v-btn>
                <v-divider></v-divider>
                <v-btn color="primary" depressed @click="logout()">Выйти</v-btn>
              </v-list-item>
              <v-list-item v-else>
                <v-btn color="primary" depressed @click="login()">Войти</v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
          <!-- </v-row> -->
        </v-toolbar>
      </v-container>
    </v-app-bar>
    <v-content>
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>
    </v-content>
    <v-footer>
      <v-container>
        <v-row>
          <v-col cols="12" md="3" class="mr-8">
            <h3 class="mb-8">ISTOK HOME</h3>
            <div class="d-flex align-center">
              <v-icon class="mr-2">mdi-phone-in-talk</v-icon>
              <a class="footer-action-links grey--text" href="tel:+77771399977">+7 777 139 99 77</a>
            </div>
            <div class="mt-3">
              <v-icon class="mr-2">mdi-email</v-icon>
              <a class="footer-action-links grey--text" href=mailto:info@istokhome.сom>info@istokhome.сom</a>
            </div>
          </v-col>
          <v-col>
            <v-row>
              <v-col cols="12" md="3" class="py-0">
                <h4 class="mb-8">Компания</h4>
                <h6 class="footer-links">О нас</h6>
                <h6 class="footer-links">Контакты</h6>
                <h6 class="footer-links">Карьера</h6>
                <h6 class="footer-links">Блог</h6>
              </v-col>
              <v-col cols="12" md="3" class="py-0">
                <h4 class="mb-8">Исполнителям</h4>
                <h6 class="footer-links">Дизайнерам</h6>
                <h6 class="footer-links">Архитекторам</h6>
                <h6 class="footer-links">Декораторам</h6>
                <h6 class="footer-links">Строителям</h6>
                <h6 class="footer-links">Поставщикам</h6>
              </v-col>
              <v-col cols="12" md="3" class="py-0">
                <h4 class="mb-8">Помощь</h4>
                <h6 class="footer-links">FAQ</h6>
                <h6 class="footer-links">Пользовательское соглашение</h6>
              </v-col>
              <v-col cols="12" md="3" class="py-0">
                <h4 class="mb-8">Присоединяйся</h4>
                <div class="d-flex justify-space-between">
                  <v-img max-width="40" height="40" :src="require('assets/images/social_facebook.svg')" contain></v-img>
                  <v-img max-width="40" height="40" :src="require('assets/images/social_twitter.svg')" contain></v-img>
                  <v-img max-width="40" height="40" :src="require('assets/images/social_pinterest.svg')" contain></v-img>
                  <v-img max-width="40" height="40" :src="require('assets/images/social_instagram.svg')" contain></v-img>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-divider class="my-10"></v-divider>
        <span class="grey--text">&copy; 2019 ISTOKHOME</span>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user
    }),
    isMobile() {
      const { smAndDown } = this.$vuetify.breakpoint
      return smAndDown
    }
    // user() {
    //   console.log('COMPUTED', this.$store.state.auth.user)
    //   return this.$store.state.auth.user
    // }
  },
  async fetch({ store, params }) {
    console.log('IS THIS EVEN CALLED???')
    await store.dispatch('categories/getProjectCategories')
    await store.dispatch('categories/getPerformerCategoriedsfs')
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
      this.$router.push({ name: 'index' })
    },
    login() {
      this.$router.push({ name: 'login' })
    }
  },
  created() {
    console.log('Initializing app')
    console.log('USER', this.$store.state.auth.user)
    setTimeout(function() {
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
body {
  background: black;
}
a {
  // cursor: pointer;
  text-decoration: none;
}
#logo {
  width: 43px;
  object-fit: cover;
}
.footer-links {
  // color: rgba(40, 47, 54, 0.8);
  color: grey;
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 300;
  cursor: pointer;
}
</style>

<style lang="scss">
#app {
  background-color: #eee;
}
.app-bar .v-toolbar__content {
  padding: 0;
  .logo-link {
    height: 44px;
    // height: fit-content;
  }
}
.test-border {
  border: 1px solid red;
}
</style>
