<script setup lang="ts">
const props = defineProps({
  msg: {
    type: String,
    default: "Botón",
  },
  fz: {
    type: String,
    default: "calc(0.5rem + 1vw)",
  },
  br: {
    type: String,
    default: "10px",
  },
  bg: {
    type: String,
    default: "var(--acn)",
  },
  hv: {
    type: String,
    default: "inc",
  }
})
const br = "border-radius: " + props.br + ";"
const bg = "background-color: " + props.bg + ";"
const btn = br + bg
const fz = "font-size: " + props.fz + ";"
const text = fz
</script>

<template>
  <button :style="btn" class="cb-cont" type="button">
    <span :style="text" class="cb-text">{{ props.msg }}</span>
  </button>
</template>

<style scoped>
.cb-cont {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 2rem;
  outline: none;
  border: none;
  background-color: var(--acn);
  transition: all 0.1s ease-out;
}

.cb-cont:hover {
  cursor: pointer;
  transform: scale(0.9);
  box-shadow: 0 0.4rem 2rem var(--sha2);
  transition: all 0.1s ease-out;
}

.cb-cont:hover .cb-text {
  cursor: pointer;
}

.cb-text {
  transition: all 0.1s;
  font-weight: 500;
  color: var(--bg)
}
</style>
