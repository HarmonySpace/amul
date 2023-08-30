<script setup lang="ts">
interface Data {
  ph1: string,
  nm1: string,
  lb1: string,
  ph2: string,
  nm2: string,
  lb2: string,
}
const props = defineProps({
  data: { type: Object as () => Data, default: () => ({ ph1: "", nm1: "", lb1: "", ph2: "", nm2: "", lb2: "" }) },
})
</script>

<template>
  <section class="container">
    <div class="box">
      <label :for="props.data.nm1">{{ props.data.lb1 }}</label>
      <input class="input" type="text" :id="props.data.nm1" :name="props.data.nm1" :placeholder="props.data.ph1">
    </div>
    <div class="box">
      <label :for="props.data.nm2">{{ props.data.lb2 }}</label>
      <input class="input" type="text" :id="props.data.nm2" :name="props.data.nm2" :placeholder="props.data.ph2">
    </div>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

.container .box:nth-child(1) {
  margin-right: 0.5rem;
}

.container .box:nth-child(2) {
  margin-left: 0.5rem;
}


.box {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 49%;
}

.box label {
  margin: 2rem 0 1rem 0;
}

.input {
  width: 100%;
  padding: 1rem calc(1rem + 1vw);
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
</style>