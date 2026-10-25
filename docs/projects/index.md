---
type: projects
depth: 1
title: 프로젝트
description: 김경미가 참여한 서비스·프로모션·사내 도구·개인 프로젝트 목록
sidebar: false
---

<script setup>
  import { projectList } from '@temp/projectList.js';
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