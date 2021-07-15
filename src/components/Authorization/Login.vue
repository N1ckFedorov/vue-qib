<template>
  <div>
    <div class="container">
      <div class="flex bg-white shadow min-h-screen ">
        <div class="flex flex-col min-w-50 border-2 border-blue-10 shadow bg-blue-20 border-t-0 border-b-0 p-6 bg-auth-letters bg-no-repeat bg-bottom bg-cover">
          <SvgIcon name='logo' class='text-4xl'/>
          <span class="mt-4 font-medium text-black-50 text-3xl">У вас нет аккаунта?</span>
          <a href="#" class="flex items-center mt-1 text-blue font-medium">
            <SvgIcon name='id_card' class='text-lg mr-1'/>
            Регистрация
          </a>
        </div>
        <div class="px-10 py-6 flex-1">
          <div class="max-w-32 mx-auto flex flex-col">
            <span class="text-black-20 font-medium">С возвращением!</span>
            <span class="font-medium text-3xl text-black-90 mt-1">Вход в личный кабинет</span>
            <form action="/" class="mt-5 flex flex-col items-end">
              <label class="flex flex-col relative flex-grow mb-4 w-full">
                <span class="text-sm text-black-80 absolute -top-1.8"> E-mail или телефон</span>
                <input value="+7 999 996 67 20" class="input" type="text" placeholder="Введите логин" required/>
              </label>
              <label class="flex flex-col relative flex-grow w-full">
                <span class="text-sm text-black-80 absolute -top-1.8"> Пароль</span>
                <input value="" class="input" type="password" placeholder="Введите пароль" required/>
              </label>
              <a href="#" class="text-black-40 font-medium mt-2 ml-auto inline-block ">Забыли пароль?</a>
              <button type="submit" class="btn mt-4">Войти</button>
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
  name: 'Login',
  components: {
    SvgIcon
  },
  data: () => {},
  methods: {}
}
</script>