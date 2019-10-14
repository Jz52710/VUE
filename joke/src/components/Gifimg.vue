<template>
  <div class="gif-box">
      <h3>{{ item.title}}</h3>
      <img :src="item.graph" alt="123">
<!--      <img src="../assets/logo.png" alt="">-->
<!--      <h3>{{ title }}</h3>-->
<!--      <p>{{ graph }}</p>-->
  </div>
</template>

<script>
export default{
  name: 'Gifimg',
  props: {
    item:Object,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gif-box{
    width: 100%;
    height: auto;
    margin: 1rem 0;
}
.gif-box h3{
    font-weight: 400;
    color: #333333;
    font-size: 1.125rem;
    margin-bottom: 0.375rem;
}
</style>
