<template>
  <!-- <div class="test px-12"> -->
    <!-- <div class="test2 mx-12 d-flex justify-space-around align-center"> -->
      <!-- <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
        porro, dicta, fugiat eum dolores officiis doloribus culpa cum laboriosam
        qui ut ratione nobis ipsa numquam modi quia consequuntur! Sed,
        accusantium!
      </p> -->
      <v-container fluid class="test d-flex align-center">
        <v-row class="d-flex justify-content-center align-start">
          <v-spacer />
          <div class="form-wrapper py-7 px-7">
            <v-form class="auth-form">
              <h3 class="mb-4">Регистрация</h3>
              <v-text-field outlined flat dense label="Фамилия" v-model="formRegister.last_name"></v-text-field>
              <v-text-field outlined flat dense label="Имя" v-model="formRegister.first_name"></v-text-field>
              <v-text-field outlined flat dense label="Email" v-model="formRegister.email"></v-text-field>
              <v-text-field outlined flat dense label="Телефон" v-model="formRegister.phone"></v-text-field>
          <v-text-field
            :append-icon="showSignupPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showSignupPassword = !showSignupPassword"
            :type="showSignupPassword ? 'text' : 'password'"
            v-model="formRegister.password"
            outlined
            flat
            dense
            label="Пароль"
          ></v-text-field>
              <v-btn class="primary subtitle-1 text-capitalize" depressed rounded block @click.prevent="register">Зарегистрироваться</v-btn>
            </v-form>
          </div>
          <v-spacer />

          <div class="form-wrapper py-8 px-8">
            <v-form class="auth-form">
              <h3 class="mb-4">Авторизация</h3>
              <v-text-field outlined flat dense label="Телефон" v-model="formLogin.username"></v-text-field>
          <v-text-field
            :append-icon="showLoginPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showLoginPassword = !showLoginPassword"
            :type="showLoginPassword ? 'text' : 'password'"
            v-model="formLogin.password"
            outlined
            flat
            dense
            label="Пароль"
          ></v-text-field>
              <v-btn class="primary subtitle-1 text-capitalize" depressed rounded block @click.prevent="login">Войти</v-btn>
            </v-form>
          </div>
          <v-spacer />
          <!-- <form @submit.prevent="login">
            <input type="text" />
            <input type="password" />
            <input type="submit" value="Login" />
          </form> -->
        </v-row>
      </v-container>
    <!-- </div> -->
  <!-- </div> -->
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    // Logo,
    // VuetifyLogo
  },
  data() {
    return {
      showLoginPassword: false,
      showSignupPassword: false,
      formRegister: {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: ''
      },
      formLogin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      // console.log('login')

      this.$store.dispatch('auth/login', { ...this.formLogin })
    },
    register() {
      this.$store.dispatch('auth/register', { ...this.formRegister })
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  height: calc(100vh - 56px);
  // width: 100vw;
  // position: absolute;
  // left: 0;
  // top: 0;
  background-image: url('/bg2.svg');
  background-size: cover;
  // background-repeat: no-repeat;
}
.test2 {
  // background: #fff;
  // height: 100%;
}
.auth-form {
  // background: yellow;
  // height: auto;
  // display: flex;
}
.form-wrapper {
  width: 400px;
  border-radius: 1rem;
  background: #fff;
}
button.primary {
  font-size: 12px;
}
</style>
