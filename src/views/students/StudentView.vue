<script setup lang="ts">
import { ref, onMounted } from "vue"
import { navegateTo } from "../../routes/utils";
import { Student } from "../../interfaces/Student"
import { getStudents } from "../../api/StudentApi";
import CommonButton2 from "../../components/buttons/CommonButton2.vue"
import IconPeople from "../../components/icons/IconPeople.vue";

onMounted(() => {
  loadStudents()
})

const students = ref({} as Student[])

const loadStudents = async () => {
  const res = await getStudents()
  students.value = res.data
}
</script>

<template>
  <main class="container init-page">
    <section class="limited">
      <header class="container sv-header">
        <h1>Estudiantes</h1>
        <p>Vista de todos los estudiantes</p>
        <div class="container sv-h-nav">
          <CommonButton2 msg="Añadir" @click="navegateTo('/student/add')"></CommonButton2>
        </div>
      </header>
      <main class="container ls-main">
        <ul class="container ls-list">
          <li v-for="student in students" :key="student._id" class="container">
            <IconPeople @click="navegateTo('/student/edit/' + student._id)"></IconPeople>
            <main class="container student-data">
              <h1>{{ student.names + " " + student.lastnames }}</h1>
              <p>{{ student.cardId }}</p>
            </main>
          </li>
        </ul>
      </main>
    </section>
  </main>
</template>

<style>
.sv-header {
  flex-wrap: wrap;
  justify-content: start;
}

.sv-header h1 {
  width: 100%;
}

.sv-h-nav {
  justify-content: start;
  margin-top: 3rem;
}

.ls-main {
  margin-top: 5rem;
  flex-wrap: wrap;
  padding: 3rem;
  border-radius: 1.5rem;
  background-color: var(--bg);
}

.ls-main ul {
  list-style: none;
  width: 100%;
}

.ls-main li {
  justify-content: space-between;
}

.ls-main .student-data {
  flex-wrap: wrap;
  justify-content: start;
  margin-left: 5rem;
  padding-right: 10rem;
}

.ls-main .student-data h1 {
  font-size: 3rem;
  width: 100%;
}

.ls-list {
  flex-wrap: wrap;
}

.ls-list li {
  align-items: center;
  margin-bottom: 3rem;
}

.ls-options {
  max-width: fit-content;
  gap: 1rem;
}</style>