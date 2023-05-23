<template>
  <!-- StarCard -->
  <div class="star-card">

    <div class="star-card__star">
      <h4 class="star-card__name">
        {{star.name}}
      </h4>
      <span class="star-card__subscribers">1 Mil subscribers</span>
    </div>

    <img class="star-card__img" :src="`/images/stars/${star.imgName}-card.png`" :alt="star.imgName">

    <div class="star-card__info">
      <span class="star-card__label">Market price</span>
      <span class="star-card__value">1,4 RC</span>
    </div>
    <div class="star-card__info">
      <span class="star-card__label">ramainig time</span>
      <span class="star-card__value">1Y : 2M : 3H</span>
    </div>
  </div>
  <!-- ./StarCard -->
</template>

<script setup>
// props
const props = defineProps({
  star: Object
})
</script>