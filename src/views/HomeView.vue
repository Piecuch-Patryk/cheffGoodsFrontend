<template>
  <HomeHeader />
  <CategoriesSection :categories="categories" />
  <carousel :items-to-show="1" :autoplay="5000">
    <slide v-for="slide in 3" :key="slide">
      {{ slide }}
    </slide>

    <template #addons>
      <pagination />
    </template>
  </carousel>
  <main>
    <TopDishes />
  </main>
  <Reviews />
  <Newsletter />
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue'
import CategoriesSection from '@/components/CategoriesSection.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import TopDishes from '@/components/TopDishes.vue'
import Reviews from '@/components/Reviews.vue'
import Newsletter from '@/components/Newsletter.vue'

export default {
  name: 'HomeView',
  props: {
    categories: Object,
  },
  components: {
    HomeHeader,
    CategoriesSection,
    Carousel,
    Slide,
    Pagination,
    TopDishes,
    Reviews,
    Newsletter,
  }
}
</script>