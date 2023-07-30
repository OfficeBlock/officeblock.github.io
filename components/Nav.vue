 <template>
     
    <nav class="bg-green-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center h-16">
          <div class="flex w-7/12 items-center justify-center md:justify-between">
            <div class="flex-shrink-0">
              <img class="h-12 w-12 inline" src="/images/logo.svg" alt="OfficeBlock Logo" /><span class="inline text-zinc-900 dark:text-zinc-900 text-3xl font-bold align-middle"> OfficeBlock</span>
            </div>
            <div class="hidden md:block flex items-center justify-between">
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

                <NuxtLink
                  to="https://officeblock.miraheze.org/wiki/"
                  class="text-black hover:bg-green-600 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >Wiki</Nuxtlink
                  >

                <NuxtLink
                  href="#"
                  class="hidden text-black hover:bg-green-600 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >Contact Us</NuxtLink
                >
                <color-mode class="self-end"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="md:hidden" id="mobile-menu">
        <div class="px-2 pb-3 sm:px-3 grid grid-cols-2 text-center gap-1">
          <NuxtLink
            to="/"
            class="text-black hover:bg-green-600 hover:text-gray-100 block py-2 rounded-md text-base font-medium"
            >Home</NuxtLink
          >

          <NuxtLink
            to="/downloads"
            class="text-black hover:bg-green-600 hover:text-gray-100 block py-2 rounded-md text-base font-medium"
            >Downloads</NuxtLink
          >

          <NuxtLink
            to="/search"
            class="hidden text-black hover:bg-green-600 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
            >Search the Archive</NuxtLink
          >

          <NuxtLink
            to="https://officeblock.miraheze.org/wiki/"
            class="text-black hover:bg-green-600 hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >Wiki</NuxtLink
          >

          <NuxtLink
            to="/faq"
            class="text-black hover:bg-green-600 hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >FAQ</NuxtLink
          >

          <a
            href="#"
            class="hidden text-black hover:bg-green-600 hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >Get Involved/Contact Us</a
          >
        <color-mode class="self-end text-center"/>
        </div>
      </div>
    </nav>
</template>
<style scoped>
.nuxt-link-exact-active {
  background-color: rgb(187 247 208);
  color: black;
}
#mobile-menu > div > :last-child:nth-last-child(odd) {
  grid-column: auto / span 2; 
}
#mobile-menu > div > :first-child:nth-last-child(even), #mobile-menu > div > :first-child:nth-last-child(even) ~ * {
  grid-column: auto / span 1;
}
</style>
