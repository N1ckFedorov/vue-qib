<template>
  <div class="notify--green fixed flex bg-white items-center shadow-light rounded-[8px] notify py-[16px] pl-[36px] pr-[68px] md:right-[63px] right-2 bottom-[68px]">
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