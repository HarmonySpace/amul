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
  border: 0.1rem solid var(--fr);
  border-radius: 0.5rem;
  background-color: var(--void);
  transition: all 0.1s;
}

.cb-cont:hover {
  transform: scale(1.2);
  cursor: pointer;
  border: 0.1rem solid var(--void);
  background-color: var(--acn);
}

.cb-cont:hover .cb-text {
  color: var(--bg);
}

.cb-text {
  font-weight: 700;
}
</style>
