<template>
  <section>
    <Logo image="black" />
    <ul>
        <button v-for="category in categories" :key="category.id">
          {{ category.name }}
        </button>
      </ul>
  </section>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  name: 'CategoriesSection',
  props: {
    categories: Object,
  },
  components: {
    Logo,
  }
}
</script>

<style lang="scss" scoped>
section {
  padding: 1rem;
  display: flex;
  align-items: center;

  ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      width: 100%;
      
      button {
        font-size: 1.2rem;
        border: none;
        background: none;
      }
    }
}
</style>
