<template>
  <div>
    <div class="container">
      <div class="flex bg-white shadow min-h-screen flex-col lg:flex-row">
        <div class="flex flex-col lg:min-w-50 lg:border-2 border-blue-10 shadow bg-blue-20 border-t-0 border-b-0 md:p-6 p-3 lg:bg-auth-letters bg-no-repeat bg-bottom bg-cover">
          <SvgIcon name='logo' class='text-4xl'/>
          <span class="mt-4 font-medium text-black-50 text-3xl">У вас нет аккаунта?</span>
          <a href="#" class="flex items-center mt-1 text-blue font-medium">
            <SvgIcon name='id_card' class='text-lg mr-1'/>
            Регистрация
          </a>
        </div>
        <div class="flex flex-col xl:px-10 px-3 py-6">
          <span class="text-black-20 font-medium">Что-то пошло не так :(</span>
          <span class="font-medium text-3xl text-black-90 mt-1">Попробуйте еще раз,
            <br> держим за вас кулачки!</span>
          <div class="flex w-full justify-center mt-4">
            <a href="#" class="btn">Войти еще раз</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SvgIcon from '@/components/SvgIcon.vue'

export default {
  name: 'LoginFailed',
  components: {
    SvgIcon
  },
  data: () => {},
  methods: {}
}
</script>