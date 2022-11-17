<template>
  <TopBar :categories="categories" />
  <router-view :categories="categories"></router-view>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import axios from 'axios'

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
}

</style>
