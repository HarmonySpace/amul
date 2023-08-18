<script setup lang="ts">
const props = defineProps({
  cl: {
    type: String,
    default: "#ffffff"
  },
  sz: {
    type: String,
    default: "2.3rem",
  },
  pd: {
    type: String,
    default: "1rem",
  },
  br: {
    type: String,
    default: "20px",
  },
  bg: {
    type: String,
    default: "var(--acn)",
  },
})
const color = props.cl
const size = "width: calc(" + props.sz + " + 1vw);height: calc(" + props.sz + " + 1vw);"
const padding = "padding: " + props.pd + ";"
const borderRadius = "border-radius: " + props.br + ";"
const background = "background-color: " + props.bg + ";"
const icon = size + padding + borderRadius + background
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.65 65.89" class="icon" :stroke="color" :style="icon">
    <g id="a" />
    <g id="b">
      <g id="c">
        <g>
          <line class="d" x1="7.66" y1="7.66" x2="85.82" y2="7.66" />
          <line class="d" x1="7.83" y1="32.94" x2="85.99" y2="32.94" />
          <line class="d" x1="7.83" y1="58.23" x2="85.99" y2="58.23" />
        </g>
      </g>
    </g>
  </svg>
</template>

<style scoped>
.d {
  fill: none;
  /* stroke: var(--fr); */
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 15.32px;
}

.icon {
  box-shadow: 0 0 2rem var(--sha2);
  transition: all 0.1s ease-in;
}

.icon:hover {
  box-shadow: 0 0 2rem var(--acn);
  transform: scale(1.1);
  cursor: pointer;
  transition: all 0.1s ease-in;
}
</style>