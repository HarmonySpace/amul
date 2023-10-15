<script setup lang="ts">
import { ref } from "vue"
import { Student } from "../../interfaces/Student"
import { addStudent } from "../../api/StudentApi"
import FormAddStudent from "../../components/forms/FormAddStudent.vue"
import CommonButton from "../../components/buttons/CommonButton.vue"
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
const inputT1: InputTextData = { ph: "00-00000-0", nm: "carnet_s", lb: "Carnet", lg: "small", ty: "text" }
const inputT2: InputText2Data = { ph1: "John", nm1: "nombre_s", lb1: "Nombres", ph2: "Doe", nm2: "apellido_s", lb2: "Apellidos" }

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
  <main class="container init-page">
    <section class="limited">
      <header class="container as-header">
        <h1>Añadir estudiante</h1>
        <p>Añadir un estudiante para tener registro en la base de datos</p>
      </header>
      <main class="container as-main">
        <FormAddStudent @finput1="textChange1" @finput2="textChange2" @finput3="textChange3"  :text1="inputT2" :text2="inputT1" />
        <div class="container as-main-button">
          <CommonButton @click="saveStudent()"></CommonButton>
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