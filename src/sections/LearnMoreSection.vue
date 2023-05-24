<template>
  <!-- CreatorFanSection -->
  <section class="learn-more section">
    <div class="container">

      <LearnMoreCardRow />

      <img class="learn-more__bg hide--tablet" src="/images/bg/heart-bg.svg" alt="bg">
    </div>
  </section>
  <!-- ./CreatorFanSection -->
</template>

<script setup>
import LearnMoreCardRow from '@/components/LearnMoreCardRow.vue'

import { onMounted } from 'vue';

import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// props
const props = defineProps({
  windowWidth: Number
})

// onMounted
onMounted(() => {
  if(window.innerWidth >= props.windowWidth) {
    // learn-more
    const learnMoreBoxs = document.querySelectorAll('.learn-more__box')

    const learnMoreTL = gsap.timeline({
      scrollTrigger: {
        scroller: '.page-container',
        trigger: '.learn-more.section',
        start: 'top 60%',
      }
    })

    const learnMoreItemPreset = [
      { xPercent: -160 },
      { xPercent: 160 }
    ]

    learnMoreBoxs.forEach((learnMoreItem, index) => {
      learnMoreTL.fromTo((learnMoreItem), {
        xPercent: learnMoreItemPreset[index].xPercent,
        yPercent: 60,
        rotate: '-160deg',
      }, {
        xPercent: 0,
        yPercent: 0,
        rotate: '0',
        duration: 1
      }, 0)
    })

    const learnMoreBg = document.querySelector('.learn-more__bg')
    gsap.to(learnMoreBg, {
      scrollTrigger: {
        scroller: '.page-container',
        trigger: '.learn-more.section',
        start: 'top 20%',
        onEnter: () => {
          learnMoreBg.src = '/images/bg/heart-bg_animated.svg'
        },
      }
    })
  }
})
</script>

