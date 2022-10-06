export const state = () => ({
  pageTitle: '',
})

export const mutations = {
  set_pageTitle(state, payload) {
    state.pageTitle = payload
  },
}

export const getters = {
  pageTitle(state) {
    return state.pageTitle
  },
}
