<template>
  <section class=" bg-[#F4F6FC] px-5 md:px-0">
    <div class="pt-[120px] md:pt-[150px] text-center container pb-[60px] md:pb-[96px]">
        <p class="font-medium text-[16px] leading-[28px] opacity-[70%] font-[Poppins]">What we created</p>
        <p class="font-semibold text-[20px] md:text-[48px] leading-[64px] font-[Poppins]">Our Work Portfolio</p>
        <div class="w-full flex justify-center">
            <p class="md:w-[50%] font-medium text-[16px] leading-[28px] opacity-[70%] font-[Poppins] mdmt-8">
              We help teams create great digital products by providing them with tools
              and technology to make the design-to-code process universally accessible.
            </p>
        </div>
        <div class="flex mt-[28px] gap-[26px] justify-center">
            <a href="https://www.facebook.com/?locale=ru_RU"><img src="../../public/fk2.png" alt=""></a>
            <a href="https://x.com/?lang=ru"><img src="../../public/tw2.png" alt=""></a>
            <a href="https://www.instagram.com/"><img src="../../public/insta2.png" alt=""></a>
            <a href="https://www.linkedin.com/login/ru"><img src="../../public/in2.png" alt=""></a>
        </div>
    </div>
  </section>

  <section class="container pt-[50px] md:pt-[96px] pb-[60px] md:pb-[128px] px-5 md:px-0">
    <div class="flex flex-wrap w-full justify-center gap-[20px] md:gap-[32px] mb-[48px]">
        <router-link to="/all" class="[&.router-link-active]:text-[#2405F2] font-normal text-[18px] leading-[32px] font-[Poppins]">All</router-link>
        <router-link to="/ui" class="[&.router-link-active]:text-[#2405F2] font-normal text-[18px] leading-[32px] font-[Poppins]">UI Design</router-link>
        <router-link to="/webflow" class="[&.router-link-active]:text-[#2405F2] font-normal text-[18px] leading-[32px] font-[Poppins]">Webflow Design</router-link>
        <router-link to="/figma" class="[&.router-link-active]:text-[#2405F2] font-normal text-[18px] leading-[32px] font-[Poppins]">Figma Design</router-link>
    </div>
    <RouterView />
    <Work></Work>
  </section>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Work from '../components/Work.vue';
</script>

<style lang="scss" scoped></style>
