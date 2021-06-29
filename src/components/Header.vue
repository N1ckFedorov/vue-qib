<template>
  <header class="pt-4">
        <div class="container">
          <div class="md:justify-between md:items-center flex flex-1 md:flex-row flex-col">
            <div class="flex items-center justify-between md:flex-0 flex-1">
              <a href="#" class="flex">
                <SvgIcon name='logo' class='text-7xl'/>
              </a>
              <button type="button" id="toggleMenu" class="md:hidden flex items-center">
                <SvgIcon name='burger' class='text-5xl text-blue'/>
              </button>
            </div>
            <div id="menu" class="md:flex md:items-center flex hidden md:justify-start justify-between md:mt-[5px] mt-2 md:flex-row flex-col md:filter-none filter drop-shadow drop-shadow-none md:mr-[33px]">
              <a href="#" class="btn btn--clear md:mr-4 md:mb-0 mb-2">Войти в кабинет</a>
              <a href="#" class="btn"> Зарегистрироваться</a></div>
          </div>
        </div>
      </header>
</template>

<script>

import SvgIcon from '@/components/SvgIcon.vue'

export default {
  name: 'Header',
  components: {
    SvgIcon
  }
}
</script>