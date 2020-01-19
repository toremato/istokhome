<template>
  <v-container fluid class="pa-0">
    <!-- <v-img :src="require('assets/images/main_bg.svg')" class="welcome-section"></v-img> -->
    <div class="welcome-section d-flex flex-column justify-center">
      <div>
        <v-container class="d-flex registration-wrapper" :class="isMobile ? 'align-center justify-center' : 'align-end justify-space-between'">
          <div v-if="!isMobile" class="order-md-last"><h1 class="text-right white--text font-weight-bold" :class="isMobile ? 'title' : 'display-2'">Покажите свое портфолио миллиону клиентов</h1></div>
          <v-card flat min-width="320" class="">
            <v-card-title class="pa-0 ma-6 mb-0">Зарегистрируйтесь <br> бесплатно</v-card-title>
            <v-window v-model="registrationStep">
              <v-window-item :value="1" class="pa-6">
                <v-text-field outlined flat dense label="Имя" v-model="formRegisterStepOne.first_name"></v-text-field>
                <v-text-field outlined flat dense label="Фамилия" v-model="formRegisterStepOne.last_name"></v-text-field>
                <v-text-field outlined flat dense label="Ваш email" v-model="formRegisterStepOne.email"></v-text-field>
                <v-text-field outlined flat dense label="Номер телефона" v-model="formRegisterStepOne.phone"></v-text-field>
                <v-text-field
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  :type="showPassword ? 'text' : 'password'"
                  v-model="formRegisterStepOne.password"
                  outlined
                  flat
                  dense
                  label="Придумайте пароль"
                ></v-text-field>
                <label class="checkbox-container caption py-0 mb-7">Я ознакомлен и принимаю <br> <span>Пользовательское соглашение</span> и <br> <span>Политику конфиденциальности</span>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <v-card-actions class="pa-0 d-flex justify-end">
                  <v-btn rounded block depressed :loading="registrationOngoing" class="primary text-none px-5" @click="registerUser">Зарегистрироваться</v-btn>
                </v-card-actions>
              </v-window-item>
              <!-- <v-window-item :value="2" class="pa-6">
                <v-text-field outlined color="grey" flat dense label="Категория" v-model="formRegisterStepOne.first_name"></v-text-field>
                <v-text-field outlined color="grey" flat dense label="Наименование компании/ФИО" v-model="formRegisterStepOne.last_name"></v-text-field>
                <v-card-actions class="pa-0 d-flex justify-end">
                  <v-btn rounded :block="registrationStep==2" depressed class="primary text-none px-5" @click="registerPerformer">Зарегистрироваться</v-btn>
                </v-card-actions>
              </v-window-item> -->
            </v-window>
          </v-card>
        </v-container>
      </div>
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
    </v-container>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      registrationStep: 1,
      formRegisterStepOne: {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: ''
      },
      formRegisterStepTwo: {},
      nextLabel: 'Далее',
      showPassword: false,
      registrationOngoing: false
    }
  },
  computed: {
    isMobile() {
      const { smAndDown } = this.$vuetify.breakpoint
      return smAndDown
    }
  },
  methods: {
    registerUser() {
      // this.registrationStep++
      this.registrationOngoing = true
      this.$store
        .dispatch('auth/register', { ...this.formRegisterStepOne })
        .then(() => {
          this.$router.push({ path: 'partners/register' })
        })
        .catch((err) => {
          console.error('ERROR', err.response)
          this.registrationOngoing = false
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.welcome-section {
  background: url('~assets/images/partners_bg.svg') no-repeat;
  background-size: cover;
  height: calc(100vh - 56px);

  .registration-wrapper {
    height: 100%;
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
  background: url('~assets/images/discount_bg.svg') no-repeat;
  background-size: cover;
}
.discount-section,
.discount-card {
  border-radius: 10px !important;
}

/* Customize the label (the container) */
.checkbox-container {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
  cursor: pointer;
  // font-size: 22px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: start;
  color: #1A1A1A;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  span {
    text-decoration: underline;
  }
}

/* Hide the browser's default checkbox */
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 1px solid rgba(40, 47, 54, 0.15);
  border-radius: 3px;
}

/* On mouse-over, add a grey background color */
.checkbox-container:hover input ~ .checkmark {
  background-color: #eee;
}

/* When the checkbox is checked, add a blue background */
.checkbox-container input:checked ~ .checkmark {
  background-color: #67AAD5;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
  left: 5.5px;
  top: 1px;
  width: 8px;
  height: 12px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
<style lang="scss">
</style>
