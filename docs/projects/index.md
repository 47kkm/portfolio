---
type: projects
depth: 1
title: Project
description: project index
sidebar: false
---

<script setup>
  import { projectList } from '../.vuepress/data/projectList.js';
</script>

# 프로젝트 목록

<PanelProject
  :indexList="projectList" 
/>

<div class="area_link">
  <TheLink
    class="link_comm"
    to="../index.html"
  >
    메인으로 가기
  </TheLink>
</div>