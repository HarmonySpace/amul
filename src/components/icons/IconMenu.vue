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
      <g id="menu">
        <line class="icon-normalize" x1="27.23" y1="31.88" x2="72.67" y2="31.88" />
        <line class="icon-normalize" x1="27.33" y1="50" x2="72.77" y2="50" />
        <line class="icon-normalize" x1="27.33" y1="68.12" x2="72.77" y2="68.12" />
      </g>
    </svg>
  </div>
</template>