<script setup lang="ts">
const props = defineProps({
  msg: {
    type: String,
    default: "Botón",
  }
})
</script>

<template>
  <button class="cb-cont" type="button">
    <span class="cb-text">{{ props.msg }}</span>
  </button>
</template>

<style scoped>
.cb-cont {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--acn);
  transition: all 0.2s;
}

.cb-cont:hover {
  cursor: pointer;
  transform: scale(1.1);
  box-shadow: 0 0.4rem 1rem var(--sha2);
}

.cb-cont:hover .cb-text {
  cursor: pointer;
}

.cb-text {
  transition: all 0.1s;
  font-weight: 500;
  color: var(--fr)
}
</style>
