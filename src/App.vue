<template>
  <div id="app">
    <el-alert
      v-for="item in errors"
      :key="item"
      :title="item.msg"
      type="error"
      show-icon
    ></el-alert>
    <label>simei</label>
    <el-input
      id="simei"
      name="simei"
      size="small"
      placeholder="simei"
      v-model="model.simei"
      maxlength="10"
      show-word-limit
      clearable
      data-vv-as="氏名"
      v-validate="'length_sum:' + isLngthOver"
    ></el-input>
    <label>kaisya</label>
    <el-input
      id="kaisya"
      namme="kaisya"
      size="small"
      placeholder="kaisya"
      v-model="model.kaisya"
      maxlength="10"
      show-word-limit
      clearable
      data-vv-as="会社名"
      v-validate="'length_sum:' + isLngthOver"
    ></el-input>
    <label>busho</label>
    <el-input
      id="busho"
      name="busho"
      size="small"
      placeholder="busho"
      v-model="model.busho"
      maxlength="10"
      show-word-limit
      clearable
      data-vv-as="部署名"
      v-validate="'length_sum:' + isLngthOver"
    ></el-input>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    model: {
      simei: "",
      kaisya: "",
      busho: "",
    },
  }),
  created() {
    this.$validator.extend("length_sum", {
      getMessage(field) {
        return `${field}：3項目合計で10文字以内で入力してください`;
      },
      validate(value, [otherVal]) {
        console.log(otherVal);
        if (JSON.parse(otherVal.toLowerCase())) {
          return false;
        } else {
          return true;
        }
      },
    });
  },
  computed: {
    isLngthOver() {
      const len1 = this.model.simei.length;
      const len2 = this.model.kaisya.length;
      const len3 = this.model.busho.length;
      if (len1 + len2 + len3 > 10) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
