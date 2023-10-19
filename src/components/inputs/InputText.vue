<script setup lang="ts">
import { ref } from "vue"
const props = defineProps({
  ph: {
    type: String,
    default: ""
  },
  nm: {
    type: String,
    default: ""
  },
  lb: {
    type: String,
    default: ""
  },
  lg: {
    type: String,
    default: "full"
  },
  ty: {
    type: String,
    default: "text"
  }
})
const emit = defineEmits(["input1"])
const content = ref<string>("")

let large = "";
if (props.lg == "small") {
  large = "width: " + "30%" + ";";
} else if (props.lg == "medium") {
  large = "width: " + "50%" + ";";
}
else {
  large = "width: " + "100%" + ";";
}
const handleInput = () => {
  emit("input1", content.value)
} 
</script>

<template>
  <label class="label" :for="props.nm">{{ props.lb }}</label>
  <input @input="handleInput()" v-model.trim="content" :style="large" class="input" :type="props.ty" :id="props.nm" :name="props.nm"
    :placeholder="props.ph"/>
</template>

<style scoped>
.label {
  width: 100%;
  margin: 2rem 0 1rem 0;
}

.input {
  padding: 1rem calc(1rem + 1vw);
  font-size: calc(0.3rem + 1vw);
  outline: 0 solid var(--acn);
  border: 0;
  border-radius: 20px;
  background-color: var(--bg);
  transition: outline 0.1s ease-out;
  margin: 0 0 1rem 0;
}

.input:focus {
  outline: 2px solid var(--acn);
}
</style>