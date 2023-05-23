<template>
  <!-- AppealSection -->
  <div class="appeal section">
    <div class="container">
      <div class="appeal__text">
        <h2 class="appeal__title">
          Everyone can earn in the new creator economy
        </h2>
        <p class="appeal__subtitle">Trade tokens on Royalty’s open marketplace platform with ease!</p>
      </div>

      <ul class="token__list">
        <li v-for="token in Array(5)" class="token__item">
          <img src="/images/token.png" alt="token">
        </li>
      </ul>

      <img class="appeal__bg" src="/images/bg/curve-bg.svg" alt="bg">
    </div>
  </div>
  <!-- ./AppealSection -->
</template>

<script setup>

</script>

