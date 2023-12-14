<script setup lang="ts">
import { ref, watch } from "vue"
import IconPeople from "../icons/IconPeople.vue"
import InputText from "../inputs/InputText.vue"

const props = defineProps({
  ph1: {
    type: String,
    default: ""
  },
  nm1: {
    type: String,
    default: ""
  },
  ct1: {
    type: String,
    default: "",
  },
  lb1: {
    type: String,
    default: ""
  },
  lg1: {
    type: String,
    default: ""
  },
  ty1: {
    type: String,
    default: ""
  },
  ph2: {
    type: String,
    default: ""
  },
  nm2: {
    type: String,
    default: ""
  },
  ct2: {
    type: String,
    default: "",
  },
  lb2: {
    type: String,
    default: ""
  },
  lg2: {
    type: String,
    default: ""
  },
  ty2: {
    type: String,
    default: ""
  },
  ibg1: {
    type: String,
    default: "var(--acn)"
  },
  ibg2: {
    type: String,
    default: "var(--acn)"
  },
  sha: {
    type: String,
    default: "var(--sha2)"
  },
  sha2: {
    type: String,
    default: "var(--acn)"
  }
});
const emit = defineEmits(["finput1", "finput2"])
let text1 = ref<string>("")
let text2 = ref<string>("")
const textChange1 = (input: string) => {
  text1.value = input
}
const textChange2 = (input: string) => {
  text2.value = input
}
watch(() => text1.value, (change) => {
  emit("finput1", change)
})
watch(() => text2.value, (change) => {
  emit("finput2", change)
})
</script>

<template>
  <form class="container form-container">
    <div class="container box">
      <IconPeople :bg="props.ibg1" :bg2="props.ibg2" :sha="props.sha" :sha2="props.sha2"></IconPeople>
    </div>
    <div class="container box">
      <InputText @input1="textChange1" :ph="props.ph1" :nm="props.nm1" :lb="props.lb1" :ct="props.ct1" :lg="props.lg1"
        :ty="props.ty1" />
      <InputText @input1="textChange2" :ph="props.ph2" :nm="props.nm2" :lb="props.lb2" :ct="props.ct2" :lg="props.lg2"
        :ty="props.ty2" />
    </div>
  </form>
</template>

<style scoped>
.form-container,
.box:nth-child(1),
.box:nth-child(2) {
  margin: 0;
}
</style>