<script setup lang="ts">
import IconButton from '../buttons/IconButton.vue';
const props = defineProps({
  msg: { type: String, default: "Buscar" }
})

</script>

<template>
  <div class="cont">
    <input class="input" type="text" :placeholder="props.msg" />
    <IconButton dir="../../assets/space-icons/menu.svg" class="icon" />
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
  outline: 0;
  border: 0;
  border-radius: 20px;
  background-color: var(--bg);
}

.icon {
  background-color: var(--acn);
  padding: 0.7rem;
  width: calc(2rem + 1vw);
  height: calc(2rem + 1vw);
  border-radius: 15px;
  box-shadow: 0 0 2rem var(--sha2);
  transform: translate(50%, -150%);
  transition: all 0.1s ease-in;
}

.icon:hover {
  cursor: pointer;
  box-shadow: 0 0 2rem var(--acn);
  transform: translate(50%, -150%) scale(1.1);
}
</style>