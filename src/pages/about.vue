<template>
  <header class="">
    <div
      class="md:pb-[126px] pb-[60px] md:pt-[220px] pt-[120px] md:flex container md:justify-between items-center px-5 md:px-0"
    >
      <div class="md:w-[38%]">
        <p class="font-normal text-[18px] leading-[32px] mb-2">About us</p>
        <p class="font-semibold text-[25px] md:text-[54px] md:leading-[74px] font-[Poppins]">
          Our designs solve problems
        </p>
        <p class="font-normal text-[16px] leading-[28px] mt-[31px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>

      <div class="md:pl-5 md:w-[640px] w-full mt-10 md:mt-0">
        <img src="../../public/about1.png" alt="" />
      </div>
    </div>

    <div class="bg-backg container pt-[50px] md:pt-[95px] mb-[70px] md:mb-[128px] px-5 md:px-0">
      <div class="md:flex md:mx-[90px] md:mb-[95px] mb-[40px] gap-[61px]">
        <div>
          <p class="font-semibold text-[25px] md:text-[38px] leading-[56px] font-[Poppins]">Goal focussed</p>
          <p class="font-normal text-[16px] leading-[28px] md:mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div class="mt-10 md:mt-0">
            <p class="font-semibold text-[25px] md:text-[38px] leading-[56px] font-[Poppins]">Continuous improvement</p>
            <p class="font-normal text-[16px] leading-[28px] md:mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <img src="../../public/about2.png" alt="" class="w-full h-full"/>
    </div>
    <Ourtiam></Ourtiam>
  </header>

  
</template>

<script setup lang="ts">
import Ourtiam from '../components/Ourtiam.vue';


</script>

<style scoped></style>
