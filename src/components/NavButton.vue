<template>
  <button
    @click="$emit('toggle')"
    :class="[expand ? 'opened' : '', 'menu']"
    :aria-expanded="expand"
    aria-label="Main Menu"
  >
    {{ text }}
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
    text: {
      type: String,
      default: 'M E N U',
    },
    close: {
      type: String,
      default: '#fff',
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.1rem;
  word-spacing: 9999px;
  white-space: pre-line;
  width: 1rem;

  &.opened {
    color: #333;
    margin-left: .5rem;
  }
}
</style>