<template>
  <!-- LearnMoreCard -->
  <div class="learn-more__card">

    <img class="learn-more__img" :src="`/images/${card.imgName}.png`" :alt="card.imgName">

    <div class="learn-more__text">
      <h3>{{card.title}}</h3>
      <p>{{card.text}}</p>
    </div>
    
  </div>
  <!-- ./LearnMoreCard -->
</template>

<script setup>
// props
const props = defineProps({
  card: Object
})
</script>