<template>
  <RouterLink
    :to="to"
  >
    <slot />
  </RouterLink>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    default: undefined,
  },
});
</script>

<style lang="scss" scoped>

</style>