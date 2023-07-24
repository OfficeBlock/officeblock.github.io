 <template>
     
    <nav class="bg-green-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-12 w-12 inline" src="/images/logo.svg" alt="OfficeBlock Logo" /><span class="inline text-white-800 text-3xl font-bold align-middle"> OfficeBlock</span>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                
                <NuxtLink
                  to="/"
                  class="text-black hover:bg-green-600 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >Home</NuxtLink
                >


                <NuxtLink
                  to="/downloads"
                  class="text-black hover:bg-green-600 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >Downloads</NuxtLink
                >

                <NuxtLink
                  to="/search"
                  class="hidden text-black hover:bg-green-600 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >Search the Archive</NuxtLink
                >

                <NuxtLink
                  to="/faq"
                  class="text-black hover:bg-green-600 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >FAQ</NuxtLink
                >

                <a
                  href="https://officeblock.miraheze.org/wiki/"
                  class="text-black hover:bg-green-600 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >Wiki</a
                  >

                <a
                  href="#"
                  class="hidden text-black hover:bg-green-600 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >Get Involved/Contact Us</a
                >
                <color-mode class="self-end"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="md:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NuxtLink
            to="/"
            class="text-black hover:bg-green-600 hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >Home</NuxtLink
          >

          <NuxtLink
            to="/downloads"
            class="text-black hover:bg-green-600 hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >Downloads</NuxtLink
          >

          <NuxtLink
            to="/search"
            class="hidden text-black hover:bg-green-600 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
            >Search the Archive</NuxtLink
          >

          <a
            to="https://officeblock.miraheze.org/wiki/"
            class="text-black hover:bg-green-600 hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >Wiki</a
          >

          <a
            href="/faq"
            class="text-black hover:bg-green-600 hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >FAQ</a
          >

          <a
            href="#"
            class="hidden text-black hover:bg-green-600 hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >Get Involved/Contact Us</a
          >
        <color-mode class="self-end"/>
        </div>
      </div>
    </nav>
</template>
<style scoped>
.nuxt-link-exact-active {
  --tw-bg-opacity: 1;

  background-color: rgba(94, 186, 223 var(--tw-bg-opacity));
  color: rgb(240, 236, 218);
}

</style>
