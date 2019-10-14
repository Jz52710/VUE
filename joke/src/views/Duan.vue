<template>
  <div class="duanxiaohua box">
    <p v-for="(item,index) in duan" :key="index">{{ item }}</p>
  </div>
</template>
<style>
.duanxiaohua{
    width: 100%;
    height: 90%;
    overflow: auto;
    background-color: lightgoldenrodyellow;
}
.duanxiaohua p{
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
      duan:[
              '失眠证明就算你每天都练习某件事，你还是可以做不好它。',
              '没钱真的太惨了，我只有1块钱，连2元店的吃亏上当都买不到！！！',
              '如果你真能看得出男朋友有没有潜力，直接做风投好了，还谈什么恋爱啊！',
              '鄙人优点挺多，没什么不足，如果非要说不足的话，就是经常余额不足。',
              '最近有人说我喜欢你，我真是无语了，我喜欢你这么多年，为什么最近才有人说？',
              '当你放屁之后一定要说一句“什么东西糊了？”这样周围的人就会吸光你的屁。',
              '终于知道我为啥老是失眠了，因为我睡觉睡的还不够虔诚、不够真诚，脑子里在想钱，心里又在想人。。。',
              '小时候因为家里穷，每天都不开心，爸妈安慰我，说有钱人也会不开心的。从那时候起，我就对自己说，同样是不开心，我为什么不做个有钱人呢?',
              '人最怕的就是突然膨胀，精神上会让人失去理智，肉体上会让人失去锁骨、腹饥腰窝、马甲线。',
              '我一直坚信人定胜天，因为有些人能把天聊死。',
              '平时工作学习的时候会因为打岔而喝一些水，然而一旦放假，就会因为四处奔波玩耍而忘记喝水，甚至会出现连续几天滴水未沾的极端现象，然后在夜深人静时，一个人躲在被窝里默默口渴。',
              '儿子叫了几个同学来家里玩。作为一个开明的家长，我把他们当作朋友，跟他们聊游戏、谈人生。后来我出去买菜，在门外听到有人说：“你爸真不简单，终于肯走了。”',
              '“谁这条命，也不是大风刮来的。”,“蒲公英是。”',
              '买了个灯泡，问老板为什么不亮？老板说：这是限亮版。'
      ]
    }
  }
}
</script>