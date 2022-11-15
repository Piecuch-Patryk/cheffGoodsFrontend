<template>
  <header>
    <div class="z-index-2">
      <p>Possimus adipisci corrupti! Alias, magni cupiditate. Eaque amet eveniet unde voluptas aut? Consequuntur voluptate natus incidunt enim alias eos excepturi reiciendis provident, quae tempora praesentium.</p>
      <button>book now</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100vh;
  background-image: url('@/assets/header-bg.png');
  background-position: center;
  background-size: cover;
  text-align: center;
  padding: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.7);
    z-index: 1;
  }

  p {
    color: #fff;
    line-height: 1.5;
    font-size: 1.2rem;
    letter-spacing: .2rem;
  }

  button {
    text-transform: uppercase;
    border: none;
    background-color: #fff;
    font-size: 1.5rem;
    padding: .5rem 1rem;
    border-radius: 1rem;
    font-weight: bold;
    margin: 2rem auto;
  }
}
</style>