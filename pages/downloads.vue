<template>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold">Under construction</h1>

        <div class="hidden">
<h1 class="text-4xl font-bold">Games</h1>
   <ul>
       <li v-for="download of downloads" :key="download.name">
           <a :href="download.url">
           <h2 class="text-3xl">{{download.name}}</h2>
           <p>{{download.type}}</p>
           </a></li>
   </ul> 
        </div>
    </div>
   </main>
</template>
<script>
export default {
  data(){
    return {
      downloads: [
        {
          "name":"Hangman Demo",
          "url": "https://cdn.discordapp.com/attachments/829435852690030624/829435999833948210/Hangman_Demo.exe",
          "type": "Game"
        },
        {
          "name":"Pixels Neon 2",
          "url": "https://bluepload.unstable.life/selif/pixelsneon2.exe",
          "type": "Game"
        },
        {
          "name":"Das Shuttlebus",
          "url": "https://bluepload.unstable.life/selif/dasshuttlebus.exe",
          "type": "Animation",
          "warnings": [
              "strong_language"
          ]
        },
        {
          "name":"Spin a Number",
          "url": "https://cdn.discordapp.com/attachments/829435852690030624/829436241337516112/Spin_a_Number.exe",
          "type": "Utility"
        }
      ]
    }
  }
}
</script>