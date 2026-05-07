<template>
  <ul class="list_index">
    <li
     v-for="{ to, title, desc } in indexList"
     :key="to"
    >
      <TheLink
        :to="to"
        class="link_item"
      >
        <strong>
          {{ title }}
        </strong>
        <span>
          {{ desc }}
        </span>
      </TheLink>
    </li>
  </ul>
</template>

<script setup>
import TheLink from './TheLink.vue';

const props = defineProps({
  indexList: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>

<style lang="scss" scoped>
.list_index {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
  padding-inline-start: 0;
  list-style: none;
  li {
    width: calc(50% - 10px);
    + li {
      margin-top: 0;
    }
  }
}
.link_item {
  display: block;
  padding: 10px;
  border: 1px solid #c2c2c2;
  border-radius: 10px;
  text-decoration: none !important;
  &:hover {
    border-color: #299764;
  }
  strong {
    display: block;
    font-size: 16px;
  };
  span {
    display: block;
    color: #c2c2c2;
  }
}
</style>