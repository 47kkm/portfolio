<template>
  <div 
    :class="['panel_main', `panel_${type}`]"
  >
    <h2>
      {{ title }}
    </h2>
    <ul  class="list_info">
      <li
        v-for="{ tInfo, dInfo } in infoList"
        :key="title"
      >
        <!-- default type -->
        <template 
          v-if="isDefaultType"
        >
          <strong>
            {{ tInfo }}:
          </strong>
          <span>
            {{ dInfo }}
          </span>
        </template>
        <!-- link type -->
        <template
          v-else-if="isLinkType"
        >
          <a 
            class="link_comm type_line"
            :href="dInfo"
            target="_blank"
          >
            {{ tInfo }}
          </a>
        </template>
        <!-- badge type -->
        <template
          v-else
        >
          <Badge 
            :badgeText="dInfo"
          />
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Badge from './Badge.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'default',
  },
  infoList: {
    type: Array,
    default() {
      return [];
    },
  },
});

const isDefaultType = computed(() => {
  return props.type === 'default';
});

const isLinkType = computed(() => {
  return props.type === 'link';
})
</script>

<style lang="scss" scoped>
.panel_main {
  padding: 20px;
  margin-top: 40px;
  border: 1px solid #c2c2c2;
  border-radius: 20px;
  h2 {
    padding-top: 0;
    margin-top: 0;
    border-bottom: none;
  }
  .list_info {
    margin: 0;
    padding-inline-start: 0;
    list-style: none;
    li {
      + li {
        margin-top: 0;
      }
    }
  }
}
.panel_link {
  .list_info {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
}
.panel_badge {
  .list_info {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>