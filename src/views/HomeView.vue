<template>
  <HomeHeader />
  <CategoriesSection :categories="categories" />
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue'
import CategoriesSection from '@/components/CategoriesSection.vue'

export default {
  name: 'HomeView',
  props: {
    categories: Object,
  },
  components: {
    HomeHeader,
    CategoriesSection,
  }
}
</script>