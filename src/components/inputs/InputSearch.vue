<script setup lang="ts">
import Glass from "../icons/IconGlass.vue";
const props = defineProps({
  msg: { type: String, default: "Buscar" }
})

</script>

<template>
  <div class="cont">
    <input class="input" type="text" :placeholder="props.msg" />
    <Glass class="icon-glass"></Glass>
  </div>
</template>

<style scoped>
.cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}

.input {
  padding: 1rem calc(1rem + 1vw);
  width: 100%;
  font-size: calc(0.3rem + 1vw);
  outline: 0 solid var(--acn);
  border: 0;
  border-radius: 20px;
  background-color: var(--bg);
  transition: outline 0.1s ease-out;
}

.input:focus {
  outline: 2px solid var(--acn);
}

.icon-glass {
  transform: translate(50%, -150%);
}

.icon-glass:hover {
  transform: translate(50%, -150%) scale(1.1);
}
</style>