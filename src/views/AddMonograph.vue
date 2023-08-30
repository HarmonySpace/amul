<script setup lang="ts">
import InputText from "../components/inputs/InputText.vue"
import InputText2 from "../components/inputs/InputText2.vue"
import InputSwitch from "../components/inputs/InputSwitch.vue"
import InputFile from "../components/inputs/InputFile.vue"
import FormPerson from "../components/forms/FormPerson.vue"
interface InputTextData {
  ph: string,
  nm: string,
  lb: string,
  lg: string,
  ty: string;
}
interface InputText2Data {
  ph1: string,
  nm1: string,
  lb1: string,
  ph2: string,
  nm2: string,
  lb2: string,
}
interface SwitchData {
  op1: string,
  op2: string,
}
interface InputFileData {
  nm: string,
  lb: string,
  lg: string,
  fl: string,
}
const inputT1: InputTextData = { ph: "Ingrese el título", nm: "titulo_g", lb: "Título", lg: "full", ty: "text" }
const inputT1_2: InputTextData = { ph: "00-00000-0", nm: "carnet_s", lb: "Carnet", lg: "small", ty: "text" }
const inputT1_3: InputTextData = { ph: "example@gmail.com", nm: "correo_t", lb: "Correo Institucional", lg: "medium", ty: "email" }
const inputT1_4: InputTextData = { ph: "DD/MMM/AAAA", nm: "fecha_p", lb: "Fecha de entrega", lg: "medium", ty: "date" }
const inputS1: SwitchData = { op1: "Inactivo", op2: "Activo" }
const inputS1_2: SwitchData = { op1: "No inscrito", op2: "Inscrito" }
const inputT2: InputText2Data = { ph1: "Jane", nm1: "nombre_s", lb1: "Nombres", ph2: "Doe", nm2: "apellido_s", lb2: "Apellidos" }
const inputT2_2: InputText2Data = { ph1: "Ciencias y Tecnologías", nm1: "facultad_u", lb1: "Facultad", ph2: "Computación", nm2: "departamento_u", lb2: "Departamento" }
const inputT2_3: InputText2Data = { ph1: "Jane", nm1: "nombre_t", lb1: "Nombres", ph2: "Doe", nm2: "apellido_t", lb2: "Apellidos" }
const inputF1: InputFileData = { nm: "file_p", lb: "Seleccionar archivo", lg: "medium", fl: ".pdf" }

</script>


<template>
  <section class="con">
    <div class="limited">
      <header class="header-con">
        <h1>Push</h1>
        <p>Agregar una nueva monografía</p>
      </header>
      <!-- group data -->
      <main class="main-con">
        <form class="main-form" action="">
          <!-- group data -->
          <h2>Grupo</h2>
          <InputText :data="inputT1" />
          <label>Estado</label>
          <InputSwitch :data="inputS1" />
          <!-- students data -->
          <h2>Estudiantes</h2>
          <FormPerson :text1="inputT2" :text2="inputT1_2"></FormPerson>
          <FormPerson :text1="inputT2" :text2="inputT1_2"></FormPerson>
          <FormPerson :text1="inputT2" :text2="inputT1_2"></FormPerson>
          <h2>Ubicación</h2>
          <InputText2 :data="inputT2_2" />
          <h2>Tutor</h2>
          <FormPerson :text1="inputT2_3" :text2="inputT1_3" ibg1="var(--sec)" ibg2="var(--sec)" sha="var(--sha3)"
            sha2="var(--sec)">
          </FormPerson>
          <h2>Protocolo</h2>
          <InputText :data="inputT1_4"></InputText>
          <label>Estado</label>
          <InputSwitch :data="inputS1_2" />
          <InputFile :data="inputF1"></InputFile>
        </form>
      </main>
    </div>
  </section>
</template>


<style scoped>
.con {
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  margin: 30vh 0 20vh 0;
}

.limited {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  width: 70%;
}

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
