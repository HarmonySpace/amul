<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"
import { Student } from "../../interfaces/Student"
import { getStudent, putStudent, deleteStudent } from "../../api/StudentApi"
import FormPerson from "../../components/forms/FormPerson.vue"
import CommonButton from "../../components/buttons/CommonButton.vue"
import CommonButton2 from "../../components/buttons/CommonButton2.vue"
import IconArrow from "../../components/icons/IconArrow.vue"

const student = ref({} as Student)
const router = useRouter();
const currentR = router.currentRoute.value.params.id

const navegateTo = (to: string) => {
  router.push(to)
}

onMounted(() => {
  if (typeof currentR === `string`) {
    loadStudent(currentR)
  }
})

const loadStudent = async (id: string) => {
  const res = await getStudent(id)
  student.value = res.data
  console.log(res)
}

const textChange1 = (input: string) => {
  student.value.names = input
}
const textChange2 = (input: string) => {
  student.value.lastnames = input
}
const textChange3 = (input: string) => {
  student.value.cardId = input
}
const handlePut = async () => {
  console.log(student.value)
  if (!student.value.names && !student.value.lastnames && !student.value.cardId) {
    console.log('please fill all camps to continue')
  } else if (!student.value.names) {
    console.log('no names')
  } else if (!student.value.lastnames) {
    console.log('no lastnames')
  } else if (!student.value.cardId) {
    console.log('no card id')
  } else {
    const res = await putStudent(student.value._id ,student.value)
    console.log(res)
  }
}

const handleDelete = async () => {
  if (student.value._id){
    const res = await deleteStudent(student.value._id)
    console.log(res)
    navegateTo('/student/view')
  }  
}
</script>

<template>
  <main class="container init-page-back">
    <section class="limited">
      <IconArrow class="back-arrow" cl="var(--fr)" bg="var(--void)" bg2="var(--void)" sha="var(--void)" sha2="var(--void)"
        @click="navegateTo('/student/view')"></IconArrow>
      <header class="container as-header">
        <h1>Editar estudiante</h1>
        <p>Editar el estudiante <span>{{ $route.params.id }}</span></p>
      </header>
      <main class="container as-main">
        <FormPerson @finput1="textChange1" @finput2="textChange2" @finput3="textChange3" ph="00-00000-0" nm="carnet_s"
          :ct="student.cardId" lb="Carnet" lg="small" ph1="John" nm1="nombre_s" lb1=" Nombres" :ct1="student.names"
          ph2="Doe" nm2="apellidos_s" lb2=" Apellidos" :ct2="student.lastnames" />
        <div class="container as-main-button">
          <CommonButton2 msg="Añadir" @click="handlePut()"></CommonButton2>
          <CommonButton msg="Borrar" @click="handleDelete()"></CommonButton>
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

.as-header p span {
  color: var(--acn);
  font-weight: 700;
}

.as-main {
  margin-top: 5rem;
  flex-wrap: wrap;
}

.as-main-button {
  justify-content: end;
  gap: 1rem;
}
</style>