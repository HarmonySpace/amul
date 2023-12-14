<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { navegateTo } from "../../routes/utils";
import { Group } from "../../interfaces/Group";
import { getGroup, putGroup, deleteGroup } from "../../api/GroupApi";
import FormGroup from "../../components/forms/FormGroup.vue";
import CommonButton from "../../components/buttons/CommonButton.vue";
import CommonButton2 from "../../components/buttons/CommonButton2.vue";
import Main from "../../layouts/mainPage.vue";

const group = ref({} as Group);
const router = useRouter();
const currentR = router.currentRoute.value.params.id;

onMounted(() => {
  if (typeof currentR === `string`) {
    loadGroup(currentR);
  }
})

const loadGroup = async (id: string) => {
  const res = await getGroup(id);
  group.value = res.data;
  console.log(res);
}

const textChange1 = (input: string) => {
  group.value.theme = input;
}
const textChange2 = (input: string) => {
  group.value.state = input;
}

const handlePut = async () => {
  console.log(group.value);
  if (!group.value.theme && !group.value.state) {
    console.log('please fill all camps to continue');
  } else if (!group.value.theme) {
    console.log('no theme');
  } else if (!group.value.state) {
    console.log('no state');
  } else {
    const res = await putGroup(group.value._id, group.value)
    console.log(res);
    navegateTo('/group/view');
  }
}

const handleDelete = async () => {
  if (group.value._id) {
    const res = await deleteGroup(group.value._id);
    console.log(res);
    navegateTo('/group/view');
  }
}
</script>

<template>
  <Main back_page="/group/view">
    <header class="container as-header">
      <h1>Editar Grupo</h1>
      <p>Editar el grupo de investigacion <span>{{ $route.params.id }}</span></p>
    </header>
    <main class="container as-main">
      <FormGroup @finput1="textChange1" @finput2="textChange2" lb1="Tema" lb2="Estado" ph1="Investigación sobre ..."
        ph2="activo" nm1="theme_g" nm2="state_g" :ct1="group.theme" :ct2="group.state" />
      <div class="container as-main-button">
        <CommonButton2 msg="Actualizar" @click="handlePut()"></CommonButton2>
        <CommonButton msg="Borrar" @click="handleDelete()"></CommonButton>
      </div>
    </main>
  </Main>
</template>

<style scoped>
.as-header {
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
}

.as-header h1 {
  width: 100%;
}

.as-header p {
  margin-top: 1rem;
}

.as-header p span {
  color: var(--acn);
  font-weight: 700;
}

.as-main {
  margin-top: 5rem;
  flex-wrap: wrap;
}

.as-main-button {
  justify-content: end;
  gap: 1rem;
}
</style>