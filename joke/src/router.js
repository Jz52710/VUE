import Vue from 'vue'
import Router from 'vue-router'
import Text from './views/Text.vue'
import Img from  './views/Imgs.vue'
import Gif from './views/Gifs.vue'
import Bao from './views/Baoxiao.vue'
import Leng from './views/Lengxiaohua.vue'
import Sun from './views/Sunkouliu.vue'
import Yi from './views/Yijuhua.vue'
import Gao from './views/Gaoxiao.vue'
import Kong from './views/Kongbu.vue'
import Nei from './views/Neihan.vue'
import Duan from './views/Duan.vue'
import Ming from './views/Mingzhu.vue'
import Hh from './views/Haha.vue'
import Video from './views/Video.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Text
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
    {
      path:'/',
      redirect:'/text/baoxiao',
      alias:'/text'
    },
    {
      path:'/text',
      name:'text',
      component:Text,
      redirect:'/text/baoxiao',
      children:[
        {
          path:'baoxiao',
          name:'baoxiao',
          component:Bao,
        },
        {
          path:'lengxiaohua',
          name:'lengxiaohua',
          component:Leng
        },
        {
          path:'shunkouliu',
          name:'shunkouliu',
          component:Sun
        },
        {
          path:'yijuhua',
          name:'yijuhua',
          component:Yi
        },
        {
          path:'gaoxiao',
          name:'gaoxiao',
          component:Gao
        },
        {
          path:'kongbu',
          name:'kongbu',
          component:Kong
        },
        {
          path:'neihan',
          name:'neihan',
          component:Nei
        },
        {
          path:'duanxiaohua',
          name:'duanxiaohua',
          component:Duan
        },
        {
          path:'mingzhu',
          name:'mingzhu',
          component:Ming
        },
        {
          path:'hh',
          name:'hh',
          component:Hh
        }

      ]
    },
    {
      path:'/img',
      name:'img',
      component:Img
    },
    {
      path:'/gif',
      name:'gif',
      component:Gif
    },
    {
      path:'/video',
      name:'video',
      component:Video
    }
  ]
})
