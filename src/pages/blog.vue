<template>
  <section class="container pt-[130px] md:pt-[190px] text-center pb-[60px] md:pb-[128px] px-5 md:px-0">
    <div class="w-full flex justify-center mb-[16px]">
        <p class="font-[Poppins] font-semibold md:text-[48px] md:leading-[64px] w-[70%]">
            A UX Case Study on Creating a Studious Environment for Students
        </p>
    </div>

    <p class="font-[Poppins] font-medium text-[16px] leading-[28px] mb-[32px]">
        Andrew Jonson Posted on 27th January 2021
    </p>

    <img src="../../public/blog1.png" alt="" class="w-full mb-[48px]"/>
    
    <div class="flex justify-center w-full mb-[16px]">
        <p class="font-[Poppins] font-normal text-[13px] md:text-[16px] leading-[28px] md:w-[65%] opacity-[70%]">
          Apparently we had reached a great height in the atmosphere, for the sky
          was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level of the spectator
          on a hillside.
        </p>
    </div>
    
    <a href="#" class="font-[Poppins] font-normal text-[16px] leading-[28px] w-[65%] text-[#2405F2] hover:text-[#6005f2]">
        Read more
    </a>
  </section>

  <section class="container pb-[40px] md:pb-[128px] px-5 md:px-0">
    <p class="font-[Poppins] font-semibold text-center text-[30px] md:text-[48px] leading-[64px] mb-[48px]">
        Our Blog
    </p>
    <BlogComponent></BlogComponent>
  </section>
</template>

<script setup>
import BlogComponent from '../components/BlogComponent.vue';


</script>

<style lang="scss" scoped></style>
