<template>
  <nav>
    <NavButton @toggle="expand = !expand" :expand="expand" />
    <div v-show="expand" class="expandable">
      <ul class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="#">About Us</router-link>
        <router-link to="#">Location</router-link>
        <router-link to="#">Contact Us</router-link>
        <NavButton @toggle="expand = !expand" :expand="expand" text="X" color="#333" />
      </ul>
      <h3>Our Courses</h3>
      <ul class="courses">
        <button v-for="category in categories" :key="category.id">
          {{ category.name }}
        </button>
      </ul>
    </div>
  </nav>
</template>

<script>
import NavButton from '@/components/NavButton.vue'

export default {
  name: 'Navigation',
  components: {
    NavButton,
  },
  props: {
    categories: Object,
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
  .expandable {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255,255,255);
    text-align: center;

    .nav {
      position: relative;
      list-style: none;
      padding: 2rem 0;
      
      a {
        text-decoration: none;
        background-color: #000;
        color: #fff;
        margin: 0 .2rem;
        padding: .5rem;
        border-radius: .5rem;
      }
    }

    .courses {
      list-style: none;
      margin: 1rem 0;
      
      button {
        display: block;
        margin: .5rem auto;
        font-size: 1.2rem;
        border: none;
        background: none;
      }
    }
  }
}


</style>