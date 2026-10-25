<template>
  <span :class="['txt_category', categoryClass[category]]">
    {{ category }}
  </span>
</template>

<script setup>
defineProps({
  category: {
    type: String,
    required: true,
  },
});

const categoryClass = {
  '서비스': 'type_service',
  '프로모션': 'type_promotion',
  '사내 도구': 'type_internal',
  '개인 프로젝트': 'type_personal',
};
</script>

<style lang="scss" scoped>
.txt_category {
  padding: 2px 10px;
  border-radius: 6px;
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--badge-c-note-text);
  background: var(--badge-c-note-bg);
  &.type_service {
    color: var(--badge-c-info-text);
    background: var(--badge-c-info-bg);
  }
  &.type_promotion {
    color: var(--badge-c-important-text);
    background: var(--badge-c-important-bg);
  }
  &.type_personal {
    color: var(--badge-c-warning-text);
    background: var(--badge-c-warning-bg);
  }
  &.type_internal {
    color: var(--badge-c-tip-text);
    background: var(--badge-c-tip-bg);
  }
}
</style>
