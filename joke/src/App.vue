<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
<!--    下面的导航栏-->
    <div class="nav">
      <router-link to="/text" tag="div" class="nav-box">
          <i class="iconfont icon-rili"></i>
          <p>笑话</p>
      </router-link>
      <router-link to="/img" tag="div" class="nav-box">
          <i class="iconfont icon-tupian"></i>
          <p>趣图</p>
      </router-link>
      <router-link to="/gif" tag="div" class="nav-box">
          <i class="iconfont icon-icon_xinyong_xianxing_jijin-"></i>
          <p>动图</p>
      </router-link>
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
    background-color: #aac9ce;
    position: fixed;
    z-index: 10;
    bottom: 0;
    display: flex;
  }
  .iconfont{
      font-size: 1.25rem;
  }
  .nav-box{
    flex-grow: 1;
    padding: 0.75rem 0;
  }
.router-link-active{
    color: #fa897b;
}
</style>
