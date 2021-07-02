<template>
  <div data-modal="modalQr" class="modal show">
        <div class="modal-overlay"></div>
        <div class="modal-wrapper max-w-68 w-full sm:pt-3.2 pt-2 sm:px-4 px-2 sm:pb-2.5 pb-2">
          <div class="flex items-center justify-between mb-4">
            <h2 class="font-medium sm:text-4xl text-2xl">QR-код для ссылки</h2>
            <button type="button" @click="close">
              <SvgIcon name='close'/>
            </button>
          </div>
          <div class="flex justify-center mb-4">
            <div class="rounded-lg overflow-hidden sm:w-25 w-15 sm:h-25 h-15"><img src="@/assets/qr.png" alt="" class="object-cover h-full w-full"></div>
          </div>
          <div class="sm:pl-2 pl-0 flex md:items-center justify-between md:flex-row flex-col">
            <button type="button" class="flex">
              <SvgIcon name='copy' class='mr-1 flex-shrink-0"'/>
              <span class="text-blue font-medium">Скопировать в буфер обмена</span>
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



