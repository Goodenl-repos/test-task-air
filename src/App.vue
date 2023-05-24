<template>
  <div class="page">
    <main class="page-container">
      <IntroSection :windowWidth="windowWidth"/>
      <AppealSection :windowWidth="windowWidth"/>
      <LearnMoreSection :windowWidth="windowWidth"/>
      <YoutubeSection :windowWidth="windowWidth"/>
    </main>
    <div class="dark-screen"></div>
  </div>
</template>

<script setup>
import IntroSection from './sections/IntroSection.vue'
import AppealSection from './sections/AppealSection.vue'
import LearnMoreSection from './sections/LearnMoreSection.vue'
import YoutubeSection from './sections/YoutubeSection.vue'

const windowWidth = 1439
</script>
