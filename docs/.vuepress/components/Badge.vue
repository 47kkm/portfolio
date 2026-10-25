<template>
  <span
    :class="['badge_stack', `type_${size}`]"
  >
    {{ badgeText }}
  </span>
</template>

<script setup>
defineProps({
  badgeText: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'medium',
  },
})
</script>

<style lang="scss" scoped>
.badge_stack {
  display: inline-block;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  color: var(--vp-c-text);
  font-weight: 600;
  line-height: 1.4;
  background: var(--vp-c-bg-alt);
  &.type_medium {
    padding: 6px 14px;
    font-size: 0.9375rem;
  }
  &.type_small {
    padding: 2px 10px;
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--vp-c-text-mute);
  }
}
</style>
