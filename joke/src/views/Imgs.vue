<template>
  <div class="imgCon">
    <Picture v-for="item in imgs" :item="item" :key="item.title"></Picture>
  </div>
</template>
<style>
.imgCon{
    width: 100%;
    height: 90%;
    background-color: lightgoldenrodyellow;
    overflow: auto;
  }
</style>

<script>
// @ is an alias to /src
import Picture from '@/components/imgs.vue'

export default {
  name: 'imgs',//组件名
  components: {
    Picture
  },
  data:function () {
    return {
      imgs:[
        {title:'猪八戒第3865代转世.....',src:require('../assets/imgs/01.jpg')},
        {title:'贤惠的媳妇',src:require('../assets/imgs/02.jpg')},
        {title:'我尼玛，吓一跳',src:require('../assets/imgs/03.jpg')},
        {title:'我靠，这么大一桶水，你得多缺水啊',src:require('../assets/imgs/04.jpg')},
        {title:'这黄色的虫子脂肪可真多啊',src:require('../assets/imgs/05.jpg')},
        {title:'妹子模仿狗很有一套啊',src:require('../assets/imgs/06.jpg')},
        {title:'一个人的江湖，出门乘地铁',src:require('../assets/imgs/07.jpg')},
        {title:'这自拍姿势，太自信了',src:require('../assets/imgs/08.jpg')},
        {title:'有船任性',src:require('../assets/imgs/09.jpg')},
        {title:'专治呼吸不畅',src:require('../assets/imgs/10.jpg')},
      ]
    }
  }
}
</script>