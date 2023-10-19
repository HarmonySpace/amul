<script setup lang="ts">
import { ref } from "vue"
const props = defineProps({
  ph1: {
    type: String,
    default: ""
  },
  ph2: {
    type: String,
    default: ""
  },
  nm1: {
    type: String,
    default: ""
  },
  nm2: {
    type: String,
    default: ""
  },
  lb1: {
    type: String,
    default: ""
  },
  lb2: {
    type: String,
    default: ""
  }
})
const emit = defineEmits(["input1", "input2"])

let content1 = ref<string>("")
let content2 = ref<string>("")
  const handleInpu1 = () => {
  emit("input1", content1.value)
}
const handleInput2 = () => {
  emit("input2", content2.value)
}
</script>

<template>
  <section class="it2-container">
    <div class="box">
      <label :for="props.nm1">{{ props.lb1 }}</label>
      <input @input="handleInpu1" v-model.trim="content1" class="input" type="text" :id="props.nm1" :name="props.nm1" :placeholder="props.ph1">
    </div>
    <div class="box">
      <label :for="props.nm2">{{ props.lb2 }}</label>
      <input @input="handleInput2" v-model.trim="content2" class="input" type="text" :id="props.nm2" :name="props.nm2" :placeholder="props.ph2">
    </div>
  </section>
</template>

<style scoped>
.it2-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

.it2-container .box:nth-child(1) {
  margin-right: 0.5rem;
}

.it2-container .box:nth-child(2) {
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