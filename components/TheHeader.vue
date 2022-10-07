<template>
  <header>
    <nav class="bg-orange-900">
      <TheSection class="d-flex-row justify-between gap-5">
        <div class="d-flex-row gap-6">
          <NuxtLink :to="{ name: 'index' }">
            <h1
              class="font-tajawalBold text-lg capitalize text-white md:text-2xl"
            >
              المستودعات
            </h1>
          </NuxtLink>

          <h2
            class="font-tajawalMedium text-base capitalize text-white md:text-xl"
          >
            أذون الإضافة
          </h2>
        </div>

        <button
          class="d-flex-col h-11 w-11 items-center justify-center rounded-full bg-white/10 capitalize text-white"
        >
          s
        </button>
      </TheSection>
    </nav>

    <nav v-if="pageTitle" class="bg-white">
      <TheSection class="d-flex-row justify-between gap-4">
        <h2 class="text-black font-tajawalBold text-base capitalize md:text-lg">
          {{ pageTitle }}
        </h2>

        <TheBtn
          v-if="btnText"
          id="headerBtn"
          :link="btnLink"
          style-type="orange"
          class="min-w-[120px]"
          @click.native="btnClickHandler"
        >
          {{ btnText }}
        </TheBtn>
      </TheSection>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TheHeader',
  computed: {
    ...mapGetters('pageTitle', [
      'pageTitle',
      'btnText',
      'btnLink',
      'btnClickHandler',
    ]),
  },
}
</script>
