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
          <tr>
            <td>اسم المورد</td>
            <td>فلان الفلاني</td>
            <td>SR 000001</td>
            <td>01-01-2022</td>

            <td>
              <button>
                <SvgEdit color="fill-black-100" />
              </button>
            </td>
          </tr>

          <tr>
            <td>اسم المورد</td>
            <td>فلان الفلاني</td>
            <td>SR 000001</td>
            <td>01-01-2022</td>

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
import setPageTitle from '~/mixins/setPageTitle'

export default {
  name: 'IndexPage',
  mixins: [setPageTitle('أذون الإضافة')],
  methods: {
    openPopup() {
      if ('popup' in this.$refs) {
        this.$refs.popup.$el.open = 'open'
      }
    },
  },
}
</script>
