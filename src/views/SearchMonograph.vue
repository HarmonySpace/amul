<script setup lang="ts">
import InputSearch from "../components/inputs/InputSearch.vue";
import CommonButton2 from "../components/buttons/CommonButton2.vue";

</script>

<template>
  <section class="con">
    <form class="con-form">
      <label class="con-form-title">
        <h1>UMM</h1>
        <span>UNAN-León Monography Manager</span>
      </label>
      <InputSearch msg="Buscar por carnet" />
      <CommonButton2 msg="Buscar"></CommonButton2>
    </form>
  </section>
</template>

<style scoped>
.con {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

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