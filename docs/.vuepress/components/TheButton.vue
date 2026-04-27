<template>
  <button 
    type="button"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  text: String,
  action: String,
});

// README.md
const mainClick = () => {
  console.log('click test');
}

const actions = {
  mainClick,
}

const onClick =() => {
  actions[props.action]?.();
}
</script>

<style lang="scss" scoped>

</style>