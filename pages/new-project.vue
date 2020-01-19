<template>
  <v-container fluid>
    <v-container>
      <v-row justify="center" class="main-wrapper py-7 mx-1">
        <!-- <v-row> -->
        <v-col cols="10">
          <h3 class="pb-8">Новый проект</h3>
          <v-row>
            <v-col cols="12" sm="4">
              <span>Название *</span>
              <v-text-field
                v-model="project.name"
                dense
                outlined
                hide-details
                placeholder="Название проекта"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <span>Категория и услуга *</span>
              <v-select
                v-model="project.sub_project_category"
                :items="categories"
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
              <span>Стоимость *</span>
              <v-text-field
                v-model="project.price"
                dense
                outlined
                hide-details
                suffix="kzt"
                type="number"
                placeholder="Введите стоимость проекта"
              ></v-text-field>
            </v-col>
            <v-col>
              <span>Описание</span>
              <v-textarea
                v-model="project.description"
                hide-details
                outlined
                no-resize
                auto-grow
                clearable
                placeholder="Опишите компанию или себя"
                class="test"
              ></v-textarea>
            </v-col>
          </v-row>
          <h4 class="grey--text text--darken-1">Общие размеры</h4>
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                v-model="project.length"
                dense
                outlined
                hide-details
                type="number"
                placeholder="Длина(м)"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                v-model="project.width"
                dense
                outlined
                hide-details
                type="number"
                placeholder="Ширина(м)"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                v-model="project.height"
                dense
                outlined
                hide-details
                type="number"
                placeholder="Высота(м)"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                v-model="project.area"
                dense
                outlined
                hide-details
                type="number"
                placeholder="Площадь(м2)"
              ></v-text-field>
            </v-col>
          </v-row>
          <h4 class="grey--text text--darken-1">Общие размеры</h4>
          <v-row>
            <v-col cols="3">
              <v-card>add photo</v-card>
            </v-col>
          </v-row>
          <div class="d-flex justify-end mt-5">
            <v-btn
              :ripple="false"
              text
              rounded
              class="text-capitalize primary--text"
              >Отменить</v-btn
            >
            <v-btn
              @click="createProject"
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
export default {
  data() {
    return {
      name: 1,
      items: ['one', 'two', 'three'],
      project: {
        name: '',
        sub_project_category: null,
        price: null,
        description: '',
        length: null,
        width: null,
        height: null,
        area: null,
        city: null
      }
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories.project
    },
    isMobile() {
      const { smAndDown } = this.$vuetify.breakpoint
      return smAndDown
    }
  },
  methods: {
    createProject() {
      this.$store.dispatch('performer/createProject', this.project)
    }
  },
  mounted() {
    console.log('tr')
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
</style>
<style lang="scss">
.v-textarea textarea {
  padding: 0;
  margin: 0;
}
</style>
