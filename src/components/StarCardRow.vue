<template>
  <!-- StarCardRow -->
  <div class="star-card__row">
    <StarCard
      v-for="star in starList"
      :class="star.class"
      :key="star.name"
      :star="star"
    />
  </div>
  <!-- ./StarCardRow -->
</template>

<script setup>
import StarCard from '@/components/StarCard.vue'

const starList = [
  {
    name: 'Monatik',
    imgName: 'star-1',
    class: 'hide--tablet'
  },
  {
    name: 'Diana Show',
    imgName: 'star-2',
  },
  {
    name: 'Anna Trincher',
    imgName: 'star-3',
    class: 'hide--tablet'
  },
]

</script>