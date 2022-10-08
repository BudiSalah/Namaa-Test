<template>
  <dialog
    ref="popup"
    class="inset-0 z-50 h-full w-full bg-black-100/50 p-4 md:p-8"
  >
    <section class="d-flex-col items-center">
      <button
        class="d-flex-col absolute top-4 right-4 h-8 w-8 items-center justify-center rounded bg-white font-tajawalBold text-lg capitalize text-black-100"
        @click="closePopup"
      >
        X
      </button>

      <form class="d-flex-row mt-16 items-stretch" @submit.prevent="search">
        <div
          class="min-w-[250px] rounded rounded-tl-none rounded-bl-none border border-gray-200 bg-white px-2 py-1 font-tajawalMedium text-black-100"
        >
          <input
            v-model="searchQuery"
            type="search"
            placeholder="ابحث بالتاريخ او برقم الفاتورة..."
            class="h-full w-full bg-transparent outline-none"
          />
        </div>

        <TheBtn class="rounded-tr-none rounded-br-none !border-gray-200">
          <SvgSearch class="group-hover:fill-white" />
        </TheBtn>
      </form>
    </section>
  </dialog>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ThePopup',
  data() {
    return {
      searchQuery: '',
    }
  },
  methods: {
    ...mapMutations('addVendor', ['set_productSearchQuery']),
    closePopup() {
      if ('popup' in this.$refs) {
        this.$refs.popup.removeAttribute('open')
      }
    },
    search() {
      this.set_productSearchQuery(this.searchQuery)
      this.closePopup()
    },
  },
}
</script>
