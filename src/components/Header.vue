<template>
  <header class="pt-4">
        <div class="container">
          <div class="md:justify-between md:items-center flex flex-1 md:flex-row flex-col">
            <div class="flex items-center justify-between md:flex-0 flex-1">
              <a href="#" class="flex">
                <SvgIcon name='logo' class='text-7xl'/>
              </a>
              <button v-if="mobileView" @click="showNav = !showNav" type="button" id="toggleMenu" class="flex items-center">
                <SvgIcon name='burger' class='text-5xl text-blue'/>
              </button>
            </div>
            <div id="menu" :class="{'visible' : showNav , 'hidden' : !showNav}" class="md:flex md:items-center flex  md:justify-start justify-between md:mt-0.5 mt-2 md:flex-row flex-col md:filter-none filter drop-shadow drop-shadow-none md:mr-3.3">
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
  },
  data: () => {
    return {
      mobileView: false,
      showNav: false
    }
  },
  methods: {
    handleMenu(){
      this.mobileView = window.innerWidth <= 767;
    }
  },
  created(){
    this.handleMenu()
    window.addEventListener('resize' , this.handleMenu)
  }
}
</script>