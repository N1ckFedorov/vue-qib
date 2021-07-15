<template>
  <div class="mb-4">
    <div class="container">
      <div class="bg-white shadow p-2.5 pb-0.8 rounded-lg">
        <h2 class="sm:text-6xl xs:text-4xl text-2xl mb-5">Сокращение ссылки</h2>
        <form action="/" class="flex md:flex-row flex-col">
          <label class="flex flex-col relative flex-grow">
            <span class="text-sm text-black-80 absolute -top-1.8">
              Исходная ссылка</span>
            <input
              value="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              class="input"
            />
          </label>
          <button type="submit" class="btn md:ml-2.5 lg:mr-1.6 md:mt-0 mt-1">
            Сократить
          </button>
        </form>
        <div class="flex flex-col pt-2" v-if="items.length">
          <CutLinkItem
            v-for="item in items"
            :key="item.id"
            :item="item"
            @handleCopy="handleCopy"
            @showModalQr="isModalQrVisible = true"
          />
        </div>
      </div>
    </div>
  </div>
  <NotificationCopy :notifications="notifications" />
  <ModalQr v-show="isModalQrVisible" @close="isModalQrVisible = false" />
</template>

<script>
import CutLinkItem from "@/components/CutLinkBanner/CutLinkItem.vue";
import NotificationCopy from "@/components/Notifications/NotificationCopy.vue";
import ModalQr from "@/components/Modals/ModalQr.vue";
import SvgIcon from "@/components/SvgIcon.vue";

let itemId = 1;

export default {
  name: "CutLinkBanner",
  components: {
    ModalQr,
    SvgIcon,
    CutLinkItem,
    NotificationCopy,
  },
  props: {},
  data() {
    return {
      isModalQrVisible: false,
      notifications: [],
      items: [
        {
          id: itemId++,
          fullLink: "https://www.youtube.com/watch?v=45w4w9WgXc4",
          shortLink: "qib.li/123h3",
        },
        {
          id: itemId++,
          fullLink: "https://www.youtube.com/watch?v=65w4w9WgXc2",
          shortLink: "qib.li/456f0",
        },
        {
          id: itemId++,
          fullLink: "https://www.youtube.com/watch?v=d565w4WgXc0",
          shortLink: "qib.li/789h3",
        },
      ],
    };
  },
  methods: {
    handleCopy(data) {
      let notificationId = 1;
      this.notifications.unshift({ id: notificationId++ });
      setTimeout(() => {
        this.notifications.pop();
      }, 3000);
    }
  }
};
</script>
