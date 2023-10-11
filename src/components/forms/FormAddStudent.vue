<script setup lang="ts">
import IconPeople from "../icons/IconPeople.vue"
import InputText2 from "../inputs/InputText2.vue"
import InputText from "../inputs/InputText.vue"
import CommonButton from "../buttons/CommonButton.vue"
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
</script>

<template>
  <form class="container fas-container">
    <div class="container box">
      <IconPeople :bg="props.ibg1" :bg2="props.ibg2" :sha="props.sha" :sha2="props.sha2"></IconPeople>
    </div>
    <div class="container box">
      <InputText2 :data="props.text1" />
      <InputText :data="props.text2" />
    </div>
    <div class="container box fas-button">
      <CommonButton></CommonButton>
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