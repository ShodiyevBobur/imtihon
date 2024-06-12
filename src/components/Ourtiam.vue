<template>
  <div>
    <div class="flex justify-center bg-features pt-[50px] md:pt-0">
      <div
        class="container max-md:px-[5%] w-full px-[3%] md:py-[128px] text-blackBlue"
      >
        <h2
          class="text-center leading-[64px] md:text-5xl text-4xl max-md:border-b-2 max-md:border-black font-semibold max-md:mx-8"
        >
          Meet our team
        </h2>

        <div
          class="md:grid grid-cols-4 mt-12 w-full justify-between md:gap-[32px]"
        >
          <div
            class="py-12 px-3 md:px-16 group bg-white mb-5 md:mb-0"
            v-for="(item, index) in images"
            :key="index"
          >
            <div
              class="relative overflow-hidden rounded-full max-md:flex max-md:justify-center"
            >
              <img class="rounded-full max-md:w-full" :src="item" alt="" />
              <img
                class="top-full max-md:w-full duration-300 absolute left-0 group-hover:top-0 max-md:left-1/2 max-md:-translate-x-1/2"
                src="../../public/aboutHover.svg"
                alt=""
              />
              <div
                class="top-full max-md:w-[45%] flex duration-300 gap-4 absolute left-1/2 -translate-x-1/2 group-hover:top-1/2 translate-y-[200%] md:translate-y-9"
              >
                <a
                  :href="getLink(index_logo)"
                  class="max-md:w-full"
                  v-for="(item_logo, index_logo) in logo"
                  :key="index_logo"
                  target="_blank"
                  ><img :src="item_logo" alt="" class="w-full" />
                </a>
              </div>
            </div>
            <h6 class="mt-[30px] text-center text-2xl font-medium">
              {{ names[index] }}
            </h6>
            <p class="mt-1 text-center">{{ fields[index] }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const images = ref(["/john.svg", "/paul.svg", "/simon.svg", "/sara.svg"]);
const names = ref(["John Smith", "Abubakir", "Paul Jones", "Sara Hardin"]);
const fields = ref(["CEO", "CTO", "Design Lead", "Project Manager"]);

const logo = ref(["/facebook.svg", "/twitter.svg", "/linkdIn.svg"]);
const getLink = (index) => {
  if (index === 0) {
    return "https://facebook.com";
  } else if (index === 1) {
    return "https://twitter.com";
  } else {
    return "https://linkedin.com";
  }
};
</script>

<style lang="scss" scoped></style>
