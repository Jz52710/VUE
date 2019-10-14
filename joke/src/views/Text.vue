<template>
  <div class="textCon">
    <ul>
      <router-link tag="li" :to="{name: 'baoxiao'}">爆笑笑话</router-link>
      <router-link tag="li" :to="{name:'lengxiaohua'}">冷笑话</router-link>
      <router-link tag="li" :to="{name:'duanxiaohua'}">短笑话</router-link>
      <router-link tag="li" :to="{name:'yijuhua'}">一句话笑话</router-link>
      <router-link tag="li" :to="{name:'gaoxiao'}">搞笑笑话</router-link>
      <router-link tag="li" :to="{name:'kongbu'}">恐怖笑话</router-link>
      <router-link tag="li" :to="{name:'neihan'}">内涵笑话</router-link>
      <router-link tag="li" :to="{name:'shunkouliu'}">顺口溜</router-link>
      <router-link tag="li" :to="{name:'mingzhu'}">名著爆笑</router-link>
      <router-link tag="li" :to="{name:'hh'}">哈哈趣闻</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<style>
.textCon{
    width: 100%;
    height: 90%;
    background-color: lightblue;
    display: flex;
  }
.textCon ul{
    width: 26%;
    height: 90%;
    overflow: hidden;
    border-right: 0.01rem solid #b0b0b0;
    position: fixed;
    left: 0;
    background-color: white;
}
.textCon .box{
    width: calc(100% - 26%);
    height: 90%;
    position: absolute;
    right: 0;
}
.textCon ul li{
    width: 100%;
    height: 10%;
    text-align: center;
    padding: 1.2rem 0;
    box-sizing: border-box;
    font-size: 0.9rem;
}

</style>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
//
// export default {
//   name: 'textCon',//组件名
//   components: {
//     HelloWorld
//   }
// }
</script>
