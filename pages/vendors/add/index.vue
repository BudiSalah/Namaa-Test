<template>
  <main class="bg-gray-100">
    <TheSection class="d-flex-col mt-6 gap-6 rounded-xl bg-white">
      <form ref="formRef" @submit.prevent>
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
                v-model="serialNumberValue"
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
                v-model="brandDateValue"
                :min="todayDate"
                type="date"
                placeholder="ادخل التاريخ"
                class="h-full w-full bg-transparent text-right outline-none"
              />
            </div>
          </div>

          <div class="d-flex-col gap-2">
            <label for="vendor-name" class="font-tajawalBold">
              اسم المورد
            </label>

            <div
              class="relative w-full rounded border border-gray-200 bg-white px-2 py-1 font-tajawalMedium text-black-100"
            >
              <select
                id="vendor-name"
                v-model="vendorValue"
                class="h-full w-full bg-transparent outline-none"
              >
                <option value="" disabled selected>اختر اسم المورد</option>

                <option
                  v-for="vendor in vendorsList"
                  :key="vendor?.id"
                  :value="vendor?.id"
                >
                  {{ vendor?.name }}
                </option>
              </select>

              <input
                v-model="vendorValue"
                type="text"
                class="pointer-events-none absolute inset-0 -z-10"
                required
              />
            </div>
          </div>

          <div class="d-flex-col gap-2">
            <label for="add-notes" class="font-tajawalBold"> ملاحظات </label>

            <div
              class="w-full rounded border border-gray-200 bg-white px-2 py-1 font-tajawalMedium text-black-100"
            >
              <input
                id="add-notes"
                v-model="vendorNotesValue"
                type="text"
                placeholder="ادخل ملاحظاتك (اختياري)"
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
              <tr :class="[addingNewProduct && 'hidden']">
                <td colspan="7" class="text-center">لا يوجد اصناف مضافة</td>
              </tr>

              <tr
                v-for="brand in Array(brandFormRows)"
                :key="brand"
                :class="[!addingNewProduct && 'hidden']"
              >
                <td>
                  <button type="button" @click="removeAddRow">
                    <SvgTrash color="fill-black-100" />
                  </button>
                </td>

                <td>
                  <div
                    class="relative w-full rounded border border-gray-200 bg-white px-2 py-1 font-tajawalMedium text-black-100"
                  >
                    <select
                      name="warehouse"
                      class="h-full w-full bg-transparent outline-none"
                      @input="
                        (e) =>
                          (e.target.nextElementSibling.value = e.target.value)
                      "
                    >
                      <option value="" disabled selected>اختر المخزن</option>

                      <option
                        v-for="warehouse in warehouses"
                        :key="warehouse?.id"
                        :value="warehouse?.id"
                      >
                        {{ warehouse?.name }}
                      </option>
                    </select>

                    <input
                      type="text"
                      class="pointer-events-none absolute inset-0 -z-10"
                      required
                    />
                  </div>
                </td>

                <td>
                  <div
                    class="relative w-full rounded border border-gray-200 bg-white px-2 py-1 font-tajawalMedium text-black-100"
                  >
                    <select
                      name="brand"
                      class="h-full w-full bg-transparent outline-none"
                      @input="
                        (e) =>
                          (e.target.nextElementSibling.value = e.target.value)
                      "
                    >
                      <option value="" disabled selected>اختر الصنف</option>

                      <option
                        v-for="item in items"
                        :key="item?.id"
                        :value="item?.id"
                      >
                        {{ item?.name }}
                      </option>
                    </select>

                    <input
                      type="text"
                      class="pointer-events-none absolute inset-0 -z-10"
                      required
                    />
                  </div>
                </td>

                <td>
                  <div
                    class="relative w-full rounded border border-gray-200 bg-white px-2 py-1 font-tajawalMedium text-black-100"
                  >
                    <select
                      name="unit"
                      class="h-full w-full bg-transparent outline-none"
                      @input="
                        (e) =>
                          (e.target.nextElementSibling.value = e.target.value)
                      "
                    >
                      <option value="" disabled selected>اختر الوحدة</option>

                      <option
                        v-for="unit in units"
                        :key="unit?.id"
                        :value="unit?.id"
                      >
                        {{ unit?.name }}
                      </option>
                    </select>

                    <input
                      type="text"
                      class="pointer-events-none absolute inset-0 -z-10"
                      required
                    />
                  </div>
                </td>

                <td>
                  <div
                    class="w-full rounded border border-gray-200 bg-white px-2 py-1 font-tajawalMedium text-black-100"
                  >
                    <input
                      name="quantity"
                      type="number"
                      placeholder="ادخل الكمية"
                      min="1"
                      required
                      class="h-full w-full bg-transparent outline-none"
                    />
                  </div>
                </td>

                <td>
                  <div
                    class="w-full rounded border border-gray-200 bg-white px-2 py-1 font-tajawalMedium text-black-100"
                  >
                    <input
                      name="exp-date"
                      type="date"
                      placeholder="تاريخ الصلاحية"
                      class="h-full w-full bg-transparent text-right outline-none"
                      :min="todayDate"
                      :value="todayDate"
                      required
                    />
                  </div>
                </td>

                <td>
                  <div
                    class="w-full rounded border border-gray-200 bg-white px-2 py-1 font-tajawalMedium text-black-100"
                  >
                    <input
                      name="notes"
                      type="text"
                      placeholder="يمكنك وضع الملاحظات هنا"
                      class="h-full w-full bg-transparent outline-none"
                    />
                  </div>
                </td>
              </tr>
            </template>
          </TheTable>

          <TheBtn
            type="button"
            class="w-fit min-w-[132px]"
            @click.native="addNewProduct"
          >
            <SvgCirclePlus
              class="transition-colors duration-200 group-hover:fill-white"
              :class="['transform']"
            />
            <span>إضافة جديد</span>
          </TheBtn>
        </section>
      </form>
    </TheSection>
  </main>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import setPageTitle from '~/mixins/setPageTitle'

