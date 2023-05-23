<template>
  <!-- StarCardRow -->
  <div class="star-card__row">
    <StarCard
      v-for="star in starList"
      :key="star.name"
      :star="star"
    />
  </div>
  <!-- ./StarCardRow -->
</template>

<script setup>
import StarCard from '@/components/StarCard.vue'
import { reactive } from 'vue'

const starList = reactive([
  {
    name: 'Monatik',
    imgName: 'star-1'
  },
  {
    name: 'Diana Show',
    imgName: 'star-2'
  },
  {
    name: 'Anna Trincher',
    imgName: 'star-3'
  },
])

</script>