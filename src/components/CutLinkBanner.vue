<template>
  <div class="mb-4">
          <div class="container"> 
            <div class="bg-white shadow p-2.5 pb-[8px] rounded-[8px]">
              <h2 class="sm:text-6xl xs:text-4xl text-2xl mb-[52px]">Сокращение ссылки</h2>
              <form action="/" class="flex md:flex-row flex-col">
                <label class="flex flex-col relative flex-grow"><span class="text-sm text-black-80 absolute top-[-18px]">Исходная ссылка</span>
                  <input value="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="input">
                </label>
                <button type="submit" class="btn md:ml-[24px] lg:mr-[16px] md:mt-0 mt-1">Сократить</button>
              </form>
              <div class="flex flex-col pt-2">
                <div class="flex lg:items-center lg:flex-row flex-col pt-2 pb-[18px] border-b border-black-10 border-1 md:pr-[24px]"><span class="flex flex-grow text-black-60">https://www.youtube.com/watch?v=dQw4w9WgXcQ</span>
                  <div class="flex lg:mt-0 mt-2 lg:items-center"><span class="badge--green md:mr-[45px] mr-auto inline-flex font-medium border-2 rounded-[4px] px-[18.5px] py-[6.5px]  items-center">qib.li/sdfh3 </span>
                    <button type="button" class="mr-[16px] flex items-center">
                      <SvgIcon name='copy'/>
                    </button>
                    <button type="button"  class="flex items-center" @click="isModalQrVisible = true">
                      <SvgIcon name='qr'/>
                    </button>
                  </div>
                </div>
                <div class="flex lg:items-center lg:flex-row flex-col pt-2 pb-[18px] border-b border-black-10 border-1 md:pr-[24px]"><span class="flex flex-grow text-black-60">https://www.youtube.com/watch?v=dQw4w9WgXcQ</span>
                  <div class="flex lg:mt-0 mt-2 lg:items-center">
                    <span class="badge--green md:mr-[45px] mr-auto inline-flex font-medium border-2 rounded-[4px] px-[18.5px] py-[6.5px]  items-center">qib.li/sdfh3 </span>
                    <button type="button" class="mr-[16px] flex items-center"  @click.stop.prevent="copyTestingCode">
                      <SvgIcon name='copy'/>
                    </button>
                    <button type="button"  class="flex items-center" @click="isModalQrVisible = true">
                      <SvgIcon name='qr'/>
                    </button>
                  </div>
                </div>
                <div class="flex lg:items-center lg:flex-row flex-col pt-2 pb-[18px]  md:pr-[24px] "><span class="flex flex-grow text-black-60">https://www.youtube.com/watch?v=dQw4w9WgXcQ</span>
                  <div class="flex lg:mt-0 mt-2 lg:items-center">
                    <span class="badge--green md:mr-[45px] mr-auto inline-flex font-medium border-2 rounded-[4px] px-[18.5px] py-[6.5px]  items-center" >qib.li/sdfh3 </span>
                    <button type="button" class="mr-[16px] flex items-center" @click.stop.prevent="copyTestingCode">
                      <SvgIcon name='copy'/>
                    </button>
                    <button type="button"  class="flex items-center" @click="isModalQrVisible = true">
                      <SvgIcon name='qr'/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalQr v-show="isModalQrVisible" @close="isModalQrVisible = false"/>
</template>

<script>

import SvgIcon from '@/components/SvgIcon.vue'
import ModalQr from '@/components/ModalQr.vue'

export default {
  name: 'CutLinkBanner',
  components: {
    ModalQr,
    SvgIcon
  },
  data() {
      return {
        isModalQrVisible: false,
      };
    },
  methods: {
        copyTestingCode () {
          let testingCodeToCopy = document.querySelector('.testing-code')
          testingCodeToCopy.setAttribute('type', 'text')    // 不是 hidden 才能複製
          testingCodeToCopy.select()

          try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            alert('Testing code was copied ' + msg);
          } catch (err) {
            alert('Oops, unable to copy');
          }

          /* unselect the range */
          testingCodeToCopy.setAttribute('type', 'hidden')
          window.getSelection().removeAllRanges()
        },
    },
}
console.log(document.querySelectorAll('.testing-code'))
</script>