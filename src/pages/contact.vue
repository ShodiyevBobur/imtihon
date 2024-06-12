<template>
  <div class="pt-[100px] md:pt-[170px] mb-[64px] px-5 md:px-0">
    <p
      class="font-[Poppins] font-semibold text-[20px] md:text-[48px] leading-[64px] mb-[16px] text-center"
    >
      Contact Us
    </p>

    <div class="w-full flex justify-center">
      <p
        class="font-[Poppins] font-normal text-[16px] leading-[28px] opacity-[70%] md:w-[40%] text-center"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
    </div>
  </div>

  <div class="flex justify-center mb-[50px] md:mb-[128px] px-5 md:px-0">
    <form class="bg-[#F4F6FC] rounded-lg pt-[20px] md:pt-[55px] px-5 md:px-[77px] md:w-[1000px]">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-[32px] mb-4">
        <div>
          <label
            for="name"
            class="font-[Poppins] font-normal text-[18px] leading-[32px]"
            >Name</label
          >
          <input
          required
            type="text"
            id="name"
            class="mt-1 px-[32px] py-[18px] w-full border rounded-md bg-[#F4F6FC] border-[#0000001F] focus:outline-none font-[Poppins] font-normal text-[16px] leading-[28px]"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label
          required
            for="email"
            class="font-[Poppins] font-normal text-[18px] leading-[32px]"
            >Email</label
          >
          <input
            type="email"
            id="email"
            class="mt-1 px-[32px] py-[18px] w-full border rounded-md bg-[#F4F6FC] border-[#0000001F] focus:outline-none font-[Poppins] font-normal text-[16px] leading-[28px]"
            placeholder="Enter your Email"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-[32px] mb-4">
        <div>
          <label
            for="subject"
            class="font-[Poppins] font-normal text-[18px] leading-[32px]"
            >Subject</label
          >
          <input
          required
            type="text"
            id="subject"
            class="mt-1 px-[32px] py-[18px] w-full border rounded-md bg-[#F4F6FC] border-[#0000001F] focus:outline-none font-[Poppins] font-normal text-[16px] leading-[28px]"
            placeholder="Provide context"
          />
        </div>

        <div>
          <label
            for="subject-select"
            class="font-[Poppins] font-normal text-[18px] leading-[32px]"
            >Subject</label
          >
          <select
          required
            id="subject-select"
            class="mt-1 px-[32px] opacity-[70%] py-[18px] w-full border rounded-md bg-[#F4F6FC] border-[#0000001F] focus:outline-none font-[Poppins] font-normal text-[16px] leading-[28px]"
          >
            <option>Select Subject</option>
            <option>General Inquiry</option>
            <option>Support</option>
            <option>Feedback</option>
          </select>
        </div>
      </div>

      <div class="mb-4">
        <label
          for="message"
          class="font-[Poppins] font-normal text-[18px] leading-[32px]"
          >Message</label
        >
        <textarea
        required
          id="message"
          class="mt-1 py-[18px] px-[32px] w-full border border-[#0000001F] rounded-md h-32 resize-none bg-[#F4F6FC] focus:outline-none"
          placeholder="Write your question here"
        ></textarea>
      </div>

      <button
        type="submit"
        class="bg-[#282938] w-full md:w-[30%] text-white font-semibold text-[18px] leading-[32px] py-[16px] px-[64px] rounded-[41px] mb-[30px] md:mb-[69px] hover:bg-black"
      >
        Send Message
      </button>
    </form>
  </div>
</template>

<script setup></script>

<style scoped>
#subject-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-size: 8px 10px;
  padding-right: 20px;
}
</style>
