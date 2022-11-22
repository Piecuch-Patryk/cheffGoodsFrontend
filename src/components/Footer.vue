<template>
  <footer>
    <div class="logo-wrapper">
      <Logo image="black" />
    </div>
    <div>
      <ul>
        <li v-for="category of categories" :key="category.id">
          <button>{{ category.name }}</button>
        </li>
        <li>
          <button @click="showPrivacyPolicy = true">Privacy Policy</button>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>Cheff Goods</li>
        <li>City, 49 Street</li>
        <li>01952-234-213</li>
      </ul>
    </div>
    <div>
      <ul>
        <li>Opening Times</li>
        <li>Mon-Sat 12am - 11pm</li>
        <li>Sun 11am - 9pm</li>
      </ul>
    </div>
    <Teleport to="#app">
      <div v-show="showPrivacyPolicy" class="modal privacy">
        <button @click="showPrivacyPolicy = false" class="close"></button>
        <h5>Privacy Policy</h5>
        <ol type="1">
          <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatum architecto tenetur ex praesentium repudiandae aut provident id pariatur eius reprehenderit nisi iusto odit delectus, commodi deleniti omnis eaque maiores aliquam eos beatae perspiciatis. Enim fuga, rerum nihil est omnis illum quos molestiae reprehenderit modi ducimus ipsa beatae repellendus vel reiciendis alias hic quas deserunt natus velit facilis sit aperiam? Explicabo veniam minus provident mollitia aliquam! Similique officia non quibusdam distinctio recusandae rem blanditiis praesentium maxime ratione omnis fugit laborum, iste provident eligendi odio dolor modi, eos sed ipsa unde laudantium? Cum animi officiis nostrum facilis maiores non sed. Assumenda.</p>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatum architecto tenetur ex praesentium repudiandae aut provident id pariatur eius reprehenderit nisi iusto odit delectus, commodi deleniti omnis eaque maiores aliquam eos beatae perspiciatis. Enim fuga, rerum nihil est omnis illum quos molestiae reprehenderit modi ducimus ipsa beatae repellendus vel reiciendis alias hic quas deserunt natus velit facilis sit aperiam? Explicabo veniam minus provident mollitia aliquam! Similique officia non quibusdam distinctio recusandae rem blanditiis praesentium maxime ratione omnis fugit laborum, iste provident eligendi odio dolor modi, eos sed ipsa unde laudantium? Cum animi officiis nostrum facilis maiores non sed. Assumenda.</p>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatum architecto tenetur ex praesentium repudiandae aut provident id pariatur eius reprehenderit nisi iusto odit delectus, commodi deleniti omnis eaque maiores aliquam eos beatae perspiciatis. Enim fuga, rerum nihil est omnis illum quos molestiae reprehenderit modi ducimus ipsa beatae repellendus vel reiciendis alias hic quas deserunt natus velit facilis sit aperiam? Explicabo veniam minus provident mollitia aliquam! Similique officia non quibusdam distinctio recusandae rem blanditiis praesentium maxime ratione omnis fugit laborum, iste provident eligendi odio dolor modi, eos sed ipsa unde laudantium? Cum animi officiis nostrum facilis maiores non sed. Assumenda.</p>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatum architecto tenetur ex praesentium repudiandae aut provident id pariatur eius reprehenderit nisi iusto odit delectus, commodi deleniti omnis eaque maiores aliquam eos beatae perspiciatis. Enim fuga, rerum nihil est omnis illum quos molestiae reprehenderit modi ducimus ipsa beatae repellendus vel reiciendis alias hic quas deserunt natus velit facilis sit aperiam? Explicabo veniam minus provident mollitia aliquam! Similique officia non quibusdam distinctio recusandae rem blanditiis praesentium maxime ratione omnis fugit laborum, iste provident eligendi odio dolor modi, eos sed ipsa unde laudantium? Cum animi officiis nostrum facilis maiores non sed. Assumenda.</p>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatum architecto tenetur ex praesentium repudiandae aut provident id pariatur eius reprehenderit nisi iusto odit delectus, commodi deleniti omnis eaque maiores aliquam eos beatae perspiciatis. Enim fuga, rerum nihil est omnis illum quos molestiae reprehenderit modi ducimus ipsa beatae repellendus vel reiciendis alias hic quas deserunt natus velit facilis sit aperiam? Explicabo veniam minus provident mollitia aliquam! Similique officia non quibusdam distinctio recusandae rem blanditiis praesentium maxime ratione omnis fugit laborum, iste provident eligendi odio dolor modi, eos sed ipsa unde laudantium? Cum animi officiis nostrum facilis maiores non sed. Assumenda.</p>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatum architecto tenetur ex praesentium repudiandae aut provident id pariatur eius reprehenderit nisi iusto odit delectus, commodi deleniti omnis eaque maiores aliquam eos beatae perspiciatis. Enim fuga, rerum nihil est omnis illum quos molestiae reprehenderit modi ducimus ipsa beatae repellendus vel reiciendis alias hic quas deserunt natus velit facilis sit aperiam? Explicabo veniam minus provident mollitia aliquam! Similique officia non quibusdam distinctio recusandae rem blanditiis praesentium maxime ratione omnis fugit laborum, iste provident eligendi odio dolor modi, eos sed ipsa unde laudantium? Cum animi officiis nostrum facilis maiores non sed. Assumenda.</p>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatum architecto tenetur ex praesentium repudiandae aut provident id pariatur eius reprehenderit nisi iusto odit delectus, commodi deleniti omnis eaque maiores aliquam eos beatae perspiciatis. Enim fuga, rerum nihil est omnis illum quos molestiae reprehenderit modi ducimus ipsa beatae repellendus vel reiciendis alias hic quas deserunt natus velit facilis sit aperiam? Explicabo veniam minus provident mollitia aliquam! Similique officia non quibusdam distinctio recusandae rem blanditiis praesentium maxime ratione omnis fugit laborum, iste provident eligendi odio dolor modi, eos sed ipsa unde laudantium? Cum animi officiis nostrum facilis maiores non sed. Assumenda.</p>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatum architecto tenetur ex praesentium repudiandae aut provident id pariatur eius reprehenderit nisi iusto odit delectus, commodi deleniti omnis eaque maiores aliquam eos beatae perspiciatis. Enim fuga, rerum nihil est omnis illum quos molestiae reprehenderit modi ducimus ipsa beatae repellendus vel reiciendis alias hic quas deserunt natus velit facilis sit aperiam? Explicabo veniam minus provident mollitia aliquam! Similique officia non quibusdam distinctio recusandae rem blanditiis praesentium maxime ratione omnis fugit laborum, iste provident eligendi odio dolor modi, eos sed ipsa unde laudantium? Cum animi officiis nostrum facilis maiores non sed. Assumenda.</p>
          </li>
        </ol>
      </div>
    </Teleport>
  </footer>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  name: 'Footer',
  components: {
    Logo,
  },
  props: {
    categories: Object,
  },
  data() {
    return {
      showPrivacyPolicy: false,
    }
  },
}
</script>

<style lang="scss" scoped>
footer {
  text-align: center;
  font-size: 1.5rem;

  .logo-wrapper {
    padding: 1rem 0;
  }

  button {
    font-size: 1.5rem;
    border: none;
    background: none;
  }
 
  ul {
    list-style: none;
    margin-bottom: 2rem;
  }
}
.privacy {
  font-size: 1.2rem;

  h5 {
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  li {
    margin-bottom: 1rem;
  }
}
</style>