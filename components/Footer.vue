<template>
  <footer class="bg-green-300 pt-10 sm:mt-10 pt-10">
    <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
      <!-- Col-1 -->
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <!-- Col Title -->
        <div class="text-xs uppercase text-gray-800 font-medium mb-6">
          Pages
        </div>

        <!-- Links -->
        <nuxt-link
          to="/"
          class="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
        >
          Home
        </nuxt-link>
        <nuxt-link
          to="/downloads"
          class="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
        >
          Downloads
        </nuxt-link>

      </div>

      <!-- Col-2 -->
      <div class="hidden p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <!-- Col Title -->
        <div class="text-xs uppercase text-gray-800 font-medium mb-6">
          Core Concepts
        </div>

        <!-- Links -->
        <a
          href="#"
          class="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
        >
          Utility-First
        </a>
        <a
          href="#"
          class="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
        >
          Responsive Design
        </a>
        <a
          href="#"
          class="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
        >
          Hover, Focus, & Other States
        </a>
        <a
          href="#"
          class="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
        >
          Dark Mode
        </a>
        <a
          href="#"
          class="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
        >
          Adding Base Styles
        </a>
        <a
          href="#"
          class="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
        >
          Extracting Components
        </a>
        <a
          href="#"
          class="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
        >
          Adding New Utilities
        </a>
      </div>

      <!-- Col-3 -->
      <div class="hidden p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <!-- Col Title -->
        <div class="text-xs uppercase text-gray-800 font-medium mb-6">
          Customization
        </div>

        <!-- Links -->
        <a
          href="#"
          class="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
        >
          Configuration
        </a>
        <a
          href="#"
          class="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
        >
          Theme Configuration
        </a>
        <a
          href="#"
          class="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
        >
          Breakpoints
        </a>
        <a
          href="#"
          class="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
        >
          Customizing Colors
        </a>
        <a
          href="#"
          class="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
        >
          Customizing Spacing
        </a>
        <a
          href="#"
          class="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
        >
          Configuring Variants
        </a>
        <a
          href="#"
          class="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
        >
          Plugins
        </a>
      </div>

      <!-- Col-3 -->
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <!-- Col Title -->
        <div class="text-xs uppercase text-gray-800 font-medium mb-6">
          Community
        </div>

        <!-- Links -->
        <a
          href="https://github.com/OfficeBlock/"
          class="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
        >
          GitHub
        </a>
        <a
          href="https://discord.com/invite/ctPpgVxPAT"
          class="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
        >
          Discord
        </a>
        <a
          href="#"
          class="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
        >
          Twitter
        </a>
        <a
          href="#"
          class="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
        >
          YouTube
        </a>

        <a
          href="credits/"
          class="my-3 block text-white hover:text-gray-100 text-sm font-medium duration-700"
        >
          Credits
        </a>
      </div>
    </div>

    <!-- Copyright Bar -->
    <div class="pt-2">
      <div
        class="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-800 text-sm 
            flex-col md:flex-row max-w-6xl"
      >
        <div class="mt-2 text-white-800">
          This website is open source and is licensed under the
          <a
            href="https://github.com/OfficeBlock/officeblock.github.io/blob/main/LICENSE"
            >Mozilla Public License 2.0</a
          >.
        </div>

        <!-- Required Unicons (if you want) -->
        <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <a href="https://github.com/officeblock" class="w-6 mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              width="1em"
              height="1em"
              style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z"
                fill="#626262"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
