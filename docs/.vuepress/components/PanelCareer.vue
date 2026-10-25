<template>
  <section class="panel_career">
    <h2 class="tit_section">
      경력
    </h2>
    <ol class="list_career">
      <li
        v-for="{ company, team, role, period, duration, current, taskList, historyList } in careerList"
        :key="period"
        class="item_career"
      >
        <div class="info_period">
          <span class="txt_period">
            {{ period }}
          </span>
          <span :class="['txt_duration', { on: current }]">
            {{ duration }}
          </span>
        </div>
        <div class="info_company">
          <strong class="tit_company">
            {{ company }}
          </strong>
          <span
            v-if="team || role"
            class="txt_team"
          >
            {{ [team, role].filter(Boolean).join(' · ') }}
          </span>
          <ul
            v-if="taskList?.length"
            class="list_task"
          >
            <li
              v-for="task in taskList"
              :key="task"
            >
              {{ task }}
            </li>
          </ul>
          <ul
            v-if="historyList?.length"
            class="list_history"
          >
            <li
              v-for="{ year, text } in historyList"
              :key="text"
            >
              <span class="txt_year">
                {{ year }}
              </span>
              <span class="txt_history">
                {{ text }}
              </span>
            </li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>

<script setup>
const props = defineProps({
  careerList: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>

<style lang="scss" scoped>
.panel_career {
  margin-top: 72px;
}
.list_career {
  margin: 24px 0 0;
  padding-inline-start: 0;
  border-top: 1px solid var(--vp-c-divider);
  list-style: none;
}
.item_career {
  display: flex;
  gap: 16px;
  padding: 24px 0;
  border-bottom: 1px solid var(--vp-c-divider);
  + .item_career {
    margin-top: 0;
  }
}
.info_period {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 4px;
  width: 180px;
}
.txt_period {
  font-weight: 700;
}
.txt_duration {
  font-size: 0.875rem;
  color: var(--vp-c-text-mute);
  &.on {
    font-weight: 700;
    color: var(--vp-c-accent);
  }
}
.info_company {
  flex: 1;
  min-width: 0;
}
.tit_company {
  font-size: 1.125rem;
}
.txt_team {
  margin-left: 8px;
  font-size: 0.875rem;
  color: var(--vp-c-text-mute);
}
.list_task {
  margin: 14px 0 0;
  padding-inline-start: 1.2em;
  li {
    line-height: 1.7;
    word-break: keep-all;
    + li {
      margin-top: 4px;
    }
  }
}
.list_history {
  margin: 20px 0 0;
  padding: 16px 20px;
  border-radius: 12px;
  background: var(--vp-c-bg-alt);
  list-style: none;
  li {
    display: flex;
    gap: 14px;
    line-height: 1.6;
    + li {
      margin-top: 8px;
    }
  }
}
.txt_year {
  flex-shrink: 0;
  width: 3rem;
  white-space: nowrap;
  font-weight: 700;
  color: var(--vp-c-accent);
}
.txt_history {
  word-break: keep-all;
}

@media (max-width: 719px) {
  .item_career {
    flex-direction: column;
    gap: 12px;
  }
  .info_period {
    flex-direction: row;
    gap: 8px;
    width: auto;
  }
  .txt_team {
    display: block;
    margin: 4px 0 0;
  }
}
</style>
