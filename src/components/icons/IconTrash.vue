<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  cl: {
    type: String,
    default: "#ffffff"
  },
  st: {
    type: String,
    default: "45px",
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
    <svg version="1.1" id="svg1" :style="icon" width="100" height="100" viewBox="0 0 100 100"
      xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg">
      <g id="layer-MC0" transform="translate(-3398.9052)">
        <g id="g66" transform="matrix(0.14473825,0,0,0.14473825,2887.1699,18.448989)">
          <rect class="icon-normalize" id="rect61" width="277.62622" height="310.77881" x="3742.6287" y="159.45398"
            ry="25.512768" />
          <path id="rect62" class="icon-normalize"
            d="m 998.98752,584.52209 h 197.89638 a 39.817785,39.817785 45 0 1 39.8178,39.81779 v 19.42208 H 959.16974 v -19.42209 a 39.817785,39.817785 135 0 1 39.81778,-39.81778 z"
            transform="rotate(-8.2216115,-1320.014,-19005.662)" />
          <path id="rect63" class="icon-normalize"
            d="m 1082.6943,531.96667 h 30.4828 a 25.400455,25.400455 45 0 1 25.4005,25.40045 v 27.15498 h -81.2838 v -27.15498 a 25.400455,25.400455 135 0 1 25.4005,-25.40045 z"
            transform="rotate(-8.2216115,-1320.014,-19005.662)" />
          <path class="icon-normalize" d="M 3805.1599,217.98668 V 414.76753" id="path64" />
          <path class="icon-normalize" d="M 3881.0431,217.98668 V 414.76753" id="path65" />
          <path class="icon-normalize" d="M 3956.9263,216.45296 V 413.23381" id="path66" />
        </g>
      </g>
    </svg>

  </div>
</template>