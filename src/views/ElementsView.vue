<script setup lang="ts">
import Element from "../components/cards/Element.vue"
import IconPeople from "../components/icons/IconPeople.vue";
import { navegateTo } from "../routes/utils";
</script>

<template >
  <main class="container init-page">
    <section class="limited">
      <header class="container header-container">
        <h1>Elementos</h1>
        <p>Elementos disponibles en la base de datos</p>
      </header>
      <main class="container ae-main">
        <Element title="Grupo" description="Añadir un nuevo grupo de investigación" @click="navegateTo('/group/view')">
          <IconPeople></IconPeople>
        </Element>
        <Element title="Estudientes" description="Añadir un nuevo estudiante" @click="navegateTo('/student/view')">
          <IconPeople></IconPeople>
        </Element>
      </main>
    </section>
  </main>
</template>

<style scoped>
.ae-main{
  justify-content: start;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>