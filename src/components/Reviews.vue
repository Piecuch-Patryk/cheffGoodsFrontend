<template>
  <section>
    <h3>Customers reviews</h3>
    <button v-show="!formVisible" @click="formVisible = true">Add review</button>
    <div v-show="formVisible">
      <form>
        <input v-model="name" type="text">
        <input v-model="email" type="email">
        <textarea v-model="content" cols="30" rows="10"></textarea>
        <button @click="validateForm">Submit</button>
      </form>
    </div>
    <div>
      <ul>
        <li v-for="review in reviews" :key="review.id">
          <h4>{{ review.name }}</h4>
          <h5>{{ formatDate(review.created_at) }}</h5>
          <span>Rating: {{ review.rating }}</span>
          <p>{{ review.content }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Reviews',
  inject: ['APIurl'],
  data() {
    return {
      formVisible: false,
      name: '',
      email: '',
      content: '',
      rating: '',
      sending: false,
      reviews: null,
    }
  },
  methods: {
    validateForm() {
      console.log(this.name)
    },
    getReviews: async function() {
      await axios.get(`${this.APIurl}/api/reviews`)
        .then(response => {
          this.reviews = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    formatDate(date) {
      console.log(new Date())
    },
  },
  mounted() {
    this.getReviews();
  }
}
</script>

<style lang="scss" scoped>

</style>