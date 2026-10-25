<template>
  <div
    v-if="isProjectPage"
    class="project_header"
  >
    <TheLink
      to="/projects/"
      class="link_back"
    >
      ← 전체 프로젝트
    </TheLink>
    <div class="info_project">
      <CategoryLabel :category="frontmatter.category" />
      <span
        v-if="frontmatter.period"
        class="txt_period"
      >
        {{ frontmatter.period }}
      </span>
      <span class="list_stack">
        <Badge
          v-for="item in frontmatter.stack"
          :key="item"
          :badgeText="item"
          size="small"
        />
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePageFrontmatter } from 'vuepress/client';
import TheLink from './TheLink.vue';
import CategoryLabel from './CategoryLabel.vue';
import Badge from './Badge.vue';

const frontmatter = usePageFrontmatter();

const isProjectPage = computed(() => {
  const { type, depth } = frontmatter.value;

  return type === 'projects' && depth === 2;
});
</script>

<style lang="scss" scoped>
.project_header {
  margin-bottom: -8px;
}
.link_back {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-text-mute);
  text-decoration: none !important;
  &:hover {
    color: var(--vp-c-accent);
  }
}
.info_project {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
}
.txt_period {
  font-size: 0.8125rem;
  color: var(--vp-c-text-subtle);
}
.list_stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
</style>
