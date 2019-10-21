<template>
  <div class="videoCon">
    <Video v-for="item in vd" :item="item" :key="item.title"></Video>
  </div>
</template>
<style>
.videoCon{
    width: 100%;
    height: 90%;
    background-color: lightgoldenrodyellow;
    overflow: auto;
  }
</style>

<script>
// @ is an alias to /src
import Video from '@/components/Videos.vue'

export default {
  name: 'videos',//组件名
  components: {
    Video
  },
  data:function () {
    return {
        vd:[
          {title:'聪明反被聪明误',videosrc:'//f.video.weibocdn.com/001l2VMGlx07wwb41FUc01041200WQwf0E010.mp4?label=mp4_720p&template=1280x720.23.0&trans_finger=9ff95bc90ce0744bdc0ee98b663a9435&Expires=1571110254&ssig=DQqOVuCXEW&KID=unistore,video'},
          {title:'一面是公司即将破产，一面是陌生人急需帮助，小伙这选择暴露人品了',videosrc:'//f.us.sinaimg.cn/000SMbaElx07qD1P2eg801041200IX7S0E010.mp4?label=mp4_hd&template=852x480.20.0&Expires=1571110160&ssig=gpUdUjX7Io&KID=unistore,video'},
          {title:'老同学见面分外眼红',videosrc:'//f.video.weibocdn.com/002AbyHZlx07w9WTTZH2010412020KLD0E010.mp4?label=mp4_720p&template=1280x720.23.0&trans_finger=9ff95bc90ce0744bdc0ee98b663a9435&Expires=1571110254&ssig=yqYyh55sin&KID=unistore,video'},
          {title:'如此抠门',videosrc:'//f.video.weibocdn.com/002dAJh9lx07w0dF8xcs01041201cb090E010.mp4?label=mp4_720p&template=1280x720.23.0&trans_finger=9ff95bc90ce0744bdc0ee98b663a9435&Expires=1571110254&ssig=rtohAOcNug&KID=unistore,video'},
          {title:'棋差一招',videosrc:'//f.us.sinaimg.cn/000HB6wBlx07vIGTEcAo010412017O7S0E010.mp4?label=mp4_720p&template=1280x720.23.0&trans_finger=9ff95bc90ce0744bdc0ee98b663a9435&Expires=1571110254&ssig=DbHEVRlvGO&KID=unistore,video'},
        ]
    }
  },
}
</script>