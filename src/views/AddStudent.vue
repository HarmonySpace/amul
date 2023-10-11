<script setup lang="ts">
import FormAddStudent from "../components/forms/FormAddStudent.vue"
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
</script>

<template>
  <main class="container init-page">
    <section class="limited">
      <header class="container as-header">
        <h1>Añadir estudiante</h1>
        <p>Añadir un estudiante para tener registro en la base de datos</p>
      </header>
      <main class="container as-main">
        <FormAddStudent :text1="inputT2" :text2="inputT1" />
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
}
</style>