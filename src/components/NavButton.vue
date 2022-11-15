<template>
  <button class="menu" @click="$emit('toggle')" :class="expand ? 'opened' : ''" :aria-expanded="expand" aria-label="Main Menu">
    M <br>
    E <br>
    N <br>
    U
  </button>
</template>

<script>
export default {
  name: 'NavButton',
  props: {
    expand: {
      type: Boolean,
      default: false,
    },
  },
}
</script>