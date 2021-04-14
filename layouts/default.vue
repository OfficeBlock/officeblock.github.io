<template>
  <div>
      <nav class="bg-orange-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-8 w-8" src="/logo.svg" alt="OfficeBlock">
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-white hover:bg-orange-600 hover:text-gray-100" -->
              <NuxtLink to="/" class="text-black px-3 py-2 rounded-md text-sm font-medium">Home</NuxtLink>

              <NuxtLink to="/about" class="hidden text-black hover:bg-orange-600 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">About</NuxtLink>

              <NuxtLink to="/downloads" class="text-black hover:bg-orange-600 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">Downloads</NuxtLink>

              <a href="#" class="hidden text-black hover:bg-orange-600 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">Calendar</a>

              <a href="#" class="hidden text-black hover:bg-orange-600 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">Wiki</a>

              <a href="#" class="hidden text-black hover:bg-orange-600 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">Get Involved/Contact Us</a>

            </div>
          </div>
        </div>
      </div>
      </div>
    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NuxtLink to="/" class="text-black block px-3 py-2 rounded-md text-base font-medium">Home</NuxtLink>

        <NuxtLink to="/about" class="hidden text-black hover:bg-orange-600 hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium">About</NuxtLink>

        <NuxtLink to="/downloads" class="text-black hover:bg-orange-600 hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium">Downloads</NuxtLink>

        <a href="#" class="hidden text-black hover:bg-orange-600 hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium">Wiki</a>

        <a href="#" class="hidden text-black hover:bg-orange-600 hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium">FAQ</a>

        <a href="#" class="hidden text-black hover:bg-orange-600 hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium">Get Involved/Contact Us</a>
      </div>
      </div>
    
  </nav>

    <Nuxt />
  </div>
</template>

<style>
.nuxt-link-exact-active {
      --tw-bg-opacity: 1;
    background-color: rgba(234, 88, 12, var(--tw-bg-opacity));
    color: white;
}
</style>
