<template>
  <div>
    <main>
      <div class="flex flex-col lg:flex-row justify-center min-w-full py-6 sm:px-6 lg:px-8">
        <div class="py-8 md:py-12 px-8 w-2/2 md:w-max">
          <div class="max-w-2xl mb-8">
            <h2 class="text-4xl md:text-4xl mb-4 font-bold font-heading">
              <span>OfficeBlock</span>
            </h2>
            <p class="text-gray-500 dark:text-gray-300 leading-relaxed">
              OfficeBlock is an archive of creative suite games, such as games made in PDF files or in Microsoft PowerPoint.
            </p>
          </div>
          <NuxtLink to="/downloads" class="block p-0 flex justify-center my-5 bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-300 rounded-3xl sm:w-4/5 md:w-1/2 md:max-w-lg my-0 mx-auto">
            <p class="text-black font-bold text-4xl p-10">Download&nbsp;it!</p>
          </NuxtLink>

          <p class="text-gray-500 dark:text-gray-300 leading-relaxed text-lg">
              We also have a <NuxtLink class="alink" to="https://discord.gg/ctPpgVxPAT">Discord server</NuxtLink> which you can join.
          </p>
        </div>
        <img src="images/example.png" class="block md:inline self-center w-4/5 lg:w-1/2 my-0 mx-auto"/>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Home - OfficeBlock'
    }
  },

}
</script>