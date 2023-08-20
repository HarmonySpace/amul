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
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.64 94.96" class="icon" :stroke="color" :style="icon">
    <g id="a" />
    <g id="b">
      <g id="c">
        <g>
          <line class="d" x1="68.61" y1="18.17" x2="105.07" y2="18.17" />
          <line class="d" x1="5.56" y1="18.17" x2="14.59" y2="18.17" />
          <line class="d" x1="5.56" y1="47.48" x2="105.07" y2="47.48" />
          <circle class="d" cx="41.6" cy="18.17" r="12.61" />
          <path d="M53.27,25.15c.43,0,.43-.67,0-.67s-.43,.67,0,.67h0Z" />
          <line class="d" x1="42.03" y1="76.79" x2="5.56" y2="76.79" />
          <line class="d" x1="105.07" y1="76.79" x2="96.04" y2="76.79" />
          <circle class="d" cx="69.04" cy="76.79" r="12.61" />
          <path d="M57.36,70.48c.43,0,.43-.67,0-.67s-.43,.67,0,.67h0Z" />
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