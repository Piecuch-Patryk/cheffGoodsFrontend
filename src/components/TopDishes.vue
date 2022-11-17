<template>
  <div>
    <h1>Our top main courses</h1>
    <p>Nisl et placerat laoreet, ligula mi varius augue, sodales venenatis turpis orci at sapien. Donec molestie sit amet tortor sit amet tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
    <div>
      <img ref="mainImage" src="@/assets/gallery/photo-0.png" alt="">
      <ul>
        <li v-for="(image, index) in featured" :key="image.id">
          <img
            @click="changeImage"
            :class="index === 0 ? 'active' : ''"
            :src="imageUrl(image.imageName)"
            :alt="image.title"
            ref="thumbnails"
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TopDishes',
  inject: ['APIurl'],
  data() {
    return {
      featured: null,
    }
  },
  methods: {
    getFeatured: async function() {
      await axios.get(`${this.APIurl}/api/products/featured`)
      .then((response) => {
        this.featured = response.data
      })
      .catch((error) => {
        console.log(error);
      })
    },
    imageUrl(name) {
      return require(`@/assets/gallery/${name}`)
    },
    changeImage(e) {
      this.changeActiveThumbnail(e)
      this.$refs.mainImage.src = e.target.src
    },
    changeActiveThumbnail(e) {
      this.$refs.thumbnails.forEach(thumbnail => {
        if(thumbnail.classList.contains('active')) thumbnail.classList.remove('active')
        e.target.classList.add('active')
      });
    }
  },
  mounted() {
    this.getFeatured()
  },
}
</script>

<style lang="scss" scoped>
div {
  text-align: center;

  h1 {
    padding: 2rem 0;
  }
  p {
    padding: 0 1rem;
    margin-bottom: 2rem;
    line-height: 1.2;
    letter-spacing: .1rem;
  }
  img {
    width: 100%;
  }

  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 100%;
    
    img {
      width: 100px;
      border-radius: .5rem;

      &.active {
        transform: scale(1.1);
      }
    }
  }

  
}
</style>