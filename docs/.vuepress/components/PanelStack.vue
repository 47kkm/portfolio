<template>
  <section class="panel_stack">
    <h2 class="tit_section">
      기술 스택
    </h2>
    <dl class="list_stack">
      <div
        v-for="{ title, list } in stackList"
        :key="title"
        class="item_stack"
      >
        <dt>
          {{ title }}
        </dt>
        <dd>
          <Badge
            v-for="stack in list"
            :key="stack"
            :badgeText="stack"
          />
        </dd>
      </div>
    </dl>
  </section>
</template>

<script setup>
import Badge from './Badge.vue';

const props = defineProps({
  stackList: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>

<style lang="scss" scoped>
.panel_stack {
  margin-top: 72px;
}
.list_stack {
  margin: 24px 0 0;
  border-top: 1px solid var(--vp-c-divider);
}
.item_stack {
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--vp-c-divider);
  dt {
    flex-shrink: 0;
    width: 120px;
    padding-top: 6px;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: var(--vp-c-text-mute);
  }
  dd {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0;
  }
}

@media (max-width: 719px) {
  .item_stack {
    flex-direction: column;
    gap: 10px;
    dt {
      padding-top: 0;
    }
  }
}
</style>
