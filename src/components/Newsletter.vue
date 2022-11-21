<template>
  <section>
    <h4>Newsletter - GET 15% OFF</h4>
    <form>
      <div>
        <input v-model="email" type="email" placeholder="email">
        <div class="errors">
          <p v-if="v$.email.required.$invalid">Please provide email address.</p>
          <p v-if="v$.email.email.$invalid">Please provide valid email address.</p>
        </div>
      </div>
      <div>
        <button @click="submitForm">Submit</button>
      </div>
      <div v-show="info" class="info">
        <p :class="success ? 'success' : 'failure'" v-if="success ? msg = 'Thanks, check your mailbox!' : msg = 'Ups, something went wrong. Please try again later.'">{{ msg }}</p>
      </div>
    </form>
  </section>  
</template>

<script>
import axios from 'axios'
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  name: 'Newsletter',
  inject: ['APIurl'],
  data() {
    return {
      v$: useValidate(),
      email: '',
      info: false,
      success: false,
      msg: '',
      msgTimeout: 4000,
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault()
      this.v$.$validate()
      if (!this.v$.$error) {
        axios.post(`${this.APIurl}/api/newsletter`, {
          email: this.email,
        })
        .then(response => {
          this.email = ''
          this.success = true
          this.info = true
          setTimeout(() => {
            this.info = false
          }, this.msgTimeout)
        })
        .catch(error => {
          this.success = false
          this.info = true
          setTimeout(() => {
            this.info = false
          }, this.msgTimeout)
        });
      }
    },
  },
  validations() {
    return {
      email: {
        required,
        email,
        $lazy: true,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
section {
  position: relative;
  padding: 3rem 1rem;
  text-align: center;
  background-image: url('@/assets/newsletter-bg.png');
  background-position: center;
  background-size: cover;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.7);
    z-index: 1;
  }

  h4 {
    font-size: 1.5rem;
    color: #fff;
    padding: 1rem 0 2rem;
    position: relative;
    z-index: 2;
  }
  form {
    display: flex;
    flex-direction: column;
    position: relative;
    position: relative;
    z-index: 2;

    input {
      background: none;
      border: none;
      border-bottom: 1px solid #fff;
      color: #fff;
      width: 100px;
      text-align: center;
      font-size: 1.3rem;
      padding: .2rem;
      margin-bottom: 2rem;

      &::placeholder {
        color: #fff;
      }
    }

    button {
      border: none;
      background-color: #fff;
      color: #000;
      font-size: 1.3rem;
      padding: .4rem 1rem;
      border-radius: .4rem;
      position: relative;
      z-index: 2;
    }
    .errors {
      color: #fff;
    }
    .info {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: .4rem;

      .success {
        color: green;
      }

      .failure {
        color: red;
      }
    }
  }
}
</style>