<script setup lang="ts">
import IconLogo from "../components/no-dynamic/icons/IconLogo.vue";
import InputSearch from "../components/inputs/InputSearch.vue";
import CommonButton2 from "../components/buttons/CommonButton2.vue";

</script>

<template>
  <section class="container init-page sm-container ">
    <div class="container logo">
      <IconLogo sz="15rem" pd="0"></IconLogo>
    </div>
    <form class="sm-con-form">
      <label class="sm-con-form-title">
        <h1>AMUL</h1>
        <span>Administrador monográfico de la UNAN-León</span>
      </label>
      <InputSearch msg="Buscar por carnet" />
      <CommonButton2 msg="Buscar"></CommonButton2>
    </form>
  </section>
</template>

<style scoped>
.sm-con-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  width: 40%;
}
.sm-con-form-title {
  width: 100%;
  text-align: center;
  margin-bottom: 5vh;
}
.sm-container {
  flex-wrap: wrap;
  padding: 10vh 0 0 0;
}
</style>