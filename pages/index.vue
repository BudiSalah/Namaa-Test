<template>
  <Tutorial />
</template>

<script>
import setPageTitle from '~/mixins/setPageTitle'

export default {
  name: 'IndexPage',
  mixins: [setPageTitle('أذون الإضافة')],
}
</script>