export default {
  name: 'VendorsAddPage',
  mixins: [setPageTitle('إضافة جديد')],
  data() {
    return {
      serialNumberValue: '',
      todayDate: new Date().toISOString().replace(/T.*/, ''),
      brandDateValue: '',
      vendorValue: '',
      vendorNotesValue: '',
      addingNewProduct: false,
      formIsValid: false,
      brandFormRows: 0,
    }
  },
  computed: {
    ...mapGetters('addVendor', [
      'serialNumber',
      'vendorsList',
      'warehouses',
      'items',
      'units',
    ]),
  },
  beforeMount() {
    this.set_btnText('إضافة')
    this.set_btnClickHandler(this.chechFormIsValid)
    this.set_serialNumber()
  },
  mounted() {
    this.$nextTick(function () {
      this.serialNumberValue = this.serialNumber
      this.brandDateValue = this.todayDate
    })
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
    ...mapActions('addVendor', ['set_serialNumber', 'set_products']),
    addNewProduct() {
      this.addingNewProduct = true
      this.brandFormRows++
    },
    removeAddRow({ target }) {
      target?.closest('tr')?.remove?.()

      if (
        this.$refs?.brandTable?.$el.querySelectorAll('tbody tr')?.length === 1
      ) {
        this.addingNewProduct = false
      }
    },
    chechFormIsValid() {
      if (!this.$refs.formRef?.checkValidity()) {
        this.$refs.formRef?.reportValidity()
        return
      }

      const dataObj = {
        id: this.serialNumberValue,
        date: this.brandDateValue,
        vendor: this.vendorValue,
        notes: this.vendorNotesValue,
        brands: [],
      }

      for (const row of this.$refs?.brandTable?.$el.querySelectorAll(
        'tbody tr'
      )) {
        if (row?.classList?.contains?.('hidden')) continue

        const brand = {
          warehouse: row.querySelector('[name="warehouse"]')?.value,
          brand: row.querySelector('[name="brand"]')?.value,
          unit: row.querySelector('[name="unit"]')?.value,
          quantity: row.querySelector('[name="quantity"]')?.value,
          expDate: row.querySelector('[name="exp-date"]')?.value,
          notes: row.querySelector('[name="notes"]')?.value,
        }

        dataObj.brands.push(brand)
      }

      this.set_products(dataObj)

      this.$router.push({ name: 'index' })
    },
  },
}
</script>
