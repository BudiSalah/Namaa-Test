import serialGenerator from '~/utils/serialGenerator'

export const state = () => ({
  serialNumber: '',
  vendorsList: [
    { id: 1, name: 'أسم المورد 1' },
    { id: 2, name: 'أسم المورد 2' },
    { id: 3, name: 'أسم المورد 3' },
    { id: 4, name: 'أسم المورد 4' },
    { id: 5, name: 'أسم المورد 5' },
  ],
  warehouses: [
    { id: 1, name: 'أسم المخزن 1' },
    { id: 2, name: 'أسم المخزن 2' },
    { id: 3, name: 'أسم المخزن 3' },
    { id: 4, name: 'أسم المخزن 4' },
    { id: 5, name: 'أسم المخزن 5' },
  ],
  items: [
    { id: 1, name: 'أسم الصنف 1' },
    { id: 2, name: 'أسم الصنف 2' },
    { id: 3, name: 'أسم الصنف 3' },
    { id: 4, name: 'أسم الصنف 4' },
    { id: 5, name: 'أسم الصنف 5' },
  ],
  units: [
    { id: 1, name: 'أسم الوحدة 1' },
    { id: 2, name: 'أسم الوحدة 2' },
    { id: 3, name: 'أسم الوحدة 3' },
    { id: 4, name: 'أسم الوحدة 4' },
    { id: 5, name: 'أسم الوحدة 5' },
  ],
  products: [],
  productEditId: NaN,
  productEditIndex: NaN,
  productSearchQuery: '',
})

export const mutations = {
  set_serialNumber(state, payload) {
    state.serialNumber = payload
  },
  set_products(state, payload) {
    state.products.push(payload)
  },
  set_productEditId(state, payload) {
    state.productEditId = payload
  },
  remove_productEditId(state, payload) {
    state.products.splice(payload, 1)
  },
  reset_productEdit(state) {
    state.productEditId = NaN
    state.productEditIndex = NaN
  },
  set_productSearchQuery(state, payload) {
    state.productSearchQuery = payload
  },
}

export const actions = {
  set_serialNumber({ commit, state }) {
    let lastSerialNumber = 0

    if (state.products?.length) {
      lastSerialNumber = Number(
        state.products?.at(-1)?.id?.replace(/SR-0+/i, '')?.[0]
      )
    }

    const serialGeneratorFunc = serialGenerator(lastSerialNumber)

    commit('set_serialNumber', serialGeneratorFunc.next().value)
  },
  set_products({ commit }, payload) {
    commit('set_products', payload)
  },
}

export const getters = {
  serialNumber(state) {
    return state.serialNumber
  },
  vendorsList(state) {
    return state.vendorsList
  },
  warehouses(state) {
    return state.warehouses
  },
  items(state) {
    return state.items
  },
  units(state) {
    return state.units
  },
  products(state) {
    if (state.productSearchQuery) {
      const regEx = new RegExp(state.productSearchQuery, 'i')

      return state.products.filter(
        (item) => regEx.test(item.id) || regEx.test(item.date)
      )
    }

    return state.products
  },
  productEditId(state) {
    return state.productEditId
  },
  productEditObj(state) {
    return state.products?.filter?.(
      (item) => item.id === state.productEditId
    )?.[0]
  },
  productEditIndex(state) {
    return state.products?.findIndex((item) => item?.id === state.productEditId)
  },
}
