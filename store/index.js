export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const actions = {
  // async login(state, credentials) {
  //   const res = await this.$axios.$post('api/users/auth/', credentials)
  //   console.log('STORE', res)
  // }
}
