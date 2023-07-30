<template>
    <div>
      <main>
        <div class="flex justify-center min-w-full py-6 sm:px-6 lg:px-8">
          <p>Oops. You shouldn't be here. <NuxtLink to="/" class="alink">Return to the homepage?</NuxtLink></p>
        </div>
      </main>
    </div>
  </template>
  <script>
  export default {
    head() {
      return {
        title: 'Contact Us - OfficeBlock'
      }
    },
  }
  </script>