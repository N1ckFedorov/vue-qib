<template>
  <div data-modal="modalQr" class="modal show">
        <div class="modal-overlay"></div>
        <div class="modal-wrapper max-w-[680px] w-full sm:pt-[32px] pt-2 sm:px-4 px-2 sm:pb-[24px] pb-2">
          <div class="flex items-center justify-between mb-4">
            <h2 class="font-medium sm:text-4xl text-2xl">QR-код для ссылки</h2>
            <button type="button" @click="close" >
              <SvgIcon name='close'/>
            </button>
          </div>
          <div class="flex justify-center mb-4">
            <div class="rounded-[8px] overflow-hidden sm:w-[256px] w-[150px] sm:h-[256px] h-[150px]"><img src="s/images/qr.png" alt="" class="object-cover h-full w-full"></div>
          </div>
          <div class="sm:pl-2 pl-0 flex md:items-center justify-between md:flex-row flex-col">
            <button type="button" class="flex">
              <svg width="1em" height="1em" class="icon icon-copy mr-1 flex-shrink-0">
                <use xlink:href="s/images/useful/svg/theme/symbol-defs.svg#icon-copy"></use>
              </svg><span class="text-blue font-medium">Скопировать в буфер обмена</span>
            </button>
            <button type="button" class="md:mt-0 mt-2 btn">Скачать QR-код</button>
          </div>
        </div>
      </div>
</template>

<script>

import SvgIcon from '@/components/SvgIcon.vue'

export default {
  name: 'ModalQr',
  components: {
    SvgIcon
  },
  methods: {
      close() {
        this.$emit('close');
      },
    },
}
</script>



