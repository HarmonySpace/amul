<script setup lang="ts">
import { ref } from "vue"
import IconMenu from "../icons/IconMenu.vue"

let menuState = ref(false)
const toggleMenu = () => {
  menuState.value = !menuState.value;
}
</script>

<template>
  <div class="cont-menu">
    <!-- <img class="menu-icon" :src="MeniSp" alt="menu" @click="$router.push('/')" /> -->
    <IconMenu class="icon" :class="{ 'icon-rotate': menuState }" @click="toggleMenu()" />
    <Transition name="list">
      <ul class="menu-list" v-show="menuState">
        <li class="menu-item">
          <router-link to="/">Buscar</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/">Añadir</router-link>
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
  padding: 2rem;
}

.icon {
  transform: rotate(0deg);
  transition: all 0.3s ease-out;
}

.icon:hover {
  transform: rotate(0deg) scale(1.1);
  transition: all 0.3s ease-out;
}

.icon-rotate {
  transform: rotate(90deg);
  transition: all 0.3s ease-out;
}

.icon-rotate:hover {
  transform: rotate(90deg);
  transition: all 0.3s ease-out;
}

.menu-list {
  list-style: none;
  margin-top: 2rem;
  transition: all 0.5s;
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
  background-color: var(--bg)
}




.router-link,
.router-link-active,
.router-link-exact-active,
.router-link-disabled {
  text-decoration: none;
  outline: none;
}
</style>