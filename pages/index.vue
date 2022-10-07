<template>
  <main class="bg-gray-100">
    <ThePopup ref="popup" />

    <TheSection class="d-flex-col mt-6 gap-6 rounded-xl bg-white">
      <section class="d-flex-row !items-stretch justify-end gap-3">
        <TheBtn @click.native="openPopup">
          <SvgFilter
            class="transition-colors duration-200 group-hover:fill-white"
            :class="['transform']"
          />
        </TheBtn>

        <TheBtn :link="{ name: 'vendors-add' }" class="min-w-[132px]">
          <SvgCirclePlus
            class="transition-colors duration-200 group-hover:fill-white"
            :class="['transform']"
          />
          <span>إضافة جديد</span>
        </TheBtn>
      </section>

      <TheTable table-classes="min-w-[920px]">
        <template #thead>
          <tr>
            <th>المورد</th>
            <th>المورد</th>
            <th>رقم الفاتورة</th>
            <th>تاريخ الفاتورة</th>
            <th>الاعدادت</th>
          </tr>
        </template>

        <template #tbody>
          <tr :class="[products?.length && 'hidden']">
            <td colspan="5" class="text-center">لا يوجد بيانات</td>
          </tr>

          <tr v-for="product of products" :key="product?.id">
            <td>فلان الفلاني</td>
            <td>{{ getVendorName(product?.vendor) }}</td>
            <td>{{ product?.id }}</td>
            <td>{{ product?.date }}</td>

            <td>
              <button>
                <SvgEdit color="fill-black-100" />
              </button>
            </td>
          </tr>
        </template>
      </TheTable>
    </TheSection>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import setPageTitle from '~/mixins/setPageTitle'

export default {
  name: 'IndexPage',
  mixins: [setPageTitle('أذون الإضافة')],
  computed: {
    ...mapGetters('addVendor', ['vendorsList', 'products']),
  },
  methods: {
    openPopup() {
      if ('popup' in this.$refs) {
        this.$refs.popup.$el.open = 'open'
      }
    },
    getVendorName(id) {
      return this.vendorsList?.filter((item) => item.id === id)?.[0]?.name
    },
  },
}
</script>
