<template>
  <ParentLayout>
    <template #page-content-top>
      <ProjectHeader />
    </template>
  </ParentLayout>
</template>

<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';
import ProjectHeader from '../components/ProjectHeader.vue';
</script>
