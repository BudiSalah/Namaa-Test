import { mapMutations } from 'vuex'

export default function setPageTitle(pageTitle = '') {
  if (!pageTitle || typeof pageTitle !== 'string') {
    throw new TypeError('pageTitle should be of type String!')
  }

  return {
    beforeMount() {
      this.set_pageTitle(pageTitle)
    },
    methods: {
      ...mapMutations('pageTitle', ['set_pageTitle']),
    },
  }
}
