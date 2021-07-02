<template>
  <div class="bg-zircon flex flex-col min-h-screen bg-landing-bg bg-no-repeat bg-top md:bg-contain">
    <Header/>
    <main>
      <div class="pt-6 mb-[48px]">
          <div class="container">
            <div class="flex flex-col">
              <h1 class="sm:text-7xl text-5xl font-bold">Короткие ссылки, высокие показатели</h1>
              <h4 class="sm:text-xl text-lg text-black-50 mt-1">Сокращайте ссылки и анализируйте аудиторию с помощью удобной системы управления</h4>
            </div>
          </div>
        </div>
      <CutLinkBanner/>
      <MoreFunctions/>
    </main>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import CutLinkBanner from '@/components/CutLinkBanner/CutLinkBanner.vue'
import MoreFunctions from '@/components/MoreFunctions.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    CutLinkBanner,
    MoreFunctions,
    Footer,
  }
}
</script>
