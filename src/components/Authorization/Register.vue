<template>
  <div>
    <div class="container">
      <div class="flex bg-white shadow min-h-screen flex-row-reverse ">
        <div class="flex flex-col min-w-50 border-2 border-blue-10 shadow bg-blue-20 border-t-0 border-b-0 p-6 bg-auth-letters bg-no-repeat bg-bottom bg-cover">
          <SvgIcon name='logo' class='text-4xl'/>
          <span class="mt-4 font-medium text-black-50 text-3xl">Уже есть аккаунт?</span>
          <a href="#" class="flex items-center mt-1 text-blue font-medium">
            <SvgIcon name='id_card' class='text-lg mr-1'/>
            Вход
          </a>
        </div>
        <div class="px-10 py-6 flex-1">
          <div class="max-w-32 mx-auto flex flex-col">
            <span class="text-black-20 font-medium">Будем знакомы!</span>
            <span class="font-medium text-3xl text-black-90 mt-1">Регистрация</span>
            <form action="/" class="mt-5 flex flex-col items-end">
              <label class="flex flex-col relative flex-grow mb-4 w-full">
                <span class="text-sm text-black-80 absolute -top-1.8">Ваше имя</span>
                <input value="" class="input" type="text" placeholder="Иван" required/>
              </label>
              <label class="flex flex-col relative flex-grow mb-4 w-full">
                <span class="text-sm text-black-80 absolute -top-1.8"> E-mail или телефон</span>
                <input value="+7 999 996 67 20" class="input" type="text" placeholder="Введите логин" required/>
              </label>
              <label class="flex flex-col relative flex-grow w-full">
                <span class="text-sm text-black-80 absolute -top-1.8"> Пароль</span>
                <input value="" class="input" type="password" placeholder="Придумайте пароль" required/>
              </label>
              <div class="checkbox">
                <input id="policy" type="checkbox">
                <label for="policy"> Я согласен(на) на обработку 
                  <a href="#">
                    персональных данных
                  </a>
                </label>
              </div>
              <button type="submit" class="btn mt-4">Зарегистрироваться</button>
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
  name: 'Register',
  components: {
    SvgIcon
  },
  methods: {}
}
</script>