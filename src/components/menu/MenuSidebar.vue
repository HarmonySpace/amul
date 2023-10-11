<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"
import IconMenu from "../icons/IconMenu.vue"

let menuState = ref(false)
const router = useRouter()
const toggleMenu = () => {
  menuState.value = !menuState.value;
}
const navegateTo = (to: string) => {
  router.push(to)
}
</script>

<template>
  <div class="cont-menu">
    <IconMenu class="icon" :class="{ 'icon-rotate': menuState }" @click="toggleMenu()" sz="1.5rem" />
    <Transition name="list">
      <ul class="menu-list" v-show="menuState">
        <li class="menu-item" @click="navegateTo('/')">
          <router-link class="menu-link" ref="buscar" to="/">Buscar</router-link>
        </li>
        <li class="menu-item" @click="navegateTo('/addmonograph')">
          <router-link class="menu-link" ref="añadir" to="/addmonograph">Añadir</router-link>
        </li>
        <li class="menu-item" @click="navegateTo('/addstudent')">
          <router-link class="menu-link" ref="añadir estudiante" to="/addstudent">Añadir estudiantes</router-link>
        </li>
      </ul>
    </Transition>

  </div>
</template>

<style scoped>
.cont-menu {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding: 3rem;
}

.icon {
  transform: rotate(0deg);
  transition: all 0.2s ease-out;
}

.icon:hover {
  transform: rotate(0deg) scale(0.9);
  transition: all 0.2s ease-out;
}

.icon-rotate {
  transform: rotate(90deg);
  transition: all 0.2s ease-out;
}

.icon-rotate:hover {
  transform: rotate(90deg);
  transition: all 0.2s ease-out;
}

.menu-list {
  list-style: none;
  margin-top: 1rem;
  padding: 2rem;
  transition: all 0.2s;
  border-radius: 25px;
  background-color: var(--bg);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-2rem);
}


.menu-item {
  padding: 0.5rem 5rem 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 13px;
  transition: all 0.2s ease;
}

.menu-item:hover {
  cursor: pointer;
  color: var(--acn);
  transform: translateX(0.5rem);
  background-color: var(--bg2)
}
</style>