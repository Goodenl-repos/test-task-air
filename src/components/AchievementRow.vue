<template>
  <!-- YoutubeSection -->
  <div class="achievement__row">
    <ul class="achievement__list">
      <li v-for="achievement in achievementList" class="achievement__item">
        <img :src="`images/achievements/achievement-${achievement.imgName}.png`" :alt="achievement.title" class="achievement__img">
        <div class="achievement__text">
          <span class="achievement__title">{{ achievement.title }}</span>
          <p class="achievement__subtitle">{{ achievement.text }}</p>
        </div>
      </li>
    </ul>
  </div>
  <!-- ./YoutubeSection -->
</template>

<script setup>
const achievementList = [
  {
    title: '1 trillion',
    text: 'Total views',
    imgName: '3'
  },
  {
    title: '12 years',
    text: 'Of empowering content creators',
    imgName: '1'
  },
  {
    title: '3,000+',
    text: 'Partner channels',
    imgName: '2'
  },
  {
    title: '1 trillion',
    text: 'Total views',
    imgName: '3'
  },
]
</script>

