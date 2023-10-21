<script setup lang="ts">
import InputText from "../components/inputs/InputText.vue"
import InputText2 from "../components/inputs/InputText2.vue"
import InputSwitch from "../components/inputs/InputSwitch.vue"
import InputFile from "../components/inputs/InputFile.vue"
import FormPerson from "../components/forms/FormPerson.vue"
</script>


<template>
  <main class="container init-page">
    <section class="limited">
      <header class="header-con">
        <h1>Añadir</h1>
        <p>Agregar una nueva monografía en el sistema con los datos solicitados</p>
      </header>
      <main class="main-con">
        <form class="main-form" action="">
          <h2>Grupo</h2>
          <InputText ph="Nombre del grupo" />
          <label>Estado</label>
          <InputSwitch/>
          <h2>Estudiantes</h2>
          <FormPerson/>
          <FormPerson/>
          <FormPerson/>
          <h2>Ubicación</h2>
          <InputText2/>
          <h2>Tutor</h2>
          <FormPerson ibg1="var(--sec)" ibg2="var(--sec)" sha="var(--sha3)" sha2="var(--sec)"/>
          <h2>Protocolo</h2>
          <InputText/>
          <label>Estado</label>
          <InputSwitch/>
          <InputFile/>
        </form>
      </main>
    </section>
  </main>
</template>


<style scoped>
.header-con {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  width: 100%;
}

.header-con h1 {
  width: 100%;
}

.header-con p {
  margin-top: 1rem;
}

.main-con {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
  width: 100%;
}

.main-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
  width: 100%;
}

.main-form h2 {
  margin-top: 10rem;
  width: 100%;
}

.main-form label {
  width: 100%;
  margin: 2rem 0 1rem 0;
}
</style>
