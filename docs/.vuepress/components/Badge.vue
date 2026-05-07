<template>
  <span
    :class="`badge_${badgeText}`"
  >
    {{ badgeText }}
  </span>
</template>

<script setup>
defineProps({
  badgeText: {
    type: String,
    required: true,
  }
})
</script>
 
<style lang="scss" scoped>
[class^="badge_"] {
  display: block;
  position: relative;
  padding: 8px 16px;
  border-radius: 16px;
  color: #333;
  font-weight: 600;
  background: #f1f1f1;
}
</style>