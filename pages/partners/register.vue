<template>
  <v-container fluid>
    <v-container>
      <v-row justify="center" class="main-wrapper py-7 mx-1">
        <!-- <v-row> -->
        <v-col cols="10">
          <h3 class="pb-8 ml-2">
            Ваш аккаунт зарегистрирован, пожалуйста заполните информацию
          </h3>
          <v-row>
            <v-col cols="12" sm="4">
              <span>Название</span>
              <v-text-field
                v-model="newPerformer.name"
                dense
                outlined
                hide-details
                placeholder="Наименование компании/ФИО"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <span>Ваша категория</span>
              <v-select
                v-model="newPerformer.sub_performer_category"
                :items="performerCategories"
                item-text="name"
                item-value="id"
                :menu-props="{ offsetY: true }"
                hide-details
                outlined
                dense
                placeholder="Выберите категорию"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="4">
              <span>Город</span>
              <v-select
                v-model="newPerformer.city"
                :items="cities"
                item-text="name"
                item-value="id"
                :menu-props="{ offsetY: true }"
                hide-details
                outlined
                dense
                placeholder="Выберите город"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="4">
              <span>Веб сайт</span>
              <v-text-field
                v-model="newPerformer.site"
                dense
                outlined
                hide-details
                placeholder="Ссылка на ваш сайт"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <span>Номер телефона</span>
              <v-text-field
                v-model="newPerformer.phone"
                dense
                outlined
                hide-details
                type="number"
                placeholder="Контактный номер"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <span>Электронная почта</span>
              <v-text-field
                v-model="newPerformer.email"
                dense
                outlined
                hide-details
                placeholder="Почтовый ящик"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <span>Описание компании</span>
              <v-textarea
                v-model="newPerformer.description"
                hide-details
                outlined
                no-resize
                auto-grow
                clearable
                placeholder="Опишите компанию или себя"
              ></v-textarea>
            </v-col>
            <!-- <v-col cols="12">
              <span>Список регионов обслуживания</span>
              <v-textarea
                v-model="newPerformer.description"
                hide-details
                outlined
                no-resize
                auto-grow
                clearable
                placeholder="Введите регионы"
              ></v-textarea>
            </v-col> -->
            <v-col cols="12">
              <span>Награды</span>
              <v-textarea
                v-model="newPerformer.description"
                hide-details
                outlined
                no-resize
                auto-grow
                clearable
                placeholder="Введите свои достижния, сертификаты, грамоты и т.д"
              ></v-textarea>
            </v-col>
          </v-row>
          <!-- <h4 class="grey--text">Фото проекта</h4> -->
          <div class="d-flex justify-end mt-5">
            <v-btn
              :ripple="false"
              text
              rounded
              class="text-capitalize primary--text"
              >Отменить</v-btn
            >
            <v-btn
              @click="createPerformer"
              :width="isMobile ? '' : '263'"
              rounded
              depressed
              class="primary text-capitalize"
              >Сохранить</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      name: 1,
      items: ['one', 'two', 'three'],
      newPerformer: {
        name: null,
        sub_performer_category: null,
        description: null,
        working_regions: [],
        // reward: null,
        city: null,
        phone: null,
        email: null
        // site: null
      },
      address: null
    }
  },
  computed: {
    ...mapState({
      // performerCategories: 'categories/getPerformerCategories'
      cities: (state) => state.performer.cities,
      performerCategories: (state) => state.categories.performer,
    }),
    categories() {
      return [this.$store.state.categories.list]
    },
    isMobile() {
      const { smAndDown } = this.$vuetify.breakpoint
      return smAndDown
    }
  },
  methods: {
    createPerformer() {
      // const city = this.cities.find((c) => c.id === this.newPerformer.city)
      // console.log('CITY', city)
      
      this.newPerformer.working_regions[0] = this.newPerformer.city
      console.log('FORM', this.newPerformer)
      console.log('STATE', this.$store.state)
      this.$store.dispatch('performer/createPerformer', this.newPerformer)
    }
  }
}
</script>
<style lang="scss" scoped>
.main-wrapper {
  background: #fff;
}
.v-input {
  font-size: 14px;
}
.row > div {
  padding: 1.25rem;
}
</style>
<style lang="scss">
.v-textarea textarea {
  padding: 0;
  margin: 0;
}
</style>
