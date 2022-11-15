<template>
  <TopBar :categories="categories" />
  <router-view :categories="categories"></router-view>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      categories: null,
    }
  },
  components: {
    TopBar,
  },
  mounted() {
    axios.get(`http://127.0.0.1:8000/api/categories`)
      .then((response) => {
        this.categories = response.data
      })
      .catch((error) => {
        console.log(error);
      })
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
}

</style>
