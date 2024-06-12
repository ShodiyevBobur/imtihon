<template>
  <div>
    <section class="container px-5 md:px-0">
      <div class="md:flex mb-[70px] md:mb-[128px]">
        <div class="md:w-[35%] mb-10 md:mb-0">
          <p
            class="font-[Poppins] font-semibold text-[30px] md:text-[40px] md:leading-[64px] mb-4"
          >
            Frequently asked questions
          </p>

          <a href="#" class="text-[#2405F2]">Contact us For More Info</a>
        </div>

        <div>
          <div
            class="border-b-[1px] border-b-[#C2BBFFB2] py-4"
            v-for="(item, index) in arr2"
            :key="index"
          >
            <button
              class="w-full text-left flex justify-between items-center cursor-pointer font-[Poppins] font-normal md:text-[20px]"
              @click="toggleFAQ(index)"
            >
              <div class="text-[#2405F2] font-bold">0{{ index + 1 }}</div>
              <div class="ml-4 flex-1">{{ item.question }}</div>
              <div>
                <template v-if="item.open">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="black"
                      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                    />
                  </svg>
                </template>

                <template v-else>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="black"
                      d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"
                    />
                  </svg>
                </template>
              </div>
            </button>

            <div
              class="mt-4 faq-item"
              :class="{ open: item.open, closed: !item.open }"
            >
              <p class="text-gray-700 ml-10">{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import PriciTop from "../components/PriciTop.vue";
import Acordion from "../components/Acordion.vue";



const arr2 = reactive([
  {
    question: "How much time does it take?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    open: true,
  },
  {
    question: "What is your class naming convention?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    open: false,
  },
  {
    question: "How do we communicate?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    open: false,
  },
  {
    question: "I have a bigger project. Can you handle it?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    open: false,
  },
  {
    question: "What is your class naming convention?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    open: false,
  },
]);

function toggleFAQ(index) {
  arr2[index].open = !arr2[index].open;
}
</script>

<style scoped>
.faq-item {
  transition: max-height 0.3s ease;
}
.faq-item.closed {
  max-height: 0;
  overflow: hidden;
}
.faq-item.open {
  max-height: 500px;
}
</style>
