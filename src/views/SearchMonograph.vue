<script setup lang="ts">
import InputSearch from "../components/inputs/InputSearch.vue";
import CommonButton2 from "../components/buttons/CommonButton2.vue";

</script>

<template>
  <section class="container init-page">
    <form class="con-form">
      <label class="con-form-title">
        <h1>AMUL</h1>
        <span>Administrador monográfico de la UNAN-León</span>
      </label>
      <InputSearch msg="Buscar por carnet" />
      <CommonButton2 msg="Buscar"></CommonButton2>
    </form>
  </section>
</template>

<style scoped>
.con-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  width: 40%;
}

.con-form-title {
  width: 100%;
  text-align: center;
  margin-bottom: 5vh;
}
</style>