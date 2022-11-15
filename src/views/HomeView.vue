<template>
  <HomeHeader />
  <CategoriesSection :categories="categories" />
  <Carousel />
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue'
import CategoriesSection from '@/components/CategoriesSection.vue'
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'HomeView',
  props: {
    categories: Object,
  },
  components: {
    HomeHeader,
    CategoriesSection,
    Carousel,
  }
}
</script>