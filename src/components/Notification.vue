<template>
  <div class="notify--green fixed flex bg-white items-center shadow-light rounded-lg notify py-1.6 pl-3.6 pr-7 md:right-6 right-2 bottom-7">
        <SvgIcon name='circle-check' class='text-xl'/>
        <span class="flex ml-1 leading-none">Ссылка скопирована</span>
      </div>
</template>

<script>


import SvgIcon from '@/components/SvgIcon.vue'

export default {
  name: 'Notification',
  components: {
    SvgIcon
  }
}
</script>