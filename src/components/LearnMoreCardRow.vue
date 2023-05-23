<template>
  <!-- LearnMoreCardRow -->
  <div class="learn-more__row">
    <LearnMoreCard
      v-for="learnCard in learCardList"
      :key="learnCard.title"
      :card="learnCard"
    />
  </div>
  <!-- ./LearnMoreCardRow -->
</template>

<script setup>
import LearnMoreCard from '@/components/LearnMoreCard.vue'

const learCardList = [
  {
    title: 'Creators',
    text: 'Creators earn through token sales, engaging with existing fans and drawing in new supporters.',
    imgName: 'creators'
  },
  {
    title: 'Fans',
    text: 'Fans receive regular payments for holding their tokens. Payments are drawn from ad revenue of their favorite social media creators.',
    imgName: 'fans'
  },
]
</script>

