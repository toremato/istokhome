// store.dispatch('categories/getProjectCategories')
// store.dispatch('categories/getPerformerCategories')

// import categories from '/categories'

console.log('INIT NINTIN ITN')

// export default {
//   async fetch({ store, params }) {
//     await store.dispatch('categories/getProjectCategories')
//     await store.dispatch('categories/getPerformerCategoriedsfs')
//   }
// }

export default ({ app: { store, router } }) => {
  // Do whatever with the store or router here
  // console.log('state', store.state)
  // console.log('routes', router.options.routes)
  let token = null
  try {
    token = localStorage.getItem('token')
  } catch (error) {
    console.error(error)
  }
  if (token) {
    // store.commit('auth/SET_TOKEN', token)
    // console.log('AXIOS 1', axios)
    // this.$axios.setToken('Token ' + token)
  }
  // console.log('AXIOS 2', this.$axios)

  if (store.state.token) {
    // this.$axios.setToken('Token ' + store.state.token)
  }
  store.dispatch('categories/getProjectCategories')
  store.dispatch('categories/getPerformerCategories')
  store.dispatch('performer/getCities')
}
