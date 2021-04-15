<template>
  <div>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="py-12 ">
          <div class="max-w-lg mb-8">
            <h2 class="text-4xl md:text-4xl mb-4 font-bold font-heading">
              <span>OfficeBlock</span>
            </h2>
            <p class="text-gray-500 leading-relaxed">
              OfficeBlock is an archive of creative suite games, such as games made in Microsoft PowerPoint.
            </p>
          </div>
          <div class="hidden"><!-- What buttons should go here?-->
            <a
              class="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-green-600 hover:bg-green-700 rounded"
              href="#"
              >Check Now</a
            ><a
              class="block sm:inline-block py-4 px-8 text-xs text-greenGray-500 hover:text-greenGray-600 text-center font-semibold leading-none bg-white rounded"
              href="#"
              >Documentation</a
            >
          </div>
        </div>
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