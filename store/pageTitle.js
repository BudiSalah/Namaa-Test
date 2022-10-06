export const state = () => ({
  pageTitle: '',
  btnText: '',
  btnLink: '',
  btnClickHandler: '',
  btnRef: '',
})

export const mutations = {
  set_pageTitle(state, payload) {
    state.pageTitle = payload
  },
  set_btnText(state, payload) {
    state.btnText = payload
  },
  set_btnLink(state, payload) {
    state.btnLink = payload
  },
  set_btnClickHandler(state, payload) {
    state.btnClickHandler = payload
  },
  set_btnRef(state, payload) {
    state.btnRef = payload
  },
}

export const getters = {
  pageTitle(state) {
    return state.pageTitle
  },
  btnText(state) {
    return state.btnText
  },
  btnLink(state) {
    return state.btnLink
  },
  btnClickHandler(state) {
    return state.btnClickHandler
  },
  btnRef(state) {
    return state.btnRef
  },
}
