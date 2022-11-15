<template>
  <ul>
    <li>
      <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
        <img :src="require('@/assets/socials/instagram.png')" alt="instagram logo">
      </a>
    </li>
    <li>
      <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
        <img :src="require('@/assets/socials/facebook.png')" alt="facebook logo">
      </a>
    </li>
    <li>
      <a href="http://tripadvisor.com" target="_blank" rel="noopener noreferrer">
        <img class="img-tripadvisor" :src="require('@/assets/socials/tripadvisor.png')" alt="tripadvisor logo">
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;
  align-items: center;

  img {
    width: 1rem;
    margin: auto .5rem;

    &.img-tripadvisor {
      width: 1.5rem;
    }
  }
}
</style>