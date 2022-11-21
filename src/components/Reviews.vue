<template>
  <section>
    <h3>Customers reviews</h3>
    <button class="btn" v-show="!formVisible" @click="formVisible = true">Add review</button>
    <div v-show="formVisible">
      <form>
        <div class="form-row">
          <label for="name">Name</label>
          <span v-if="v$.name.required.$invalid">Please provide a name.</span>
          <span v-if="v$.name.maxLength.$invalid">Only {{ v$.name.maxLength.$params.max }} characters allowed.</span>
          <input v-model="name" id="name" type="text">
        </div>
        <div class="form-row">
          <label for="email">Email</label>
          <span v-if="v$.email.required.$invalid">Please provide email address.</span>
          <span v-if="v$.email.email.$invalid">Please provide valid email address.</span>
          <input v-model="email" id="email" type="email">
        </div>
        <div class="form-row">
          <label for="Content">Content</label>
          <span v-if="v$.content.required.$invalid">Share your opinion with others.</span>
          <span v-if="v$.content.maxLength.$invalid">Only {{ v$.content.maxLength.$params.max }} characters allowed.</span>
          <textarea v-model="content" id="content"></textarea>
        </div>
        <div class="btn-wrapper">
          <button class="btn" @click="submitForm">Submit</button>
        </div>
        <div v-show="info" :class="[success ? 'success' : 'failure', 'info']" v-if="success ? msg = infoMsg.success : msg = infoMsg.failure">
          <p>{{ msg }}</p>
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
import useValidate from '@vuelidate/core'
import { required, email, maxLength, } from '@vuelidate/validators'

export default {
  name: 'Reviews',
  inject: ['APIurl'],
  data() {
    return {
      formVisible: false,
      v$: useValidate(),
      name: '',
      email: '',
      content: '',
      rating: '',
      sending: false,
      reviews: null,
      moreReviews: null,
      showAllReviews: false,
      info: false,
      infoMsg: {
        success: 'Thanks for your opinion!',
        failure: 'Ups, something went wrong. Please try again later.',
      },
      success: false,
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
    },
    submitForm(e) {
      e.preventDefault()
      this.v$.$validate()
      if (!this.v$.$error) {
        axios.post(`${this.APIurl}/api/review`, {
          name: this.name,
          email: this.email,
          content: this.content,
          rating: 4,
        })
        .then(response => {
          this.success = true
          this.info = true
          this.getReviews()
          setTimeout(() => {
            this.formVisible = false
            this.info = false
          }, 2000)
        })
        .catch(error => {
          this.success = false
          this.info = true
          setTimeout(() => {
            this.info = false
          }, 2000)
        });
      }
    },
  },
  validations() {
    return {
      name: {
        required,
        maxLength: maxLength(50),
        $lazy: true,
      },
      email: {
        required,
        email,
        $lazy: true,
      },
      content: {
        required,
        maxLength: maxLength(500),
        $lazy: true,
      },
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
    position: relative;

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

      span {
        font-size: .8rem;
        color: red;
      }
    }

    .info {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255,255,255,1);
      display: flex;
      align-items: center;
      justify-content: center;

      &.success {
        color: green;
      }
      &.failure {
        color: red;
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
