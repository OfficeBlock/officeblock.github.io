<template>
  <main>
    <div class="py-2 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 container mx-auto px-4">
      <h1 class="hidden text-4xl font-bold">This site is under construction</h1>

      <div>
        <h1 class="text-4xl font-bold pb-1">Downloads</h1>
        <p class='font-semibold'>Unfortunately we only have a launcher distribution for Windows at the moment.</p>
        <p>
          OfficeBlock is released as a self-extracting executable. 
          <span class='font-semibold text-red-950 dark:text-red-100'>Note: Some antiviruses, such as Avast and AVG, may impact the functioning of Flashpoint Launcher, which is what OfficeBlock uses. Check out <NuxtLink to="https://flashpointarchive.org/datahub/Troubleshooting_Antivirus_Interference">their wiki page</NuxtLink> for the steps to set up an exclusion.</span>
        </p>
        <h2 class="text-3xl font-bold mt-8 text-center underline">Downloads for OfficeBlock 2.0 - "World Outside": </h2>
        <NuxtLink to="https://archive.org/details/office-block-2.0" class="block p-0 flex justify-center my-5 bg-emerald-400 hover:bg-emerald-500 active:bg-emerald-300 rounded-3xl sm:w-4/5 md:w-1/2 md:max-w-lg my-0 mx-auto">
            <p class="text-black font-bold text-4xl p-10 text-center">Archive.org Download</p>
        </NuxtLink>
        <NuxtLink to="https://github.com/OfficeBlock/releases/releases" class="alink underline text-center block text-2xl">
          Github backup
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  head() {
    return {
    title: 'Downloads - OfficeBlock'
    }
  },
}
</script>
