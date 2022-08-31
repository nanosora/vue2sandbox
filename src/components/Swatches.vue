<template>
  <div v-bind="$attrs">
    <div
      class="swatcher_item"
      v-for="item in colors"
      :key="item"
      :class="{
        active: item == value,
      }"
      :style="{
        backgroundColor: item,
      }"
      @click="$emit('input', item)"
    >
      <svg
        v-if="item == value"
        focusable="false"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          class="uim-primary"
          d="M10.313 16.094a.997.997 0 0 1-.708-.293l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106l5.481-5.48a1 1 0 0 1 1.414 1.413l-6.188 6.188a.997.997 0 0 1-.707.293z"
          opacity=".99"
          fill="currentColor"
        ></path>
        <path
          class="uim-tertiary"
          d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm5.207 7.613l-6.188 6.188a1 1 0 0 1-1.414 0l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106l5.481-5.48a1 1 0 0 1 1.414 1.413z"
          opacity=".5"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  </div>
</template>



<script>
export default {
  props: {
    value: String,
    colors: {
      type: Array,
      default: () => {
        return ["#f00", "#ccff00", "#eee", "#0f0"];
      },
    },
  },
  mounted() {
    console.log("value", this.$props);
  },
};
</script>

<style scoped>
.swatcher_item {
  background: #eee;
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 4px;
  border-radius: 60px;
  position: relative;
  cursor: pointer;
}
.swatcher_item:hover,
.swatcher_item.active {
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
}
.swatcher_item.active svg {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 20px;
  height: 20px;
}
</style>
