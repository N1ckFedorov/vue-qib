<template>
  <div class="flex lg:items-center lg:flex-row flex-col pt-2 pb-1.8 border-b border-black-10 border-1 md:pr-2.5">
    <span class="flex flex-grow text-black-60">{{item.fullLink}}</span>
    <div class="flex lg:mt-0 mt-2 lg:items-center">
      <span ref="textToCopy" class="badge--green md:mr-4.5 mr-auto inline-flex font-medium border-2 rounded px-1.8 py-0.5  items-center">{{item.shortLink}}</span>
      <button @click="handleCopy" type="button" class="mr-1.6 flex items-center">
        <SvgIcon name='copy'/>
      </button>
      <button type="button"  class="flex items-center" @click="isModalQrVisible = true">
        <SvgIcon name='qr'/>
      </button>
    </div>
  </div>
  <ModalQr v-show="isModalQrVisible" @close="isModalQrVisible = false"/>
</template>

<script>

import SvgIcon from '@/components/SvgIcon.vue'
import ModalQr from '@/components/ModalQr.vue'


export default {
  name: 'CutLinkItem',
  components: {
    ModalQr,
    SvgIcon
  },
  props: {
    item: {
      type: Object,
      required: true,
      default() {
          return {}
        }
    }
  },
  data() {
      return {
        isModalQrVisible: false
      };
    },
  methods: {

    selectText(element) {
      var range;
      if (document.selection) {
        // IE
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
      } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
      }
    },
    handleCopy() {
     this.selectText(this.$refs.textToCopy);
     document.execCommand("copy");
     this.$emit('handleCopy', this.item);
    }
  },
}

</script>