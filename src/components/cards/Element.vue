<script setup lang="ts">
import IconArrow from '../icons/IconArrow.vue';

const props = defineProps({
  title: {
    type: String,
    default: "it's empty"
  },
  description: {
    type: String,
    default: "This card is currently empty "
  }
})
</script>

<template>
  <div class="container e-container">
    <header class="container">
      <slot></slot>
    </header>
    <main class="container">
      <h1>{{ props.title }}</h1>
      <p>{{ props.description }}</p>
    </main>
    <footer class="container">
      <IconArrow st="30px" cl="var(--bg4)" bg="var(--void)" bg2="var(--void)" sha="var(--void)" sha2="var(--void)"></IconArrow>
    </footer>
  </div>
</template>

<style scoped>
.e-container {
  max-width: 31%;
  margin-top: 3rem;
  border-width: 2px;
  border-style: solid;
  border-color: var(--bg5);
  border-radius: 20px;
  flex-wrap: wrap;
  padding: 1.5rem;
  padding-top: 3rem;
  transition: all 0.3s ease-out;
}
.e-container main h1, .e-container main p {
  margin: 0;
  width: 100%;
}
.e-container main, .e-container footer  {
  width: 100%;
  flex-wrap: wrap;
}

.e-container main h1 {
  font-size: calc(1rem + 1.3vw);
  text-align: center;
  margin-top: 2rem;
}
.e-container main p {
  font-size: calc(1rem + 0.2vw);
  text-align: center;
  font-weight: 500;
  color: var(--fr4);
}

.e-container:hover {
  transform: size(1.1);
  border-color: var(--acn);
}

</style>