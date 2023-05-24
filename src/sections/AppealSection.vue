<template>
  <!-- AppealSection -->
  <section class="appeal section">
    <div class="container">
      <div class="appeal__text">
        <h2 class="appeal__title">
          <span>Everyone can earn</span>
          <span>in the <span class="appeal__highlight">new creator </span></span>
          <span>economy</span>
        </h2>
        <p class="appeal__subtitle">Trade tokens on Royalty’s open marketplace platform with ease!</p>
      </div>

      <ul class="token__list">
        <li v-for="token in Array(20)" class="token__item">
          <img src="/images/token.png" alt="token">
        </li>
      </ul>

      <img class="appeal__bg hide--tablet" src="/images/bg/curve-bg.svg" alt="bg">
    </div>
  </section>
  <!-- ./AppealSection -->
</template>

<script setup>

import { onMounted } from 'vue';

import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // appeal Text
  gsap.from(".appeal__title > span", {
    duration: .5,
    height: '0px',
    stagger: .2,
    y: 50,
    scrollTrigger: {
      scroller: '.page-container',
      trigger: '.appeal.section',
      start: 'top 50%',
    }
  })
  
  gsap.from('.appeal__subtitle', {
    duration: .6,
    delay: .8,
    opacity: 0,
    y: 50,
    scrollTrigger: {
      scroller: '.page-container',
      trigger: '.appeal.section',
      start: 'top 50%',
      onEnter: () => {
        const appealHighlightEl = document.querySelector('.appeal__highlight')
        appealHighlightEl.classList.add('anima');
      },
    }
  })

  // appealBg
  const appealBg = document.querySelector(".appeal__bg")
  gsap.set(appealBg, {opacity: 0})
  
  gsap.to(appealBg, {
    xPercent: -10,
    opacity: 1,
    duration: 4,
    scrollTrigger: {
      scroller: '.page-container',
      trigger: '.appeal.section',
      start: '0% 20%',
      end: 'top -80%',
      onEnter: () => {
        appealBg.src = "/images/bg/curve-bg_animated.svg"
      },
    }
  })

  gsap.to(appealBg, {
    yPercent: 40,
    scrollTrigger: {
      scroller: '.page-container',
      trigger: '.appeal__bg',
      start: 'top 40%',
      end: 'top -40%',
      scrub: true,
    }
  })

  // tokens
  let tokenTL = gsap.timeline({
    scrollTrigger: {
      scroller: '.page-container',
      trigger: '.appeal.section',
      start: 'top 50%',
    }
  })

  tokenTL.fromTo('.token__list', {xPercent: -100}, {xPercent: 0, ease: 'Power4.easeOut', duration: 120})

  const tokensItems = gsap.utils.toArray(".token__item");
  tokensItems.forEach((tokenItem, index) => {
    const max = 8;
    const min = 3;
    
    const shift = Math.floor(Math.random() * (max - min + 1)) + min;
    const isNegative = Math.random() < 0.5;

    gsap.fromTo(tokenItem,{
        rotation: `${!isNegative ? '-' : ''}${shift}deg`
      },{
        rotation: `${isNegative ? '-' : ''}${shift}deg`,
        // delay: index * .2,
        duration: 1,
        repeat: -1,
        yoyo: true
      }
    )
  })
})
</script>

