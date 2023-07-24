<template>
  <div class="min-h-screen py-2 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 container mx-auto px-4">

    <section id="faqs" class="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 xl:py-32" style="padding-top: 2em;">
      <div class="max-w-container mx-auto">
        <h2 class="text-center text-3xl tracking-tight mb-14">
          Frequently asked questions
        </h2>
        <ul>
          <li class="m-2" v-for="item of questions" :key="item.q + item.answer">
            <span class="text-2xl font-bold">{{ item.q }}</span>
            <p v-html="item.answer"></p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "FAQ - OfficeBlock"
    };
  },
  data() {
    return {
      questions: [
        {
          q: "Do you have an archive application that contains all the games?",
          answer: "We are currently working on it, but we do have an online archive which you can view <a class='text-green-400 underline' href='/downloads'>here</a>."
        },
        {
          q: "Do you have a Trello board or something?",
          answer: "Yes, we have a Trello board which you can view <a class='text-green-400 underline' href='https://trello.com/b/sZapXnRX/officeblock'>here</a>."
        }
      ]
    };
  }
};
</script>