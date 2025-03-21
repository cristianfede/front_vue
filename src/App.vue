<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
//import MainLayout from '@/layouts/MainLayout.vue'

import { computed } from 'vue'
import { useRoute } from 'vue-router'

const layouts = {
  AuthLayout: AuthLayout,
  //MainLayout: MainLayout,
}

const route = useRoute()
const layout = computed(() => layouts[route.meta.layout] || 'div')
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<style scoped>
html,
body {
  margin: 0;
  height: 100%;
  align-items: center;
  width: 100%;
}

router-view {
  width: 100%;
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
}

main {
  width: 100%;
  height: 100%;
}
</style>
