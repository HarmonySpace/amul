<script setup lang="ts">
import { ref } from "vue";
interface Data {
  op1: string;
  op2: string,
}
const props = defineProps({
  data: { type: Object as () => Data, default: () => ({ op1: "Inactive", op2: "Active" }) },
})
let sOption = ref(false)

const toggle = () => {
  sOption.value = !sOption.value
}
</script>

<template>
  <section class="switch-container" @click="toggle">
    <p :class="{ 'selected': !sOption }">{{ props.data.op1 }}</p>
    <div :class="{ 'isActive': sOption }" class="switch">
      <div class="switch-button"></div>
    </div>
    <p :class="{ 'selected': sOption }">{{ props.data.op2 }}</p>
  </section>
</template>

<style scoped>
.switch-container {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
}

.switch-container:hover {
  cursor: pointer;
}

.selected {}

.switch {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 4rem;
  height: 2.5rem;
  margin: 0 2rem;
  padding: 0.3rem;
  background-color: var(--bg);
  border-radius: 50px;
  transition: all 0.2s ease-out;
  overflow: hidden;
}

.switch-button {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: var(--bg2);
  transition: all 0.2s ease-out;
  transform: translateX(0);
}

.isActive {
  transition: all 0.2s ease-out;
  background-color: var(--acn);
}

.isActive .switch-button {
  transition: all 0.2s ease-out;
  transform: translateX(1.5rem);
}
</style>
