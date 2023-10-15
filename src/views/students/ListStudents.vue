<script setup lang="ts">
import { onMounted, ref } from "vue"
import { Student } from "../../interfaces/Student"
import { getStudents } from "../../api/StudentApi"

onMounted (() => {
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
      <header class="container ls-header">
        <h1>Lista de estudiantes</h1>
        <p>Lista de todos los estudiantes</p>
      </header>
      <main class="container ls-main">
        <ul>
          <li v-for="student in students">
            <h1>{{ student.names }}.</h1>
            <h2>{{ student.lastnames }}</h2>
            <p>{{ student.cardId }}</p>
          </li>
        </ul>
      </main>
    </section>
  </main>
</template>

<style scoped>
.ls-header {
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
}

.ls-header h1 {
  width: 100%;
}

.ls-header p {
  margin-top: 1rem;
}

.ls-main {
  margin-top: 5rem;
  flex-wrap: wrap;
  padding: 3rem;
  border-radius: 1.5rem;
  background-color: var(--bg);
}
</style>