<template>
  <div class="top-bar">
    <Logo />
    <Socials />
    <Navigation />
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
  left: 2rem;
  right: 2rem;
}
</style>