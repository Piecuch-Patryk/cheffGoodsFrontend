<template>
  <TopBar :categories="categories" />
  <router-view :categories="categories"></router-view>
  <Footer :categories="categories" />
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import axios from 'axios'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  inject: ['APIurl'],
  data() {
    return {
      categories: null,
    }
  },
  components: {
    TopBar,
    Footer,
  },
  methods: {
    getCategories: async function() {
      await axios.get(`${this.APIurl}/api/categories`)
      .then((response) => {
        this.categories = response.data
      })
      .catch((error) => {
        console.log(error);
      })
    },
  },
  mounted() {
      this.getCategories()
    }
  }

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: sans-serif;

  .z-index-2 {
    position: relative;
    z-index: 2;
  }

  .modal {
    position: fixed;
    bottom: 0%;
    top: 0%;
    height: 100vh;
    overflow: scroll;
    background-color: #fff;
    z-index: 101;
    padding: 1.5rem;

    .close {
      position: absolute;
      right: 2rem;
      top: 0;
      width: 32px;
      height: 32px;
      opacity: 0.3;
      border: none;
      background: none;
    }
    .close:hover {
      opacity: 1;
    }
    .close:before, .close:after {
      position: absolute;
      left: 15px;
      content: ' ';
      height: 33px;
      width: 2px;
      background-color: #333;
    }
    .close:before {
      transform: rotate(45deg);
    }
    .close:after {
      transform: rotate(-45deg);
    }
  }
}

</style>
