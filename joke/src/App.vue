<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
<!--    下面的导航栏-->
    <div class="nav">
      <router-link to="/text" tag="div">文本</router-link>
      <router-link to="/img" tag="div">图片</router-link>
      <router-link to="/gif" tag="div">动图</router-link>
    </div>
<!--    上面的-->
    <router-view></router-view>
    
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  .nav{
    width: 100%;
    height: 10%;
    background-color: pink;
    position: absolute;
    bottom: 0;
    display: flex;
  }
  .nav div{
    flex-grow: 1;
    padding: 20px 0;
  }
</style>
