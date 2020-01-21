<template>
  <v-container fluid>
    <v-container>
      <v-row justify="center" class="main-wrapper py-7 mx-1">
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
              <span>Стоимость за кв/м(м²) *</span>
              <v-text-field
                v-model="project.price"
                dense
                outlined
                hide-details
                suffix="kzt"
                type="number"
                placeholder="Введите цену"
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
          <h4 class="grey--text text--darken-1">Фото проекта *</h4>
          <v-row>
            <v-col cols="3">
              <!-- <v-btn @click="pickImage">Добавить фото</v-btn> -->
              <v-img class="addPhoto" @click="pickImage" aspect-ratio="1.3333">
                <div class="d-flex flex-column align-center justify-space-around py-7 fill-height">
                  <span></span>
                  <v-icon>fas fa-camera</v-icon>
                  <span>Добавить фото</span>
                  </div>
              </v-img>
              <input
                ref="imagesInput"
                @change="onImagePicked"
                type="file"
                style="display: none"
                accept="image/*"
                multiple
              />
            </v-col>
            <v-col cols="3" v-for="(image, key) in images" :key="key">
              <div class="preview-image-wrapper">
                <v-img :ref="'image' + parseInt(key)" class="preview-image" aspect-ratio="1.3333"/>
              </div>
            </v-col>
          </v-row>
          <div class="d-flex justify-end mt-5">
            <v-btn
              @click="test"
              :ripple="false"
              :disabled="loading"
              text
              rounded
              class="text-capitalize primary--text"
              >Отменить</v-btn
            >
            <v-btn
              @click="createProject"
              :width="isMobile ? '' : '263'"
              :loading="loading"
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
      images: [],
      loading: false,
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
      this.loading = true
      this.$store.dispatch('performer/createProject', this.project).then((res) => {
          console.log('PROJECT? ', res)
          const imagesData = {
            images: this.images,
            id: res.id
          }
          if (!this.images.length) {
            this.loading = false
            this.$router.push({ path: 'partners/me' })
          } else {
            this.$store
              .dispatch('performer/uploadImages', imagesData)
              .then((res) => {
                console.log('New project: ', res)
                this.loading = false
                this.$router.push({ path: 'partners/me' })
              })
              .catch((err) => {
                console.error('New project error: ', err)
                this.loading = false
              })
          }
        })
    },
    pickImage() {
      this.$refs.imagesInput.click()
    },
    onImagePicked(event) {
      // this.images = event.target.files
      // this.images.push(event.target.files)
      const files = event.target.files

      console.log('FILES: ', files)
      for (let i = 0; i < files.length; i++) {
        this.images.push(files[i])
      }
      for (let i = 0; i < this.images.length; i++) {
        const reader = new FileReader()
        reader.addEventListener(
          'load',
          function() {
            // this.$refs['image' + parseInt(i)][0].src = reader.result
            this.$refs['image' + parseInt(i)][0].src = reader.result
          }.bind(this),
          false
        )

        reader.readAsDataURL(this.images[i])
      }
      console.log('Images: ', this.images)
    },
    test() {
      this.$store.dispatch('performer/getProjectImages')
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
.addPhoto {
  background: #ebecec;
  border-radius: 10px;
  cursor: pointer;
}
.preview-image-wrapper {
  border-radius: 10px;
  .preview-image {
    border-radius: 10px;
    border: 1px solid #808080;
  }
}
</style>
<style lang="scss">
.v-textarea textarea {
  padding: 0;
  margin: 0;
}
</style>
