<template>
  <main>
    <div class="py-2 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 container mx-auto px-4">
      <h1 class="hidden text-4xl font-bold">Under construction</h1>

      <div class="">
        <h1 class="text-4xl font-bold">Works</h1>
        <div class="flex flex-wrap -m-4">
          <div
            class="xl:w-1/3 md:w-1/2 p-4 mt-2"
            v-for="download of downloads"
            :key="download.name"
          >
            <div class="border border-gray-200 p-6 rounded-lg">
              <div
                class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4"
              >
                <svg
                  v-if="download.type === 'Game'"
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M467.51 248.83c-18.4-83.18-45.69-136.24-89.43-149.17A91.5 91.5 0 0 0 352 96c-26.89 0-48.11 16-96 16s-69.15-16-96-16a99.09 99.09 0 0 0-27.2 3.66C89 112.59 61.94 165.7 43.33 248.83c-19 84.91-15.56 152 21.58 164.88c26 9 49.25-9.61 71.27-37c25-31.2 55.79-40.8 119.82-40.8s93.62 9.6 118.66 40.8c22 27.41 46.11 45.79 71.42 37.16c41.02-14.01 40.44-79.13 21.43-165.04z"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="32"
                  />
                  <circle cx="292" cy="224" r="20" fill="currentColor" />
                  <path
                    d="M336 288a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288z"
                    fill="currentColor"
                  />
                  <circle cx="336" cy="180" r="20" fill="currentColor" />
                  <circle cx="380" cy="224" r="20" fill="currentColor" />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M160 176v96"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M208 224h-96"
                  />
                </svg>
                <svg
                  v-else-if="download.type === 'Utility'"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <svg
                  v-if="download.type === 'Animation'"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <a :href="download.url"
                ><h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                  {{ download.name }}
                </h2></a
              >
              <p class="leading-relaxed text-base">
                <p v-for="warning of download.warnings" :key="warning + download.name" class="text-red-500">Warning: {{warning}}</p>
                {{ download.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      downloads: [
        {
          name: "Hangman Demo",
          url:
            "https://cdn.discordapp.com/attachments/829435852690030624/829435999833948210/Hangman_Demo.exe",
          type: "Game",
          "description":"The first game on Officeblock",
        },
        {
          name: "Pixels Neon 2",
          url: "https://bluepload.unstable.life/selif/pixelsneon2.exe",
          type: "Game",
          "description":"PLS GIVE DESC",
        },
        {
          name: "Das Shuttlebus",
          url: "https://bluepload.unstable.life/selif/dasshuttlebus.exe",
          type: "Animation",
          warnings: ["strong language"],
          "description":"PLS GIVE DESC",
        },
        {
          name: "Spin a Number",
          url:
            "https://cdn.discordapp.com/attachments/829435852690030624/829436241337516112/Spin_a_Number.exe",
          type: "Utility",
          "description":"PLS GIVE DESC",
        }
      ]
    };
  },
}
</script>
