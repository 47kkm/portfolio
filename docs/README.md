---
removeFromSidebar: true
sidebar: false
---

<script setup>
import { profile, techStack, relLink } from './.vuepress/data/main.js';
</script>

<h1 class="screen_out">
  포트폴리오 메인
</h1>

<PanelMain
  :title="profile.title"
  :type="profile.type"
  :infoList="profile.infoList"
/>

<PanelMain 
  :title="techStack.title"
  :type="techStack.type"
  :infoList="techStack.infoList"
/>

<PanelMain 
  :title="relLink.title"
  :type="relLink.type"
  :infoList="relLink.infoList"
/>

<div class="area_link">
  <TheLink
    class="link_comm"
    to="./projects/index.html"
  >
    프로젝트 목록 보기
  </TheLink>
</div>