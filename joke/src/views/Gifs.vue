<template>
  <div class="gifCon">
    <Gifimg v-for="item in bx" :item="item" :key="item.title"></Gifimg>
  </div>
</template>
<style>
.gifCon{
    width: 100%;
    height: 90%;
    background-color: lightgoldenrodyellow;
    overflow: auto;
  }
</style>

<script>
// @ is an alias to /src
import Gifimg from '@/components/Gifimg.vue'

export default {
  name: 'gifs',//组件名
  components: {
    Gifimg
  },
  data:function () {
    return {
      bx:[
        {title:'高手过招，充满了火 药味儿',graph:require('../assets/gif/01.gif')},
        {title:'导演你能认真点儿吗',graph:require('../assets/gif/02.gif')},
        {title:'每次都第一',graph:require('../assets/gif/03.gif')},
        {title:'好像发现了什么见不得人的东西',graph:require('../assets/gif/04.gif')},
        {title:'啊哈！思维窃取',graph:require('../assets/gif/05.gif')},
        {title:'大妈，你太胖了',graph:require('../assets/gif/06.gif')},
        {title:'遥控捅马蜂窝',graph:require('../assets/gif/07.gif')},
        {title:'一脸茫然',graph:require('../assets/gif/08.gif')},
        {title:'好大的雪堆啊',graph:require('../assets/gif/09.gif')},
        {title:'你们都是坏人吓死宝宝了',graph:require('../assets/gif/10.gif')},
      ]
    }
  }
}
</script>