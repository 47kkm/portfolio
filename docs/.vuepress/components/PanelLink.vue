<template>
  <section class="panel_link">
    <h2 class="tit_section">
      GitHub
    </h2>
    <p class="desc_link">
      코드와 학습 기록은 아래 저장소에서 확인하실 수 있습니다.
    </p>
    <ul class="list_link">
      <li
        v-for="{ text, href } in linkList"
        :key="href"
      >
        <a
          class="link_comm type_line"
          :href="href"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ text }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
const props = defineProps({
  linkList: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>

<style lang="scss" scoped>
.panel_link {
  margin-top: 96px;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  background: var(--vp-c-bg-alt);
}
.desc_link {
  margin: 12px 0 0;
  color: var(--vp-c-text-mute);
  word-break: keep-all;
}
.list_link {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 28px 0 0;
  padding-inline-start: 0;
  list-style: none;
  li {
    + li {
      margin-top: 0;
    }
  }
}

@media (max-width: 719px) {
  .panel_link {
    margin-top: 72px;
    padding: 32px 20px;
  }
}
</style>
