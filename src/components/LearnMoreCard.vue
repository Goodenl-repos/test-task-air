<template>
  <!-- LearnMoreCard -->
  <div ref="cardEl" class="learn-more__card" data-transform="-270 -10">

    <img ref="cardImg" class="learn-more__img" :src="`/images/${card.imgName}.png`" :alt="card.imgName"  data-transform="-360, -20">

    <div class="learn-more__text">
      <h3>{{card.title}}</h3>
      <p>{{card.text}}</p>
    </div>

    <span ref="cursor" class="learn-more__cursor">
      Learn more
    </span>
  </div>
  <!-- ./LearnMoreCard -->
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// props
const props = defineProps({
  card: Object
})

// refs
const cursor = ref(null)
const cardEl = ref(null)
const cardImg = ref(null)


// on mounted
onMounted(() => {
  cardEl.value.addEventListener('mouseenter', handleMouseEnter);
  cardEl.value.addEventListener('mouseleave', handleMouseLeave);
  cardEl.value.addEventListener('mousemove', handleMouseMove);
})

onBeforeUnmount(() => {
  cardEl.value.removeEventListener('mouseenter', handleMouseEnter);
  cardEl.value.removeEventListener('mouseleave', handleMouseLeave);
  cardEl.value.removeEventListener('mousemove', handleMouseMove);
})

// methods
const handleMouseMove = (e) => {
  e.preventDefault()
  e.stopPropagation()

  // cursor
  let x = e.offsetX - 139 / 2;
  let y = e.offsetY - 139 / 2;
  cursor.value.style.left = x + 'px';
  cursor.value.style.top = y + 'px';

  // parallax
  const [trnsX, trnsY] = cardEl.value.dataset.transform.split(' ')
  const shiftX = (window.innerWidth - x * 5) / 90
  const shiftY = (window.innerWidth - y * 5) / 190
  cardImg.value.style.transform = `translate(${trnsX - shiftX}px, ${trnsY - shiftY}px)`
}

const handleMouseEnter = (e) => {
  cursor.value.classList.add('show')
}

const handleMouseLeave = (e) => {
  cursor.value.classList.remove('show')
}
</script>