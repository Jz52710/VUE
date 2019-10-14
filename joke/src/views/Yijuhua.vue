<template>
  <div class="yijuhua box">
    <p v-for="(item,index) in yi" :key="index">{{ item }}</p>
  </div>
</template>
<style>
.yijuhua{
    width: 100%;
    height: 90%;
    overflow: auto;
    background-color: lightgoldenrodyellow;
}
.yijuhua p{
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
      yi:[
              '众里寻他千百度蓦然回首那人依旧对我不屑一顾。',
              '有一种爱叫我无所谓有一种被爱叫算我倒霉。',
              '秋天睡觉的最高境界吹着风扇盖着棉被。',
              '上今天的班睡昨天的觉!',
              '一切问题最终都是时间问题一切烦恼其实都是自寻烦恼。',
              '心里的话说出来可能是诗但是留在肚子里肯定会变成屎。',
              '有些人去死都和我没关系;有些人弄死我我都放不下。',
              '你是什么样的货色就会给你什么样的脸色要我做作的来讨好你你妄想。',
              '别人笑我太淫荡我笑他人不开放。',
              '不要说别人脑子有病脑子有病的前提是必须有个脑子。',
              '物价涨得太快所以我在餐馆吃饭的时候都会先付钱。',
              '收起你的爱吧我打假都打累了。',
              '其实我并不笨只是懒得聪明罢了。',
              '自从离开你别人就问我：你老把眼球泡在眼泪里消毒呐?',
              '几十个美女说我帅我没承认她们就用砖头砸我说我虚伪。',
              '单身的典型标志就是一个月流量套餐早没了通话套餐还剩一大半。',
              '出问题先从自己身上找原因别一便秘就怪地球没引力。',
              '我想问问：我们在学校都交了钱不是应该让老师听我们的吗?',
              '人生就像斗地主刚还是一伙的一转眼就是敌人。',
              '从小学到大学唯一不变的就是一颗不想念书的心。',
              '我谈过最长的恋爱就是自恋。爱自己没有情敌。'
      ]
    }
  }
}
</script>