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
  async createProject({ state, commit, dispatch }, project) {
    // console.log('STATE', this.state.auth.user.id)
    const performerId = this.state.performer.self.id
    await this.$axios
      .$post('api/performer/performer/' + performerId + '/project/', project)
      .then((res) => {
        console.log('PROJECT CREATED', res)
      })
      .catch((err) => {
        console.error('ERROR', err.response)
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
        commit('SET_PERFORMER_INFO', newPerformer)
      })
      .catch((err) => {
        console.error('PERFORMER ERROR: ', err.response)
      })
  },
  getPerformer({ commit, dispatch }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get('api/performer/performer')
        .then((res) => {
          commit('SET_PERFORMER', res.results[0])
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
    const performerId = this.state.performer.self.id
    await this.$axios
      .get('api/performer/performer/' + performerId + '/project/')
      .then((res) => {
        console.log('List of projects: ', res.data.results)
        commit('SET_PROJECTS', res.data.results)
      })
      .catch((err) => {
        console.error('Projects error: ', err.response)
      })
  }
}
