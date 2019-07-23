<template>
  <div>
    <div>我是div</div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "1"
    };
  }
};
</script>

<style scoped>
h1 {
  color: rebeccapurple;
}
</style>
