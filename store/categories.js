export const state = () => ({

})

export const mutations = {
  INIT_PROJECT_CATEGORIES(state, categories) {
    state.project = categories
  },
  INIT_PERFORMER_CATEGORIES(state, categories) {
    state.performer = categories
  }
}

export const getters = {
  getProjectCategories(state) {
    return state.project
  },
  getPerformerCategories(state) {
    return state.performer
  }
}

export const actions = {
  async getProjectCategories({ commit }) {
    await this.$axios
      .$get('api/category/sub-project/?limit=39')
      .then((res) => {
        console.log('Project categories: ', res)
        commit('INIT_PROJECT_CATEGORIES', res.results)
      })
      .catch((err) => {
        console.error(err.response)
      })
  },
  async getPerformerCategories({ commit, store }) {
    await this.$axios
      .$get('api/category/sub-performer/?limit=72')
      .then((res) => {
        console.log('Performer categories: ', res)
        commit('INIT_PERFORMER_CATEGORIES', res.results)
        console.log('STORE', this.state)
      })
      .catch((err) => {
        console.error(err.response)
      })
  }
}
