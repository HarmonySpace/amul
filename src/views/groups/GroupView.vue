<script setup lang="ts">
import { ref, onMounted } from "vue"
import { navegateTo } from "../../routes/utils";
import { Group } from "../../interfaces/Group"
import { getGroups } from "../../api/GroupApi";
import CommonButton2 from "../../components/buttons/CommonButton2.vue"
import IconPeople from "../../components/icons/IconPeople.vue";

onMounted(() => {
  loadGroups();
})

const groups = ref({} as Group[])

const loadGroups = async () => {
  const res = await getGroups();
  groups.value = res.data
}
</script>

<template>
  <main class="container init-page">
    <section class="limited">
      <header class="container sv-header">
        <h1>Grupos</h1>
        <p>Vista de todos los grupos de investigación</p>
        <div class="container sv-h-nav">
          <CommonButton2 msg="Añadir" @click="navegateTo('/group/add')"></CommonButton2>
        </div>
      </header>
      <main class="container ls-main">
        <ul class="container ls-list">
          <li v-for="group in groups" :key="group._id" class="container">
            <IconPeople @click="navegateTo('/group/edit/' + group._id)"></IconPeople>
            <main class="container group-data">
              <h1>{{ group.theme }}</h1>
              <p>{{ group.state }}</p>
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

.ls-main .group-data {
  flex-wrap: wrap;
  justify-content: start;
  margin-left: 5rem;
  padding-right: 10rem;
}

.ls-main .group-data h1 {
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