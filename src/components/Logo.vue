<template>
  <div>
    <img :src="require(`@/assets/logo-${image}.png`)" alt="Cheffgoods logo">
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    image: {
      type: String,
      default: 'white',
    },
  },
}

</script>

<style lang="scss" scoped>
img {
  // width: 100%;
}
</style>