<template>
  <section class="panel_education">
    <h2 class="tit_section">
      {{ title }}
    </h2>
    <ul class="list_education">
      <li
        v-for="{ period, title: itemTitle, desc } in educationList"
        :key="itemTitle"
      >
        <span class="txt_period">
          {{ period }}
        </span>
        <span class="info_education">
          <strong>
            {{ itemTitle }}
          </strong>
          <span class="txt_desc">
            {{ desc }}
          </span>
        </span>
      </li>
    </ul>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  educationList: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>

<style lang="scss" scoped>
.panel_education {
  margin-top: 72px;
}
.list_education {
  margin: 24px 0 0;
  padding-inline-start: 0;
  border-top: 1px solid var(--vp-c-divider);
  list-style: none;
  li {
    display: flex;
    gap: 16px;
    padding: 16px 0;
    border-bottom: 1px solid var(--vp-c-divider);
    + li {
      margin-top: 0;
    }
  }
}
.txt_period {
  flex-shrink: 0;
  width: 180px;
  font-size: 0.9375rem;
  color: var(--vp-c-text-mute);
}
.info_education {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 10px;
}
.txt_desc {
  font-size: 0.875rem;
  color: var(--vp-c-text-mute);
}

@media (max-width: 719px) {
  .list_education {
    li {
      flex-direction: column;
      gap: 4px;
    }
  }
  .txt_period {
    width: auto;
  }
}
</style>
