<script setup lang="ts">

const props = defineProps({
  msg: { type: String, default: "Buscar" },
  type: { type: String, default: "text" },
})


</script>

<template>
  <input class="input" :type="props.type" :placeholder="props.msg" />
</template>

<style scoped>
.input {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 33%;
  width: 100%;
  margin: 0.5rem 0.7rem;
  padding: 1rem calc(1rem + 1vw);
  font-size: calc(0.3rem + 1vw);
  outline: 0;
  border: 0;
  border-radius: 20px;
  background-color: var(--bg);
}
</style>