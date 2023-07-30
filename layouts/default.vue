<template>
  <div class="dark:bg-gray-900 dark:text-white min-h-screen">
    <Head>
      <Title>OfficeBlock</Title>
      <Meta name="description" content="OfficeBlock is an archive of creative suite games, such as games made in Microsoft PowerPoint."/>
    </Head>
    <Nav/>
    <slot />
  </div>
</template>
<style>
a.alink, NuxtLink.alink {
  color: #34d399;
  text-decoration: underline;
}
a.alink:hover, NuxtLink.alink:hover {
  color: #10b981;
}
a.alink:active, NuxtLink.alink:active {
  color: #6ee7b7;
}
</style>
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
