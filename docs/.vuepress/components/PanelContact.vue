<template>
  <section class="panel_contact">
    <h2 class="tit_section">
      연락처
    </h2>
    <p class="desc_contact">
      프로젝트나 협업에 대해 궁금한 점이 있다면 메일로 연락 주세요.
    </p>
    <a
      class="link_mail"
      :href="`mailto:${email}`"
    >
      {{ email }}
    </a>
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
  email: {
    type: String,
    required: true,
  },
  linkList: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>

<style lang="scss" scoped>
.panel_contact {
  margin-top: 96px;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  background: var(--vp-c-bg-alt);
}
.desc_contact {
  margin: 12px 0 0;
  color: var(--vp-c-text-mute);
  word-break: keep-all;
}
.link_mail {
  display: inline-block;
  margin-top: 16px;
  font-size: clamp(1.25rem, 4vw, 1.75rem);
  font-weight: 800;
  letter-spacing: -0.01em;
  color: var(--vp-c-accent);
  word-break: break-all;
  text-decoration: none !important;
  &:hover {
    text-decoration: underline !important;
  }
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
  .panel_contact {
    margin-top: 72px;
    padding: 32px 20px;
  }
}
</style>
