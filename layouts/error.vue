<template>
  <main>
    <h1>
      {{ error?.message }}
    </h1>
  </main>
</template>

<script>
export default {
  name: 'ErrorLayout',
  props: {
    error: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
