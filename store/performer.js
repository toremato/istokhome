export const state = () => ({
})

export const getters = {
  getPerformer(state) {
    return state.self
  }
}

export const mutations = {
  SET_CITIES(state, cities) {
    state.cities = cities
  },
  SET_PERFORMER(state, performer) {
    state.self = performer
  },
  SET_PROJECTS(state, projects) {
    state.projects = projects
  }
}

export const actions = {
  createProject({ state, commit, dispatch }, project) {
    // console.log('STATE', this.state.auth.user.id)
    const token = localStorage.getItem('token')
    const performerId = this.state.performer.self.id
    // await this.$axios
    //   .$post('api/performer/performer/' + performerId + '/project/', project)
    //   .then((res) => {
    //     console.log('PROJECT CREATED', res)
    //   })
    //   .catch((err) => {
    //     console.error('ERROR', err.response)
    //   })

    return new Promise((resolve, reject) => {
      this.$axios
        .$post(
          'api/performer/performer/' + performerId + '/project/',
          project,
          {
            headers: { Authorization: 'Token ' + token }
          }
        )
        .then((res) => {
          console.log('PROJECT CREATED', res)
          dispatch('getProjects')
          resolve(res)
        })
        .catch((err) => {
          console.error('PROJECT CREATION ERROR: ', err.response)
          reject(err)
        })
    })
  },
  async getCities({ state, commit, dispatch }) {
    await this.$axios
      .$get('api/performer/cities/?limit=87')
      .then((res) => {
        console.log('CITIES LIST', res)
        commit('SET_CITIES', res.results)
        // commit('SET_CITIES')
      })
      .catch((err) => {
        console.error('ERROR', err.response)
      })
  },
  async createPerformer({ state, commit, dispatch }, newPerformer) {
    await this.$axios
      .post('api/performer/performer/', newPerformer)
      .then((res) => {
        console.log('PERFORMER RESPONSE: ', res)
        // commit('SET_PERFORMER', newPerformer)
        dispatch('getPerformer')
        this.$router.push({ name: 'partners-me' })
      })
      .catch((err) => {
        console.error('PERFORMER ERROR: ', err.response)
      })
  },
  getPerformer({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('api/performer/performer/')
        .then((res) => {
          commit('SET_PERFORMER', res.results[0])
          console.log('perfprMER: ', res.results[0])
          dispatch('getProjects')
          resolve(res)
        })
        .catch((err) => {
          console.error('REGISTRATION ERROR: ', err.response)
          reject(err)
        })
    })
  },
  async getProjects({ commit }) {
    const token = localStorage.getItem('token')
    const performerId = this.state.performer.self.id
    await this.$axios
      .get('api/performer/performer/' + performerId + '/project/', {
        headers: { Authorization: 'Token ' + token }
      })
      .then((res) => {
        console.log('List of projects: ', res.data.results)
        commit('SET_PROJECTS', res.data.results)
      })
      .catch((err) => {
        console.error('Projects error: ', err.response)
      })
  },
  uploadImages({ commit }, data) {
    const performerId = this.state.performer.self.id
    const token = localStorage.getItem('token')
    const images = data.images
    const projectId = data.id
    console.log('id 1: ', data)

    return new Promise((resolve, reject) => {
      console.log('id 2: ', data)
      for (let i = 0; i < images.length; i++) {
        const formData = new FormData()
        formData.append('image', images[i])
        this.$axios
          .post('api/performer/performer/' + performerId + '/project/' + projectId + '/image/', formData, {
              headers: { Authorization: 'Token ' + token }
            }
          )
          .then((res) => {
            console.log('UPLOADED IMAGE: ', res)
          })
          .catch((err) => {
            console.error('IMAGE UPLOAD ERROR: ', err.response)
            reject(err)
          })
      }
      resolve()
    })
  },
  async getProjectImages({ commit }, projectId) {
    const performerId = this.state.performer.self.id
    await this.$axios
      .get('api/performer/performer/' + performerId + '/project/' + projectId + '/image/', {
          headers: { Authorization: 'Token ' + localStorage.getItem('token') }
        }
      )
      .then((res) => {
        console.log('PROJECT IMAGES: ', res)
      })
      .catch((err) => {
        console.error(err.response)
      })
  }
}
