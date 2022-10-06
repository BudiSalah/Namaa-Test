<template>
  <main class="bg-gray-100">
    <TheSection class="d-flex-col mt-6 gap-6 rounded-xl bg-white">
      <section class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div class="d-flex-col gap-2">
          <label for="serial-number" class="font-tajawalBold">
            رقم الاذن التسلسلي
          </label>

          <div
            class="w-full cursor-not-allowed rounded border border-gray-200 bg-gray-300 px-2 py-1 font-tajawalMedium text-black-100"
          >
            <input
              id="serial-number"
              type="text"
              placeholder="رقم الاذن التسلسلي"
              class="h-full w-full bg-transparent uppercase opacity-100 outline-none"
              disabled
            />
          </div>
        </div>

        <div class="d-flex-col gap-2">
          <label for="add-date" class="font-tajawalBold"> التاريخ </label>

          <div
            class="w-full rounded border border-gray-200 bg-white px-2 py-1 font-tajawalMedium text-black-100"
          >
            <input
              id="add-date"
              type="date"
              placeholder="ادخل التاريخ"
              class="h-full w-full bg-transparent outline-none"
            />
          </div>
        </div>

        <div class="d-flex-col gap-2">
          <label for="vendor-name" class="font-tajawalBold"> اسم المورد </label>

          <div
            class="w-full rounded border border-gray-200 bg-white px-2 py-1 font-tajawalMedium text-black-100"
          >
            <select
              id="vendor-name"
              class="h-full w-full bg-transparent outline-none"
            >
              <option value="" disabled selected>اختر اسم المورد</option>
              <option value="1">اسم رقم 1</option>
              <option value="2">اسم رقم 2</option>
              <option value="3">اسم رقم 3</option>
              <option value="4">اسم رقم 4</option>
            </select>
          </div>
        </div>

        <div class="d-flex-col gap-2">
          <label for="add-notes" class="font-tajawalBold"> ملاحظات </label>

          <div
            class="w-full rounded border border-gray-200 bg-white px-2 py-1 font-tajawalMedium text-black-100"
          >
            <input
              id="add-notes"
              type="text"
              placeholder="اختر اسم المورد"
              class="h-full w-full bg-transparent outline-none"
            />
          </div>
        </div>
      </section>

      <section class="d-flex-col gap-2">
        <section class="d-flex-row !items-stretch gap-3">
          <h2
            class="text-black font-tajawalBold text-base capitalize md:text-lg"
          >
            جدول الأصناف
          </h2>
        </section>

        <TheTable ref="brandTable" table-classes="min-w-[920px]">
          <template #thead>
            <tr>
              <th>حذف</th>
              <th>المخزن</th>
              <th>اسم الصنف</th>
              <th>الوحدة</th>
              <th class="w-44">الكمية</th>
              <th>تاريخ الصلاحية</th>
              <th>ملاحظات</th>
            </tr>
          </template>

          <template #tbody>
            <tr class="hidden">
              <td colspan="7" class="text-center">لا يوجد اصناف مضافة</td>
            </tr>

            <tr>
              <td>
                <button>
                  <SvgTrash color="fill-black-100" />
                </button>
              </td>

              <td>
                <div
                  class="w-full rounded border border-gray-200 bg-white px-2 py-1 font-tajawalMedium text-black-100"
                >
                  <select class="h-full w-full bg-transparent outline-none">
                    <option value="" disabled selected>اختر المخزن</option>
                    <option value="1">اسم رقم 1</option>
                    <option value="2">اسم رقم 2</option>
                    <option value="3">اسم رقم 3</option>
                    <option value="4">اسم رقم 4</option>
                  </select>
                </div>
              </td>

              <td>
                <div
                  class="w-full rounded border border-gray-200 bg-white px-2 py-1 font-tajawalMedium text-black-100"
                >
                  <select class="h-full w-full bg-transparent outline-none">
                    <option value="" disabled selected>اختر الصنف</option>
                    <option value="1">اسم رقم 1</option>
                    <option value="2">اسم رقم 2</option>
                    <option value="3">اسم رقم 3</option>
                    <option value="4">اسم رقم 4</option>
                  </select>
                </div>
              </td>

              <td>
                <div
                  class="w-full rounded border border-gray-200 bg-white px-2 py-1 font-tajawalMedium text-black-100"
                >
                  <select class="h-full w-full bg-transparent outline-none">
                    <option value="" disabled selected>اختر الوحدة</option>
                    <option value="1">اسم رقم 1</option>
                    <option value="2">اسم رقم 2</option>
                    <option value="3">اسم رقم 3</option>
                    <option value="4">اسم رقم 4</option>
                  </select>
                </div>
              </td>

              <td>
                <div
                  class="w-full rounded border border-gray-200 bg-white px-2 py-1 font-tajawalMedium text-black-100"
                >
                  <input
                    type="number"
                    placeholder="ادخل الكمية"
                    class="h-full w-full bg-transparent outline-none"
                  />
                </div>
              </td>

              <td>
                <div
                  class="w-full rounded border border-gray-200 bg-white px-2 py-1 font-tajawalMedium text-black-100"
                >
                  <input
                    type="date"
                    placeholder="تاريخ الصلاحية"
                    class="h-full w-full bg-transparent outline-none"
                  />
                </div>
              </td>

              <td>
                <div
                  class="w-full rounded border border-gray-200 bg-white px-2 py-1 font-tajawalMedium text-black-100"
                >
                  <input
                    type="text"
                    placeholder="يمكنك وضع الملاحظات هنا"
                    class="h-full w-full bg-transparent outline-none"
                  />
                </div>
              </td>
            </tr>
          </template>
        </TheTable>

        <TheBtn class="w-fit min-w-[132px]">
          <SvgCirclePlus
            class="transition-colors duration-200 group-hover:fill-white"
            :class="['transform']"
          />
          <span>إضافة جديد</span>
        </TheBtn>
      </section>
    </TheSection>
  </main>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import setPageTitle from '~/mixins/setPageTitle'

export default {
  name: 'VendorsAddPage',
  mixins: [setPageTitle('إضافة جديد')],
  computed: {
    ...mapGetters('pageTitle', ['btnRef']),
  },
  beforeMount() {
    this.set_btnText('إضافة')
    this.set_btnClickHandler(this.addHandler)
  },
  beforeDestroy() {
    this.set_btnText('')
    this.set_btnClickHandler('')
  },
  methods: {
    ...mapMutations('pageTitle', [
      'set_btnText',
      'set_btnLink',
      'set_btnClickHandler',
    ]),
    addHandler() {
      console.log('addHandler')
    },
  },
}
</script>
