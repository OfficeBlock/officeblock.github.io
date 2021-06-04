<template>
    
<div class="relative inline-block text-left">
  <div>
    <button @click-outside="isOpen = !isOpen" @click="isOpen = true" type="button" class="inline-flex justify-center w-[8rem] rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
      {{format($colorMode.preference) }}
      <!-- Heroicon name: solid/chevron-down -->
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">

  <div v-show="isOpen" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-green-100 ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      <div @click="$colorMode.preference = 'system'" href="#" class="hover:bg-gray-100 cursor-pointer text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">System</div>
      <div @click="$colorMode.preference = 'light'" href="#" class="hover:bg-gray-100 cursor-pointer text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Light</div>
      <div @click="$colorMode.preference = 'dark'" href="#" class="hover:bg-gray-100 cursor-pointer text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Dark</div>
    </div>
  </div>
      </transition>
</div>
</template>
<script>
export default {
    data() {
        return {
isOpen: false
        }
        },
    methods: {
        format(text) {
            return text.charAt(0).toUpperCase() + text.slice(1)
            }
    }
}
</script>