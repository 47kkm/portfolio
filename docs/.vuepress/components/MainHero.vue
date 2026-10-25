<template>
  <section class="area_hero">
    <p class="txt_role">
      {{ profile.role }}
    </p>
    <h1 class="tit_hero">
      {{ profile.headline.lead }}<br />
      {{ profile.headline.tail }} <em class="emph_name">{{ profile.name }}</em>입니다.
    </h1>
    <p class="desc_intro">
      <span
        v-for="text in profile.intro"
        :key="text"
        class="txt_intro"
      >
        {{ text }}
      </span>
    </p>
    <div class="group_btn">
      <a
        class="link_comm type_line no-external-link-icon"
        :href="profile.github"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
    <ul class="list_highlight">
      <li
        v-for="{ value, label, to } in highlightList"
        :key="label"
      >
        <TheLink
          :to="to"
          class="link_highlight"
        >
          <strong class="num_highlight">
            {{ value }}
          </strong>
          <span class="txt_highlight">
            {{ label }}
          </span>
        </TheLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
import TheLink from './TheLink.vue';

const props = defineProps({
  profile: {
    type: Object,
    required: true,
  },
  highlightList: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>

<style lang="scss" scoped>
.area_hero {
  padding: 40px 0 16px;
}
.txt_role {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--vp-c-accent);
}
.tit_hero {
  margin: 12px 0 0;
  padding-top: 0;
  font-size: clamp(1.75rem, 5vw, 2.75rem);
  line-height: 1.35;
  letter-spacing: -0.02em;
  word-break: keep-all;
}
.emph_name {
  font-style: normal;
  color: var(--vp-c-accent);
}
.desc_intro {
  max-width: 800px;
  text-wrap: pretty;
  margin: 20px 0 0;
  font-size: 1.0625rem;
  line-height: 1.8;
  color: var(--vp-c-text-mute);
  word-break: keep-all;
}
.txt_intro {
  display: block;
}
.group_btn {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}
.list_highlight {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin: 48px 0 0;
  padding-inline-start: 0;
  list-style: none;
  li {
    + li {
      margin-top: 0;
    }
  }
}
.link_highlight {
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
  padding: 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  box-sizing: border-box;
  color: var(--vp-c-text);
  background: var(--vp-c-bg-alt);
  text-decoration: none !important;
  transition: border-color 0.2s, transform 0.2s;
  &:hover {
    border-color: var(--vp-c-accent);
    transform: translateY(-2px);
  }
}
.num_highlight {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--vp-c-accent);
}
.txt_highlight {
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--vp-c-text-mute);
  word-break: keep-all;
  text-wrap: balance;
}

@media (max-width: 719px) {
  .area_hero {
    padding-top: 16px;
  }
  .tit_hero {
    br {
      display: none;
    }
  }
  .list_highlight {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 36px;
  }
}
</style>
