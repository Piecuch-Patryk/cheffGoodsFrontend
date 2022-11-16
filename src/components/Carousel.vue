<template>
  <carousel :items-to-show="1" :autoplay="5000">
    <slide v-for="slide in 3" :key="slide">
      {{ slide }}
    </slide>

    <template #addons>
      <pagination />
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

export default {
  name: 'Carousel',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
}
</script>