<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  cl: {
    type: String,
    default: "#ffffff"
  },
  st: {
    type: String,
    default: "9px",
  },
  sz: {
    type: String,
    default: "2.3rem",
  },
  pd: {
    type: String,
    default: "0.5rem",
  },
  br: {
    type: String,
    default: "20px",
  },
  bg: {
    type: String,
    default: "var(--acn)",
  },
  bg2: {
    type: String,
    default: "var(--acn)",
  },
  sha: {
    type: String,
    default: "var(--sha2)",
  },
  sha2: {
    type: String,
    default: "var(--acn)",
  }
})
const color = "stroke: " + props.cl + ";"
let stroke = ""
if (props.st == "bold") {
  stroke = "stroke-width: 12px;"
} else if (props.st == "thin") {
  stroke = "stroke-width: 7px;"
} else if (props.st == "ligth") {
  stroke = "stroke-width: 5px;"
} else if (props.st == "normal") {
  stroke = "stroke-width: 9px;"
} else {
  stroke = "stroke-width: " + props.st + ";"
}
const size = "width: calc(" + props.sz + " + 1vw);height: calc(" + props.sz + " + 1vw);"
const padding = "padding: " + props.pd + ";"
const borderRadius = "border-radius: " + props.br + ";"
// const background = "background-color: " + props.bg + ";"
const background = "background-image: linear-gradient(to right top," + props.bg + "," + props.bg2 + ");"
const boxShadow = "box-shadow: 0 0 2rem " + props.sha + ";"

const icon = size + stroke + color
const iconC = padding + borderRadius + background + boxShadow

const hoverShadown = ref("")
const handleMouseHover = () => {
  hoverShadown.value = "box-shadow: 0 0 2rem " + props.sha2 + ";"
}
const handleMouseLeave = () => {
  hoverShadown.value = ""
}
</script>

<template>
  <div class="icon-container" :style="[iconC, hoverShadown]" @mouseover="handleMouseHover" @mouseleave="handleMouseLeave">
    <svg id="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" :style="icon">
      <g id="docs">
        <rect class="cls-1" x="28.03" y="19.51" width="43.95" height="60.97" rx="6.32" />
        <line class="cls-1" x1="38.91" y1="32.18" x2="61.09" y2="32.18" />
        <line class="cls-1" x1="38.91" y1="44.06" x2="61.09" y2="44.06" />
        <line class="cls-1" x1="38.91" y1="55.94" x2="61.09" y2="55.94" />
        <line class="cls-1" x1="38.91" y1="67.82" x2="61.09" y2="67.82" />
      </g>
    </svg>

  </div>
</template>

<style scoped>
.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease-in;
  box-shadow: 0 0 2rem var(--acn);
  height: 100%;
}

.cls-1 {
  fill: none;
  /* stroke: var(--fr); */
  stroke-linecap: round;
  stroke-linejoin: round;
}

.icon {
  cursor: pointer;
  box-shadow: 0 0 2rem var(--sha);
  transition: all 0.1s ease-in;
}

.icon-container:hover {
  box-shadow: 0 0 2rem var(--acn);
  transform: scale(1.1);
  cursor: pointer;
  transition: all 0.1s ease-in;
}
</style>