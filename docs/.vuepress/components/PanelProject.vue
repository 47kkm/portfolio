<template>
  <div class="panel_project">
    <div
      class="group_filter"
      role="group"
      aria-label="프로젝트 분류"
    >
      <button
        v-for="{ name, count } in filterList"
        :key="name"
        type="button"
        :class="['btn_filter', { on: name === currentFilter }]"
        :aria-pressed="name === currentFilter"
        @click="currentFilter = name"
      >
        {{ name }}
        <span class="num_count">{{ count }}</span>
      </button>
    </div>
    <ul class="list_project">
      <li
        v-for="{ to, title, desc, category, stack, period } in filteredList"
        :key="to"
      >
        <TheLink
          :to="to"
          class="link_project"
        >
          <span class="info_top">
            <CategoryLabel :category="category" />
            <span
              v-if="period"
              class="txt_period"
            >
              {{ period }}
            </span>
          </span>
          <strong class="tit_project">
            {{ title }}
          </strong>
          <span class="desc_project">
            {{ desc }}
          </span>
          <span class="list_stack">
            <Badge
              v-for="item in stack"
              :key="item"
              :badgeText="item"
              size="small"
            />
          </span>
        </TheLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { groupByObjectKey } from '../utils/common.js';
import TheLink from './TheLink.vue';
import CategoryLabel from './CategoryLabel.vue';
import Badge from './Badge.vue';

const ALL = '전체';

const props = defineProps({
  indexList: {
    type: Array,
    default() {
      return [];
    },
  },
});

const currentFilter = ref(ALL);

const filterList = computed(() => {
  const groups = groupByObjectKey(props.indexList, 'category');

  return [
    { name: ALL, count: props.indexList.length },
    ...Object.entries(groups).map(([name, list]) => ({ name, count: list.length })),
  ];
});

const filteredList = computed(() => {
  if (currentFilter.value === ALL) return props.indexList;

  return props.indexList.filter(({ category }) => category === currentFilter.value);
});
</script>

<style lang="scss" scoped>
.panel_project {
  margin-top: 24px;
}
.group_filter {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.btn_filter {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--vp-c-text-mute);
  background: var(--vp-c-bg);
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s, background-color 0.2s;
  &:hover {
    border-color: var(--vp-c-accent);
    color: var(--vp-c-accent);
  }
  &.on {
    border-color: var(--vp-c-accent);
    color: var(--vp-c-accent-text);
    background: var(--vp-c-accent);
    .num_count {
      color: inherit;
      opacity: 0.8;
    }
  }
}
.num_count {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--vp-c-text-subtle);
}
.list_project {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 24px 0 0;
  padding-inline-start: 0;
  list-style: none;
  li {
    + li {
      margin-top: 0;
    }
  }
}
.link_project {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 22px 24px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  box-sizing: border-box;
  color: var(--vp-c-text);
  background: var(--vp-c-bg);
  text-decoration: none !important;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  &:hover {
    border-color: var(--vp-c-accent);
    box-shadow: 0 8px 24px -12px var(--vp-c-shadow);
    transform: translateY(-2px);
    .tit_project::after {
      transform: translateX(4px);
      opacity: 1;
    }
  }
}
.info_top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  > .txt_category {
    flex-shrink: 0;
  }
}
.txt_period {
  font-size: 0.8125rem;
  color: var(--vp-c-text-subtle);
  text-align: right;
  text-wrap: balance;
}
.tit_project {
  display: block;
  margin-top: 14px;
  font-size: 1.125rem;
  line-height: 1.4;
  &::after {
    display: inline-block;
    margin-left: 6px;
    color: var(--vp-c-accent);
    opacity: 0;
    transition: transform 0.2s, opacity 0.2s;
    content: '→';
  }
}
.desc_project {
  display: block;
  margin-top: 6px;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--vp-c-text-mute);
  word-break: keep-all;
}
.list_stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: 18px;
}

@media (max-width: 719px) {
  .list_project {
    grid-template-columns: 1fr;
  }
}
</style>
