<template>
  <header>
    <nav class="bg-orange-900">
      <TheSection class="d-flex-row justify-between gap-5">
        <div class="d-flex-row gap-6">
          <h1
            class="font-tajawalBold text-lg md:text-2xl capitalize text-white"
          >
            المستودعات
          </h1>

          <h2
            class="font-tajawalMedium text-base md:text-xl capitalize text-white"
          >
            أذون الإضافة
          </h2>
        </div>

        <button
          class="capitalize w-11 h-11 rounded-full justify-center items-center bg-white/10 text-white d-flex-col"
        >
          s
        </button>
      </TheSection>
    </nav>

    <nav v-if="pageTitle" class="bg-white">
      <TheSection>
        <h2 class="font-tajawalBold text-base md:text-lg capitalize text-black">
          {{ pageTitle }}
        </h2>
      </TheSection>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TheHeader',
  computed: {
    ...mapGetters('pageTitle', ['pageTitle']),
  },
}
</script>
