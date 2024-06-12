<template>
  <div>
    <section class="container pt-[120px] md:pt-[200px] px-5 md:px-0">
      <div class="w-full text-center md:px-[380px]">
        <p
          class="text-[Poppins] font-semibold text-[30px] md:text-[48px] md:leading-[64px] mb-4"
        >
          Our Pricing Plans
        </p>
        <p class="opacity-[70%] font-medium text-[16px] md:leading-[28px]">
          When you’re ready to go beyond prototyping in Figma, Webflow is ready
          to help you bring your designs to life — without coding them.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-[32px] mt-[64px] mb-[128px]">
        <div
          v-for="(item, index) in arr"
          :key="index"
          :class="item.id == 2 ? 'bg-tint_blue text-white' : 'bg-features'"
          class="py-[64px] px-[48px] rounded-3xl relative overflow-hidden"
        >
          <div
            v-if="index == 1"
            class="z-10 w-[1000px] h-[1000px] rounded-full absolute top-[10%] md:top-[12%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white opacity-[6%]"
          ></div>

          <div class="flex items-center gap-2 mb-5">
            <p class="font-[Poppins] font-semibold text-[38px] leading-[56px]">
              {{ item.price }}
            </p>
            <a
              href="#"
              class="font-normal"
              :class="item.id == 2 ? 'text-[#FCD980]' : 'text-[#2405F2]'"
              >{{ item.type }}</a
            >
          </div>

          <p class="font-[Poppins] font-medium text-[24px] leading-[36px]">
            {{ item.title }}
          </p>

          <p
            class="font-medium text-[16px] leading-[28px] mt-2 opacity-[70%] mb-[50px]"
          >
            {{ item.text }}
          </p>

          <div
            v-for="(i, index) in item.column"
            :key="index"
            class="flex items-center gap-3"
          >
            <img src="../../public/Pointer.png" alt="" class="mb-5" />
            <a
              href="#"
              class="font-normal text-4 leading-[28px]"
              :class="item.id == 2 ? 'mb-4' : 'mb-5'"
              >{{ i }}</a
            >
          </div>

          <div class="w-full flex justify-center mt-[76px]">
            <router-link
              to=""
              class="font-semibold text-[18px] leading-[32px] py-4 px-[50px] md:px-[77px] rounded-[41px]"
              :class="
                item.id == 2
                  ? 'bg-[#FCD980] text-black hover:bg-white'
                  : 'bg-[#282938] text-white hover:bg-[#FCD980] hover:text-black'
              "
            >
              {{ item.button }}
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import PriciTop from "../components/PriciTop.vue";

const arr = reactive([
  {
    id: 1,
    price: "$299",
    type: "Per Design",
    title: "Landing Page",
    text: "When you’re ready to go beyond prototyping in Figma,",
    column: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
    button: "Get started",
  },
  {
    id: 2,
    price: "$399",
    type: "Multi Design",
    title: "Website Page",
    text: "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
    column: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
    button: "Get started",
  },
  {
    id: 3,
    price: "$499 +",
    type: "Per Design",
    title: "Complex Project",
    text: "When you’re ready to go beyond prototyping in Figma,",
    column: [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users",
    ],
    button: "Contact us",
  },
]);


</script>

<style scoped>


</style>
