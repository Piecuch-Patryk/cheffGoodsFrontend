<template>
  <nav>
    <NavButton @toggle="expand = !expand" :expand="expand" />
    <ul v-show="expand">
      <router-link to="/">Home</router-link>
      <router-link to="#">About Us</router-link>
      <router-link to="#">Location</router-link>
      <router-link to="#">Contact Us</router-link>
    </ul>
  </nav>
</template>

<script>
import NavButton from '@/components/NavButton.vue'

export default {
  name: 'Navigation',
  components: {
    NavButton,
  },
  data() {
    return {
      expand: false,
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  button {
    background: none;
    border: none;
    color: #fff;
    font-size: 1.1rem;
  }

  ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255,255,255,.8);
    text-align: center;

    a {
      text-decoration: none;
      color: #333;
      font-size: 1.5rem;
    }
  }
}


</style>