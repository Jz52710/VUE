<template>
  <div class="video-box">
      <h3>{{ item.title}}</h3>
      <video :src="item.videosrc" ref="" controls style="width: 90%;height: 12.5rem" tabindex="2"></video>
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
.video-box{
    width: 100%;
    height: auto;
    margin: 1rem 0;
}
.video-box h3{
    font-weight: 400;
    color: #333333;
    font-size: 1.125rem;
    margin-bottom: 0.375rem;
}
</style>