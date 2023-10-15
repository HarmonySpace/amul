<script setup lang="ts">
import { ref } from "vue"
import MenuSidebar from "./components/no-dynamic/menu/MenuSidebar.vue"

const state = ref(false)

const closeMenu = () => {
  state.value = false
}

const updateState = ( stateu: boolean ) => {
  state.value = stateu
}
</script>

<template>
  <section class="body">  
    <MenuSidebar :state="state" @stateu="updateState" />
    <router-view @click="closeMenu()"></router-view>
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
