<script setup lang="ts">
import IconDocs from "../icons/IconDocs.vue"
interface Data {
  nm: string,
  lb: string,
  lg: string,
  fl: string,
}
const props = defineProps({
  data: { type: Object as () => Data, default: () => ({ nm: "", lb: "", lg: "full", fl: ".pdf" }) },
})

let large = "";
if (props.data.lg == "small") {
  large = "width: 30%;";
} else if (props.data.lg == "medium") {
  large = "width: 50%;";
}
else {
  large = "width: 100%;";
}

</script>

<template>
  <label class="label" :style="large" :for="props.data.nm">{{ props.data.lb }}
    <IconDocs class="icon" bg="var(--bg)" bg2="var(--bg)" sha="var(--bg)" sha2="var(--bg)"></IconDocs>
    <input class="input" type="file" :id="props.data.nm" :name="props.data.nm" :accept="props.data.fl">
  </label>
</template>

<style scoped>
.label {
  width: 100%;
  margin: 2rem 0 1rem 0;
  padding: 1rem calc(1rem + 1vw);
  outline: 0 solid var(--acn);
  border: 0;
  border-radius: 20px;
  background-color: var(--bg);
  transition: outline 0.1s ease-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon {
  transition: all 0.1s ease-out;
}


.input {
  display: none;
}

.label:hover {
  outline: 2px solid var(--acn);
}

.label:hover .icon {
  transform: scale(0.8);
  transition: all 0.1s ease-out;
}
</style>