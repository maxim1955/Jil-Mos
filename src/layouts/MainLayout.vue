<template>
  <q-layout view="hHh lpR fFf">
      <q-header class=" bg-white q-pt-lg" >
        <div class="container">
          <div class="main_header flex items-center justify-around ">
            <div class="header_logo">
              <img src="src/assets/logo-header.svg" alt="">
            </div>
            <div class="header_tabs">
              <q-tabs
                  class="text-teal flex justify-between"
              >
                <q-route-tab
                    to="/mails"

                    label="Поверка счетчиков"
                />
                <q-route-tab
                    to="/mails"

                    label="Порядок проведения"
                />
                <q-route-tab
                    to="/mails"
                    label="Отзывы"
                />
                <q-route-tab
                    to="/mails"

                    label="Важно знать"
                />
                <q-route-tab
                    to="/mails"

                    label="Контакты"
                />

              </q-tabs>
            </div>
            <div class="header_phone flex items-center">
              <div class="">
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="39" viewBox="0 0 31 39" fill="none">
                  <path d="M29.2727 27.7644C27.7992 26.0149 26.3286 25.0164 24.7766 24.7117C22.5316 24.2709 20.6348 25.3817 18.884 26.5574C18.6827 26.6927 18.4635 26.7312 18.1944 26.6784C16.9611 26.4364 15.0948 24.4661 12.6473 20.8222C9.76784 16.5356 8.86062 13.9907 9.95042 13.2583C12.9044 11.2746 14.1611 8.95137 11.3035 3.5072C10.2808 1.55695 9.11733 0.478254 7.74674 0.209166C5.89834 -0.15373 4.20314 1.04792 2.70749 2.10824C2.44892 2.29152 2.20466 2.46466 1.96719 2.62419C0.29096 3.75014 -0.308299 6.80625 0.364201 10.7997C1.10204 15.1814 3.26898 20.2157 6.46597 24.9754C8.93848 28.6557 11.7978 31.799 14.7267 34.1075C17.2837 36.1231 19.8883 37.4454 22.0528 37.8703C22.053 37.8704 22.0533 37.8704 22.0536 37.8705C23.4081 38.1364 24.5664 38.057 25.4111 37.5987C27.1268 36.6681 30.318 34.947 30.8268 32.2583C31.0995 30.8162 30.5753 29.3117 29.2727 27.7644Z" fill="black"/>
                </svg>
              </div>
              <div class="q-pl-md">
                <p class="text-blue no-margin">8 (800) 555-22-39</p>
                <p class="text-accent">ежедневно 9:00 - 21:00</p>
              </div>
            </div>
            <div class="">
              <q-btn color="white" class="bg-blue" rounded>
                ЗАКАЗАТЬ ЗВОНОК
              </q-btn>
            </div>
          </div>
        </div>
      </q-header>
      <q-page-container>
        <router-view/>
      </q-page-container>

  </q-layout>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {
    const rightDrawerOpen = ref(false)

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>
<style>
.container {
  max-width: 1920px;
  margin: 0 auto;
}
</style>
