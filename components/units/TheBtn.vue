<template>
  <button
    class="d-flex-row group justify-center gap-1 rounded border border-orange-900 px-2 py-1.5 font-ajannatLTBold transition-colors duration-200"
    :class="['transform', `custom-${styleType}`]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'TheBtn',
  props: {
    styleType: {
      type: String,
      default: 'white',
      validator(value) {
        return ['white', 'orange'].includes(value)
      },
    },
  },
}
</script>

<style scoped>
.custom-white {
  @apply bg-white text-orange-900 hover:bg-orange-900 hover:text-white;
}

.custom-orange {
  @apply bg-orange-900 text-white hover:bg-white hover:text-orange-900;
}
</style>
