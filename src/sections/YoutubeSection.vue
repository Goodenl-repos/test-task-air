<template>
  <!-- YoutubeSection -->
  <section class="youtube section">
    <div class="container">
      <div class="youtube__text">
        <h2 class="youtube__title">
          <span>Created by experts</span>
          <span> in <span class="youtube__highlight">Youtube</span></span>
        </h2>
        <p class="youtube__subtitle">
          <span>Royalty is the blockchain branch of AIR Media-Tech, one the world’s largest </span>
          <span>creator ecosystems. AIR Media-Tech is dedicated to increasing the reach and</span>
          <span>revenue of digital content creators across the world.</span>
        </p>
      </div>

      <AchievementRow />
    </div>
  </section>
  <!-- ./YoutubeSection -->
</template>

<script setup>
import AchievementRow from '@/components/AchievementRow.vue'

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
  const youtubeHighlightEl = document.querySelector('.youtube__highlight')

  if(window.innerWidth >= props.windowWidth) {
    // youtube
    gsap.from(".youtube__title > span", {
      duration: .5,
      height: '0px',
      stagger: .2,
      y: 50,
      scrollTrigger: {
        scroller: '.page-container',
        trigger: '.youtube.section',
        start: 'top 50%',
      }
    })

    gsap.from('.youtube__subtitle > span', {
      delay: .8,
      duration: .6,
      height: '0px',
      stagger: .1,
      opacity: 0,
      y: 50,
      scrollTrigger: {
        scroller: '.page-container',
        trigger: '.youtube.section',
        start: 'top 50%',
        onEnter: () => {
          youtubeHighlightEl.classList.add('anima');
        },
      }
    })

    // achievements
    let achievementTL = gsap.timeline({
      scrollTrigger: {
        scroller: '.page-container',
        trigger: '.youtube.section',
        start: 'top 20%',
      }
    })

    achievementTL.fromTo('.achievement__list',{
        x: -800
      },{
        duration: 30, 
        x: 80
      }
    )
  } else {
    youtubeHighlightEl.classList.add('anima');
  }
})
</script>

