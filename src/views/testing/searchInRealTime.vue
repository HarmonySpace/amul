<script setup lang="ts">
import Main from "../../layouts/mainPage.vue";
import { ref, onMounted } from "vue";
import { Group } from "../../interfaces/Group"
import { getGroups } from "../../api/GroupApi"

onMounted(() => {
  loadGroups();
})

const group = ref("");
const groups = ref({} as Group[])

const loadGroups = async () => {
  const res = await getGroups();
  groups.value = res.data;
}
const search = () => {
  //console.log("searching ...");
  console.log(group.value)
}

// see a video
// https://www.youtube.com/watch?v=6iVUaKOvecE&list=PLIMuuuqKtStq5SVqjTYcUizFGnJfZmFZS&index=7
</script>


<template>
  <Main back_page="/testing/searchinrealtime">
    <main class="container">
      <input @input="search()" v-model="group" placeholder="Buscar grupo por nombre" name="s_group">
      <ul name="" class="container sirt_list">
        <li v-for="g in groups" class="container">
          <h1>{{ g.theme }} <span :class="{ sirt_active: g.state === 'activo', sirt_inactive: g.state === 'inactivo'}">{{ g.state }}</span></h1>
          <hr>
        </li>
      </ul>
    </main>
  </Main>
</template>

<style scoped>
main {
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

input {
  width: 100%;
  background-color: var(--bg);
  border: none;
  outline: none;
  padding: 1rem 2rem;
  margin: 0 200px;
  margin-bottom: 3rem;
  border-radius: 15px;
  font-weight: 500;
  font-size: 1.5rem;
}
.sirt_list {
  width: 60%;
  background-color: var(--bg);
  padding: 3rem;
  border-radius: 25px;

}
.sirt_list,
.sirt_list li {
  flex-wrap: wrap;
  justify-content: start
}
.sirt_list li hr {
  border-top: 0.1rem solid var(--bg3);
  margin: 1rem 1rem;
  flex-grow: 1;
}
.sirt_list li h1 {
  font-weight: 300;
  font-size: 1.5rem;
  width: 100%;
}
.sirt_list li h1 span {
  font-weight: 500;
  font-size: 1rem;
  color: var(--bg);
  border-radius: 5px;
  padding: 0.3rem 1rem;
  word-wrap: normal;
  hyphens: none;
  margin: 0 1rem;
}
.sirt_active {
  background-color: var(--acn2);
}
.sirt_inactive {
  background-color: var(--ter);
}

</style>