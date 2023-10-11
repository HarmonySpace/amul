<script setup lang="ts">
import { ref, defineEmits } from "vue"
interface Data {
  ph: string;
  nm: string,
  lb: string,
  lg: string;
  ty: string;
}
const props = defineProps({
  data: { type: Object as () => Data, default: () => ({ ph: "", nm: "", lb: "", lg: "full", ty: "text" }) },
})
const emit = defineEmits(["input1"])

let large = "";
if (props.data.lg == "small") {
  large = "width: " + "30%" + ";";
} else if (props.data.lg == "medium") {
  large = "width: " + "50%" + ";";
}
else {
  large = "width: " + "100%" + ";";
}
const content = ref<string>("")
const handleInput = () => {
  emit("input1", content.value)
}
</script>

<template>
  <label class="label" :for="props.data.nm">{{ props.data.lb }}</label>
  <input @input="handleInput()" v-model.trim="content" :style="large" class="input" :type="props.data.ty" :id="props.data.nm" :name="props.data.nm"
    :placeholder="props.data.ph"/>
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