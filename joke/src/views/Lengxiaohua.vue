<template>
  <div class="lengxiaohua box">
    <p v-for="(item,index) in lxh" :key="index">{{ item }}</p>
  </div>
</template>
<style>
.lengxiaohua{
    width: 100%;
    height: 90%;
    overflow: auto;
    background-color: lightgoldenrodyellow;
}
.lengxiaohua p{
    width: 90%;
    height: auto;
    margin: 1rem auto;
    font-size: 0.9rem;
    text-align: left;
    background-color: lightblue;
    border-radius: 5%;
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'gifCon',//组件名
  components: {
    // HelloWorld
  },
  data:function () {
    return {
      lxh:[
          '火云邪神苦练多年，终于将蛤蟆功练至顶级并成功产下8个小蝌蚪。',
          '老婆永远是对的，这话永远也是对的。但老婆没想到的是，她不一定永远是老婆',
          '小王一辈子窝囊废，行将就木之际就渴望被人夸一次。这份执念感动了老天爷，他派了一个大夫过来说：你这病吧，老厉害了。',
          '“判断空气质量好不好可以抠鼻屎，黑的就是空气质量不好。”“红的呢？”“你抠猛了！ ”',
          '昨晚预约了快递上门取件还预点了早餐，结果早上睡太死外卖打电话没听见，直接给我放门口窗台了，后来快递员来取件把我外卖寄走了。',
          '自己做菜，女朋友每次都吃的干干净净，一直自我感觉良好自己做菜手艺不错，有一天突然意识到，女朋友可能就是单纯的能吃。',
          '今天去理发，洗剪吹68，烫发和染发668。我就做了个洗剪吹，结账的时候发现居然收我668。。。',
          '两个老人去养老院。。。70岁的老人进去了，90岁老人没进去。工作人员：“对不起，大爷，我们不接受儿女健在的老人。您的资料显示，你有一个儿子。”90岁老人：“操，刚刚进去的就是我儿子！ ”',
          '前些天嗓子病了，不能发声，领导却让我参加合唱比赛，给我说充个数就行。我感觉这样不好，就积极治疗，赶在比赛前治好了。结果比赛失利，领导一声叹息的道：“你怎么偏偏赶在这时候嗓子好了呢？”',
          '成语新释“远交近攻”：孩子做作业的时侯，离的远一点还能交流交流，离的近了，想不攻击都难！'
      ]
    }
  }
}
</script>