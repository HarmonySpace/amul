<script setup lang="ts">
import { ref } from "vue"
import { navegateTo } from "../../routes/utils"
import { Group } from "../../interfaces/Group"
import { addGroup } from "../../api/GroupApi.js"
import FormGroup from "../../components/forms/FormGroup.vue"
import CommonButton from "../../components/buttons/CommonButton.vue"
import IconArrow from "../../components/icons/IconArrow.vue"

const group = ref({} as Group)
const textChange1 = (input: string) => {
  group.value.theme = input
}
const textChange2 = (input: string) => {
  group.value.state = input
}

const clearInputs = () => {
  group.value.theme = ""
  group.value.state = ""
}

const saveGroup = async () => {
  if (!group.value.theme && !group.value.state) {
    console.log('please fill all camps to continue')
  } else if (!group.value.theme) {
    console.log('no theme')
  } else if (!group.value.state) {
    console.log('no state')
  } else {
    const res = await addGroup(group.value)
    console.log(res)
    clearInputs()
    navegateTo('/group/view')
  }
}
</script>

<template>
  <main class="container init-page-back">
    <section class="limited">
      <IconArrow class="back-arrow" cl="var(--fr)" bg="var(--void)" bg2="var(--void)" sha="var(--void)" sha2="var(--void)"
      @click="navegateTo('/group/view')"></IconArrow>
      <header class="container as-header">
        <h1>Añadir grupo</h1>
        <p>Añadir un grupo de investigación para tener registro en la base de datos</p>
      </header>
      <main class="container as-main">
          <FormGroup @finput1="textChange1" @finput2="textChange2" lb1="Tema" lb2="Estado" ph1="Investigación sobre ..." ph2="activo" nm1="theme_g" nm2="state_g" lg1="full" lg2="small"/>
        <div class="container as-main-button">
          <CommonButton msg="Añadir" @click="saveGroup()"></CommonButton>
        </div>
      </main>
    </section>
  </main>
</template>

<style scoped>
.as-header {
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
}

.as-header h1 {
  width: 100%;
}

.as-header p {
  margin-top: 1rem;
}

.as-main {
  margin-top: 5rem;
  flex-wrap: wrap;
}

.as-main-button {
  justify-content: end;
}
</style>