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
      <g id="people">
        <circle class="cls-1" cx="50" cy="33.93" r="9.28" />
        <path class="cls-1" d="M30.51,73.53a19.49,19.49,0,1,1,39,0" />
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
  /* box-shadow: 0 0 2rem var(--sha2); */
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
  transition: all 0.1s ease-in;
}

.icon-container:hover {
  transform: scale(1.1);
  cursor: pointer;
  transition: all 0.1s ease-in;
}
</style>