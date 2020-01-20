export const state = () => ({
  // state: {
    // token: null,
    // user: null
  // }
})

export const getters = {
  getUser(state) {
    return state.user
  }
}

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
    localStorage.setItem('token', token)
    // this.$axios.defaults.headers.common['header1'] = 'value'
    this.$axios.setToken('Token ' + token)
    console.log('AXIOS set token', this.$axios)
  },
  SET_USER(state, user) {
    state.user = user
  },
  UNSET_TOKEN(state) {
    state.token = null
    localStorage.removeItem('token')
    this.$axios.setToken(null)
  }
}

export const actions = {
  async login({ commit, dispatch }, credentials) {
    await this.$axios
      .$post('api/users/auth/', credentials)
      .then((res) => {
        console.log('Login: ', res)
        commit('SET_TOKEN', res.token)
        // const token = 'Token ' + res.token
        // this.$axios.setHeader('Authorization', token)
        dispatch('getUser')
        // this.dispatch('categories/getCategories')
        // this.dispatch('performer/getCities')
      })
      .catch((err) => {
        console.error('Login error: ', err.response)
      })
  },
  logout({ commit }) {
    commit('UNSET_TOKEN') // TODO check
    commit('SET_USER', null) // TODO check
  },
  async getUser({ commit }) {
    await this.$axios
      .$get('api/users/profile/')
      .then((res) => {
        console.log('USER', res)
        commit('SET_USER', res)
        if (res.performer_id) {
          this.dispatch('performer/getPerformer')
            .then(() => this.$router.push({ path: 'partners/me' }))
            .catch((err) => console.error('Performer error: ', err))
        } else {
          this.$router.push({ path: 'partners/register' })
        }
      })
      .catch((err) => {
        console.error(err.response)
      })
  },
  register({ dispatch }, payload) {
    return new Promise((resolve, reject) => {
      const credentials = {
        username: payload.phone,
        password: payload.password
      }
      this.$axios
        .$post('api/users/register/', payload)
        .then((res) => {
          console.log('SUCCESSFULLY REGISTERED: ', res)
          dispatch('login', credentials)
          resolve(res)
        })
        .catch((err) => {
          console.error('REGISTRATION ERROR: ', err.response)
          reject(err)
        })
    })
  }
}
