<template>
  <section class="table-wrapper">
    <table class="w-full" :class="[tableClasses]">
      <thead>
        <slot name="thead" />
      </thead>

      <tbody>
        <slot name="tbody" />
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'TheTable',
  props: {
    tableClasses: {
      type: String,
      default: '',
    },
  },
}
</script>
