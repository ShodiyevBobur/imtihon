<template>
  <div>
    <!-- start our project -->
  <section class="mt-[57px] md:container px-5 md:px-0">
    <div class="md:my-10">
      <div class="flex justify-between items-center">
        <h2 class="text-our_project text-[17px] md:text-[48px] font-semibold">
          View our projects
        </h2>
        <router-link to="/pricing" class="flex items-center text-our_project hover:">
          <span class="mr-2">View pricing</span>
          <svg
            width="25"
            height="12"
            viewBox="0 0 25 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
              fill="#282938"
            />
          </svg>
        </router-link>
      </div>

      <div
        class="grid md:grid-cols-3 grid-cols-1 gap-4 pt-10 mb-[60px] md:mb-[100px]"
      >
        <div class="overflow-hidden group relative md:col-span-2 md:mb-[64px]">
          <img src="../../public/Card.png" alt="" class="w-full h-full" />
          <div
            class="md:w-[47%] w-full absolute -left-full group-hover:left-0 duration-500 top-0 h-[100%] bg-our_hover z-10 flex flex-col justify-end pb-5 md:pb-20"
          >
            <div class="">
              <h2
                class="md:text-[26px] text-[15px] font-medium md:font-bold md:leading-[36px] text-white mx-5 md:mx-11"
              >
                Workhub office Webflow Webflow Design
              </h2>
              <p
                class="opacity-[80%] md:text-[18px] md:font-bold ms:leading-[28px] mt-2 md:mt-5 text-white mx-5 md:mx-11 text-[12px]"
              >
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam
              </p>
              <button
                class="text-[#FCD980] mx-5 mt-4 md:mx-11 md:mt-10 flex gap-2 items-center text-[13px] md:text-[20px] hover:gap-3 duration-300"
              >
                <span>View project</span>
                <svg
                  width="25"
                  height="12"
                  viewBox="0 0 25 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                    fill="#FCD980"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div>
          <div class="relative ml-2 overflow-hidden group mb-[37px]">
            <img class="w-[100%]" src="../../public/Card3.png" alt="" />
            <div
              class="w-[100%] absolute -left-full duration-500 group-hover:left-0 top-0 h-[100%] bg-our_hover z-10 flex flex-col justify-end p-10"
            >
              <h1 class="text-[26px] font-bold leading-[36px] text-white mx-11">
                Unisaas Website Design
              </h1>
              <button class="text-[#FCD980] mx-11 mt-4 flex gap-2 items-center hover:gap-3 duration-300">
                <span>View portfolio</span>
                <svg
                  width="25"
                  height="12"
                  viewBox="0 0 25 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                    fill="#FCD980"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="relative ml-2 overflow-hidden group">
            <img class="w-[100%]" src="../../public/Card2.png" alt="" />
            <div
              class="w-[100%] absolute -left-full duration-500 group-hover:left-0 top-0 h-[100%] bg-our_hover z-10 flex flex-col justify-end p-10"
            >
              <h1 class="text-[26px] font-bold leading-[36px] text-white mx-11">
                Unisaas Website Design
              </h1>
              <button class="text-[#FCD980] mx-11 mt-4 flex gap-2 items-center hover:gap-3 duration-300">
                <span>View portfolio</span>
                <svg
                  width="25"
                  height="12"
                  viewBox="0 0 25 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                    fill="#FCD980"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end our project -->

  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
