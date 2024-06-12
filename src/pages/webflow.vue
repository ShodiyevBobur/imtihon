<template>
  <div class="md:grid grid-cols-2 gap-[34px]">
    <div v-for="(item, index) in filteredTemplate" :key="index" class="pb-10 md:pb-0">
      <img :src="item.img" alt="Template img" class="w-full">
      <p class="mt-6 font-[Poppins] text-[38px] leading-[56px] font-semibold">{{ item.title }}</p>
      <p class="mt-3 font-[Poppins] text-[16px] leading-[28px] font-normal opacity-[70%]">{{ item.text }}</p>
      <router-link to="#" class="flex items-center gap-[14px] mt-6 text-[16px] leading-[24px] font-medium">
        {{ item.button }}
        <img src="../../public/Arrow3.png" alt="Arrow icon" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { template } from './template.js'; 

const filteredTemplate = computed(() => {
  return template.filter(item => [3, 4, 5].includes(item.id));
});
</script>

<style lang="scss" scoped>
</style>