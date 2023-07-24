<template>
  <div class="dark:bg-gray-900 dark:text-white">
<Nav/>
    <Nuxt />
    <Footer/>
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "OfficeBlock is an archive of creative suite games, such as games made in Microsoft PowerPoint."
        }
      ]
    };
  }
};
</script>
