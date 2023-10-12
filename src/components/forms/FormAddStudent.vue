<script setup lang="ts">
import { ref, watch } from "vue"
import IconPeople from "../icons/IconPeople.vue"
import InputText2 from "../inputs/InputText2.vue"
import InputText from "../inputs/InputText.vue"
interface InputTextData {
  ph: string,
  nm: string,
  lb: string,
  lg: string,
  ty: string,
}
interface InputText2Data {
  ph1: string,
  nm1: string,
  lb1: string,
  ph2: string,
  nm2: string,
  lb2: string,
}
const props = defineProps({
  text1: { type: Object as () => InputText2Data, default: () => ({ ph1: "", nm1: "", lb1: "", ph2: "", nm2: "", lb2: "" }) },
  text2: { type: Object as () => InputTextData, default: () => ({ ph: "", nm: "", lb: "", lg: "", ty: "" }) },
  ibg1: { type: String, default: "var(--acn)" },
  ibg2: { type: String, default: "var(--acn)" },
  sha: { type: String, default: "var(--sha2)" },
  sha2: { type: String, default: "var(--acn)" },
})
const emit = defineEmits(["finput1", "finput2", "finput3"])
let text1 = ref<string>("")
let text2 = ref<string>("")
let text3 = ref<string>("")
const textChange1 = (input: string) => {
  text1.value = input
}
const textChange2 = (input: string) => {
  text2.value = input
}
const textChange3 = (input: string) => {
  text3.value = input
}
watch(() => text1.value, (change) => {
  emit("finput1", change)
} )
watch(() => text2.value, (change) => {
  emit("finput2", change)
} )
watch(() => text3.value, (change) => {
  emit("finput3", change)
} )
</script>

<template>
  <h2>
  </h2>
  <form class="container fas-container">
    <div class="container box">
      <IconPeople :bg="props.ibg1" :bg2="props.ibg2" :sha="props.sha" :sha2="props.sha2"></IconPeople>
    </div>
    <div class="container box">
      <InputText2 @input1="textChange1" @input2="textChange2" :data="props.text1" />
      <InputText @input1="textChange3" :data="props.text2" />
    </div>
  </form>
</template>

<style scoped>
.fas-container, .box:nth-child(1), .box:nth-child(2) {
  margin: 0;
}
.fas-container {
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.fas-container .box:nth-child(1) {
  align-items: center;
  width: 20%;
}

.fas-container .box:nth-child(2) {
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
}
.fas-button {
  justify-content: end;
}
</style>