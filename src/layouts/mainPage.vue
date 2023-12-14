<script setup lang="ts">
import { navegateTo } from "../routes/utils";
import IconArrow from "../components/icons/IconArrow.vue";
const props = defineProps({
  back_page: {
    type: String,
    default: "/listelements"
  }
})
</script>

<template>
  <main class="container init-page-back">
    <section class="limited">
      <IconArrow class="back-arrow" cl="var(--fr)" bg="var(--void)" bg2="var(--void)" sha="var(--void)" sha2="var(--void)"
        @click="navegateTo(props.back_page)"></IconArrow>
        <slot>
        </slot>
      </section>
  </main>
</template>