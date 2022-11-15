<template>
  <div class="top-bar">
    <Logo />
    <Socials />
    <Navigation :categories="categories" />
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Socials from '@/components/Socials.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'TopBar',
  components: {
    Logo,
    Socials,
    Navigation,
  },
  props: {
    categories: Object,
  }
}
</script>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 5rem;
  left: 0;
  right: 0;
  padding: 0 2rem;
  z-index: 100;
}
</style>