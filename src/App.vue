<script setup lang="ts">
import MenuSidebar from "./components/menu/MenuSidebar.vue"
</script>

<template>
  <section class="body">
    <MenuSidebar />
    <router-view></router-view>
  </section>
</template>

<style scoped>
.body {
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
}
</style>
