<template>
  <section>
    <h3>Customers reviews</h3>
    <button class="btn" v-show="!formVisible" @click="formVisible = true">Add review</button>
    <div v-show="formVisible">
      <form>
        <div class="form-row">
          <label for="name">Name</label>
          <input v-model.lazy="name" id="name" type="text">
        </div>
        <div class="form-row">
          <label for="email">Email</label>
          <input v-model.lazy="email" id="email" type="email">
        </div>
        <div class="form-row">
          <label for="Content">Content</label>
          <textarea v-model.lazy="content" id="content"></textarea>
        </div>
        <div class="btn-wrapper">
          <button class="btn" @click="validateForm">Submit</button>
        </div>
      </form>
    </div>
    <div>
      <ul>
        <li v-for="review in reviews" :key="review.id" class="review">
          <div>
            <h4>{{ review.name }}</h4>
            <h5>{{ formatDate(review.created_at) }}</h5>
            <span class="rating">Rating: {{ review.rating }}</span>
            <p>{{ review.content }}</p>
          </div>
        </li>
        <li v-show="showAllReviews" v-for="review in moreReviews" :key="review.id" class="review">
          <div>
            <h4>{{ review.name }}</h4>
            <h5>{{ formatDate(review.created_at) }}</h5>
            <span class="rating">Rating: {{ review.rating }}</span>
            <p>{{ review.content }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <button v-show="!showAllReviews" class="btn" @click="showAllReviews = true">Load More</button>
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
      moreReviews: null,
      showAllReviews: false,
    }
  },
  methods: {
    getReviews: async function() {
      await axios.get(`${this.APIurl}/api/reviews`)
        .then(response => {
          const arrLength = response.data.length;
          this.reviews = response.data.slice(0, arrLength / 2)
          this.moreReviews = response.data.slice(arrLength / 2, arrLength)
        })
        .catch(error => {
          console.log(error)
        })
    },
    formatDate(date) {
      const created = date.split('T')
      return created[0].split('-').join('/')
    }
  },
  mounted() {
    this.getReviews();
  }
}
</script>

<style lang="scss" scoped>
section {
  padding: 1rem;
  text-align: center;

  h3 {
    padding: 1rem 0;
    font-size: 2rem;
  }

  .btn { 
    background: none;
    border-color: #333;
    border-radius: .4rem;
    padding: .4rem;
    color: #333;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  form {
    text-align: left;
    width: 100%;

    .form-row {
      padding: .5rem;
      display: flex;
      flex-direction: column;

      input, textarea {
        padding: .2rem;
      }

      textarea {
        height: 100px;
        font-family: inherit;
      }
    }

    .btn-wrapper {
      text-align: center;
    }
  }

  ul {
    list-style: none;
  }

  .review {
    text-align: left;
    margin-bottom: 1rem;

    .rating {
      margin: .4rem 0;
    }
  }
}
</style>