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
        <div class="xl:px-10 px-3 py-6 flex-1">
          <div class="max-w-32 mx-auto flex flex-col">
            <span class="font-medium text-3xl text-black-90 mt-2">Восстановление пароля</span>
            <form action="/" class="mt-5 flex flex-col items-end">
              <label class="flex flex-col relative flex-grow w-full">
                <span class="text-sm text-black-80 absolute -top-1.8"> Код из письма</span>
                <input value="" class="input" type="text" placeholder="000-000"/>
                <span class="text-red text-sm ml-auto">Неверный код</span>
              </label>
              <button type="button" class="mt-1">
                <SvgIcon name='refresh' class='text-lg mr-1'/>
                <span class="text-blue">Отправить заново</span>
              </button>
              <button type="submit" class="btn mt-4">Далее</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SvgIcon from '@/components/SvgIcon.vue'

export default {
  name: 'RestorePassCodeError',
  components: {
    SvgIcon
  },
  data: () => {},
  methods: {}
}
</script>