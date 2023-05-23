<template>
  <!-- IntroSection -->
  <div class="intro section container">
    <VHeader />
    <div class="intro__main">
      <img class="intro__bg" src="/images/bg/star-bg.svg" alt="Background star">

      <h1 class="intro__title">
        Empowering Every Creator Connecting Every Fan
      </h1>

      <div class="intro__box">
        <div class="intro__info">
          <p>With Royalty, content creators can turn ad revenue into digital tokens, giving fans the opportunity to directly support and invest in their favorite creators.</p>
          <button class="btn btn--text">Сonnect Wallet</button>
        </div>
        <div>
          <StarCardRow />
        </div>
      </div>
    </div>
  </div>
  <!-- ./IntroSection -->
</template>

<script setup>
import VHeader from '@/components/VHeader.vue'
import StarCardRow from '@/components/StarCardRow.vue'
</script>
