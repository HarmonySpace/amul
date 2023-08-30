<script setup lang="ts">

interface InputData {
  type: string[];
  label: string[];
  placeholder: string[];
  labelOff: boolean;
}

const props = defineProps({
  inputData: { type: Object as () => InputData, default: () => ({ type: [], label: [], placeholder: [], labelOff: true }) },
})

</script>

<template>
  <section class="cont">
    <div class="element" v-for="index in props.inputData.label.length" :key="index">
      <label v-if="!props.inputData.labelOff" class="label">{{ props.inputData.label[index - 1] }}</label>
      <input class="input" :type="props.inputData.type[index - 1]"
        :placeholder="props.inputData.placeholder[index - 1]" />
    </div>
  </section>
</template>

<style scoped>
.cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
  width: 100%;
}

.element {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 31%;
  margin: 0.5rem;
}


.label {
  width: 100%;
  font-size: 1.5rem;
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