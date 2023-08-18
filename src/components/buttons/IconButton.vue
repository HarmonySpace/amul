<script setup lang="ts">
const props = defineProps({
  dir: {
    type: String,
    default: "menu"
  }
})
</script>

<template>
  <img class="icon" :src="props.dir" alt="lupa" />
</template>