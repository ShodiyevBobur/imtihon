<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const menu = ref(["Home", "About us", "Pricing", "Work", "Blog"]);
const menu_hambur = ref([
  "Home",
  "About us",
  "Pricing",
  "Work",
  "Blog",
  "Contact us",
]);

const link = (index) => {
  if (index === 0) {
    return "/";
  } else if (index === 1) {
    return "/about";
  } else if (index === 2) {
    return "/pricing";
  } else if (index === 3) {
    return "/work";
  } else if (index === 4) {
    return "/blog";
  }
  return "contact";
};

const hamburger = () => {
  const back = document.getElementById("back");
  const hambur = document.getElementById("hambur");
  const hamburger = document.getElementById("hamburger");
  const left = document.getElementById("left");
  const hamMenu = document.getElementById("hamMenu");

  if (back.style.display === "none") {
    hamMenu.style.background = "#1C1E53";
    back.style.display = "block";
  } else {
    back.style.display = "none";
    hamMenu.style.background = "rgba(28, 30, 83, 0.5)";
    hamMenu.style.backdropFilter = "blur(15px)";
    hamMenu.style.webkitBackdropFilter = "blur(15px)";
  }

  if (hambur.style.right == "-100%") {
    hambur.style.right = "0px";
    hamburger.style.display = "none";
    left.style.display = "block";
  } else {
    hambur.style.right = "-100%";
    hamburger.style.display = "block";
    left.style.display = "none";
  }
};


const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});


</script>

<template>
  <div
    :class="isScrolled ? 'backdrop-blur-sm bg-opacity-80' : ''"
    class="bg-[#1C1E53] top-0 fixed w-full z-40 duration-200 flex justify-center"
  >

    <div
      id="hamMenu"
      class="container max-md:py-5 max-md:px-[5%] text-white flex md:py-[1%] w-full justify-between items-center "
    >
      <router-link to="/"
        ><img class="w-[80%]" src="../../public/Logo.png" alt="LOGO"
      /></router-link>
      
      <div class="flex gap-10 items-center">
        <router-link
          :to="link(index)"
          class="hidden md:block font-medium text-[16px] text-navbar_text [&.router-link-active]:text-white hover:text-white"
          v-for="(item, index) in menu"
          :key="index"
          >{{ item }}</router-link>

        <router-link
          :to="link(5)"
          class="border-white/20 text-navbar_text hidden md:block [&.router-link-active]:border-white hover:border-white border-2 py-4 px-12 rounded-full cursor-pointer [&.router-link-active]:text-white"
        >
          Contact us
        </router-link>

        <div class="md:hidden">
          <button
            id="hamburger"
            @click="hamburger()"
            class="flex justify-center items-center text-4xl text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M7.95 11.95h32m-32 12h32m-32 12h32"
              />
            </svg>
          </button>

          <button
            id="left"
            @click="hamburger()"
            class="hidden justify-center items-center text-4xl text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>


  <div
    id="back"
    @click="hamburger()"
    class="w-screen h-screen hidden menuBlur right-0 top-0 fixed z-20"
  ></div>

  <div
    id="hambur"
    class="w-[65%] flex -right-full duration-700 bg-[#1C1E53]/70 px-[10%] flex-col gap-6 py-[30%] h-screen items-start fixed z-30 shadow-2xl shadow-[#1C1E53]"
  >
    <router-link
      @click="hamburger()"
      :to="link(index)"
      class="md:block hover-underline-animation  font-medium text-xl py-1 first:pt-3"
      v-for="(item, index) in menu_hambur"
      :key="index"
      href="#"
      >{{ item }}</router-link
    >
  </div>
</template>

<style scoped>
.blurred-background {
  background: rgba(28, 30, 83, 0.5);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
}

@media (max-width: 768px) {
  .blurred-background {
    background: rgba(28, 30, 83, 0.5);
    backdrop-filter: blur(15px); 
    -webkit-backdrop-filter: blur(15px);
  }
}

.menuBlur {
  background: rgba(28, 30, 83, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.hover-underline-animation {
  position: relative;
  color: white;
  text-decoration: none;
}

.hover-underline-animation::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  display: block;
  margin-top: 5px;
  right: 0;
  background: white;
  transition: width 0.3s ease;
}

.hover-underline-animation:hover::after {
  width: 100%;
  left: 0;
  background: white;
}


.vibrate-button {
  border: 2px solid rgba(244, 246, 252, 0.2);
  transition: border-color 0.3s ease;
  position: relative;
}

.vibrate-button:hover {
  border-color: white;
  animation: vibrate 0.3s linear infinite, rotate 0.3s linear infinite;
}

@keyframes vibrate {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, -2px);
  }
  40% {
    transform: translate(2px, -2px);
  }
  60% {
    transform: translate(-2px, 2px);
  }
  80% {
    transform: translate(2px, 2px);
  }
  100% {
    transform: translate(0);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(1deg);
  }
  100% {
    transform: rotate(0);
  }
}

.vibrate-rotate-button {
  background: rgba(252, 217, 128, 1);
  transition: background-color 0.3s ease;
  position: relative;
}

.vibrate-rotate-button:hover {
  background-color: rgba(252, 217, 128, 0.8); /* Adjust this color as needed */
  animation: vibrate 0.3s linear infinite, rotate 0.3s linear infinite;
}

@keyframes vibrate {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, -2px);
  }
  40% {
    transform: translate(2px, -2px);
  }
  60% {
    transform: translate(-2px, 2px);
  }
  80% {
    transform: translate(2px, 2px);
  }
  100% {
    transform: translate(0);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(1deg);
  }
  100% {
    transform: rotate(0);
  }
}

.anime {
  position: relative;
  color: #bbbbcb;
  text-decoration: none;
}

.anime:hover {
  color: #fff;
}

.anime::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.anime:hover::before {
  transform: scaleX(1);
}
</style>
