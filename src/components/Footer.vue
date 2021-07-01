<template>
  <footer class="mt-12 mb-8">
        <div class="container"> 
          <div class="flex md:items-center md:flex-row flex-col">
            <div class="flex-grow">
              <a href="#" class="flex">
               <SvgIcon name='logo' class='text-4xl'/>
              </a>
              <span class="flex mt-1 text-black-50">© 2021 Qib.li. Все права защищены</span></div>
            <div class="flex flex-col md:mt-0 mt-2"><a href="#" class="text-blue font-medium md:text-right">Политика обработки данных</a><span class="font-medium mt-0.8 inline-block">Разработано командой <a href="#" class="text-blue">Qubeek.io</a></span></div>
          </div>
        </div>
      </footer>
</template>

<script>

import SvgIcon from '@/components/SvgIcon.vue'

export default {
  name: 'Footer',
  components: {
    SvgIcon
  }
}
</script>