<template>
  <div class="min-h-screen py-2 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 container mx-auto px-4">

    <section id="faqs" class="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 xl:py-32" style="padding-top: 2em;">
      <div class="max-w-container mx-auto">
        <h2 class="text-center text-3xl tracking-tight mb-14">
          Frequently asked questions
        </h2>
        <ul>
          <li class="m-2" v-for="item of questions" :key="item.q + item.answer" :id="item.anchor">
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
          anchor: "antivirus",
          q: "Help! I use Avast or AVG, and OfficeBlock isn't working.",
          answer: "These antiviruses (and some other smaller ones) interfere with the Flashpoint Launcher, which is what OfficeBlock uses to display the games and to run them. \
          You can follow <a class='alink' href='https://flashpointarchive.org/datahub/Troubleshooting_Antivirus_Interference'>these steps</a> to set an exclusion."
        },
        {
          anchor: "discord",
          q: "How can I help? Do you have a Discord server?",
          answer: "You can join our Discord server using <a class='alink' href='https://discord.gg/ctPpgVxPAT'>this link</a>. The #rules-and-faq channel includes ways to help."
        }
      ]
    };
  } 
};
</script>