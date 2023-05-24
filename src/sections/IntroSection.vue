<template>
  <!-- IntroSection -->
  <section class="intro section ">
    <div class="container">
      <VHeader />
        <div class="intro__main">
          <img class="intro__bg" src="/images/bg/star-bg.svg" alt="Background star">

          <h1 class="intro__title">
            <span>Empowering Every&nbsp;</span>
            <span>Creator Connecting&nbsp; </span>
            <span>Every Fan</span>
          </h1>
          
          <div class="intro__box">
            <div class="intro__info">
              <p class="hide--tablet"><span>With Royalty, content creators can</span> <span>turn ad revenue into digital tokens,</span> <span>giving fans the opportunity to</span> <span>directly support and invest in their</span> <span>favorite creators.</span></p>
              <p class="show--tablet">Royalty - the blockchain branch of Air Media tech - is harnessing the power of the blockchain to revolutionize the digital content creation industry.</p>
              <button class="btn btn--text">Сonnect Wallet</button>
            </div>
            <div>
              <StarCardRow />
            </div>
          </div>
        </div>
    </div>
  </section>
  <!-- ./IntroSection -->
</template>

<script setup>
import VHeader from '@/components/VHeader.vue'
import StarCardRow from '@/components/StarCardRow.vue'

import { onMounted } from 'vue';

import { gsap } from 'gsap'

// props
const props = defineProps({
  windowWidth: Number
})

// onMounted
onMounted(() => {
  const introTL = gsap.timeline()
  const introBg = document.querySelector('.intro__bg')
  gsap.set(introBg, {visibility: 'hidden', rotate: '-20deg'})
  
  let startShift = 0
  
  if(window.innerWidth >= props.windowWidth) {
    introTL
    .to('.dark-screen', {
      opacity: 0,
      delay: .5,
      duration: 1
    }, 0)
    .to('.dark-screen', {
      display: 'none',
      delay: 1
    }, 0)
    .from('.logo', {
      yPercent: 1300,
      xPercent: 300,
      scale: 2,
      delay: .5,
      color: 'white',

      ease: 'Power2.easeInOut',
      duration: 1
    }, 0)
    .from('.logo__icon > path', {
      stroke: 'white',
      delay: .5,
      ease: 'Power2.easeInOut',
      duration: 1
    }, 0)

    startShift = 1.5
  }

  introTL.addLabel("header", startShift + 0.5);
  introTL.addLabel("introMain", startShift + 0.5);
  introTL.addLabel("starCard", startShift + 0.8);
  const starCardUp = startShift + 0.2
  introTL.addLabel("introText", startShift + 2);
  
  introTL
  // header
  .from('.header > .btn--primary', {
    opacity: 0,
    y: 50,
    duration: .5
  }, 1)
  .from('.nav__item', {
    opacity: 0,
    stagger: .2,
    duration: .5
  }, '-=.3')
  // intro title & intro star bg
  .fromTo('.intro__title > span', {
    xPercent: 50,
  }, {
    xPercent: 0,

    stagger: .1,
    ease: 'Power2.easeOut',
    duration: 1.5,
  }, 'introMain')
  .from('.intro__title > span', {
    opacity: 0,
    duration: .8,
  }, 'introMain')
  .to(introBg, {
    rotate: '15deg',
    duration: 25,
    
    onStart: () => {
      introBg.src = '/bg/star-bg_animated.svg'
    }
  }, 'introMain')
  .to(introBg, {
    visibility: 'visible',
  }, '-=24.9')
  // star-card
  .from('.star-card', {
    yPercent: 250,
    xPercent: -100,
    rotate: '-90deg',

    stagger: -.15,
    ease: 'Power2.easeOut',
    duration: 1.2,
  }, 'starCard')
  .from('.star-card__img', {
    x: -50,
    y: 20,
    scale: 1.4,
    rotate: '20deg',
    duration: 1
  }, 'starCard')
  .from('.star-card__info', {
    opacity: 0,
    // stagger: -.3,
    scale: 1.2,
    duration: 1.3
  }, starCardUp + 0.7)
  .from('.star-card__star', {
    opacity: 0,
    stagger: -.3,
    scale: 1.2,
    duration: .8
  }, starCardUp + 1)
  // intro text & button
  .from('.intro__info > p > span', {
    opacity: 0,
    stagger: .05,
    duration: .3
  }, 'introText')
  .from('.intro__info > p > span', {
    y: 50,
    stagger: .05,
    duration: .8
  }, 'introText')
  .from('.intro__info > button', {
    y: 50,
    opacity: 0,
    duration: .8
  }, starCardUp + 2)
})
</script>
