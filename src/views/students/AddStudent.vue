<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"
import { Student } from "../../interfaces/Student"
import { addStudent } from "../../api/StudentApi"
import FormPerson from "../../components/forms/FormPerson.vue"
import CommonButton from "../../components/buttons/CommonButton.vue"
import IconArrow from "../../components/icons/IconArrow.vue"

const router = useRouter();

const navegateTo = (to: string) => {
  router.push(to)
}

const student = ref({} as Student)
const textChange1 = (input: string) => {
  student.value.names = input
}
const textChange2 = (input: string) => {
  student.value.lastnames = input
}
const textChange3 = (input: string) => {
  student.value.cardId = input
}
const saveStudent = async () => {
  //console.log(component.value)
  if (!student.value.names && !student.value.lastnames && !student.value.cardId) {
    console.log('please fill all camps to continue')
  } else if (!student.value.names) {
    console.log('no names')
  } else if (!student.value.lastnames) {
    console.log('no lastnames')
  } else if (!student.value.cardId) {
    console.log('no card id')
  } else {
    const res = await addStudent(student.value)
    console.log(res)
  }
}
</script>

<template>
  <main class="container init-page-back">
    <section class="limited">
      <IconArrow class="back-arrow" cl="var(--fr)" bg="var(--void)" bg2="var(--void)" sha="var(--void)" sha2="var(--void)"
      @click="navegateTo('/student/view')"></IconArrow>
      <header class="container as-header">
        <h1>Añadir estudiante</h1>
        <p>Añadir un estudiante para tener registro en la base de datos</p>
      </header>
      <main class="container as-main">
          <FormPerson @finput1="textChange1" @finput2="textChange2" @finput3="textChange3" ph="00-00000-0" nm="carnet_s"
          :ct="student.cardId" lb="Carnet" lg="small" ph1="John" nm1="nombre_s" lb1=" Nombres" :ct1="student.names"
          ph2="Doe" nm2="apellidos_s" lb2=" Apellidos" :ct2="student.lastnames" />
        <div class="container as-main-button">
          <CommonButton msg="Añadir" @click="saveStudent()"></CommonButton>
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
}</style>