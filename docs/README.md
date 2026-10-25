---
removeFromSidebar: true
sidebar: false
pageClass: page_home
---

<script setup>
import { projectList } from '@temp/projectList.js';
import { profile, highlightList, careerList, techStack, educationList, relLink } from './.vuepress/data/main.js';
</script>

<MainHero
  :profile="profile"
  :highlightList="highlightList"
/>

<PanelCareer
  :careerList="careerList"
/>

<PanelStack
  :stackList="techStack"
/>

<section id="projects" class="panel_section">
  <h2 class="tit_section">
    프로젝트
  </h2>
  <PanelProject
    :indexList="projectList"
  />
</section>

<PanelEducation
  title="학력 · 자격"
  :educationList="educationList"
/>

<PanelLink
  :linkList="relLink"
/>
