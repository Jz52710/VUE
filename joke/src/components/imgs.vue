<template>
  <div class="img-box">
      <h3>{{ item.title}}</h3>
      <img :src="item.src" alt="123">
  </div>
</template>

<script>
export default{
  name: 'imgs',
  props: {
    item:Object,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-box{
    width: 100%;
    height: auto;
    margin: 1rem 0;
}
.img-box h3{
    font-weight: 400;
    color: #333333;
    font-size: 1.125rem;
    margin-bottom: 0.375rem;
}
</style>
