import Vue from 'vue'
import Router from 'vue-router'

import Home from 'components/home/home'
import Favourite from 'components/favourite/favourite'
import Media from 'components/media/media'
import Mine from 'components/mine/mine'
import Search from 'components/search/search'
import NewsDetail from 'base/news-detail/news-detail'
import DownLoad from 'base/download/download'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children:[{
        path:':id',
        component:NewsDetail,
        children:[
          {
            path:'downLoad',
            component:DownLoad
          }
        ]
      }]
    },
    {
      path:'/favourite',
      component:Favourite,
      children:[{
        path:':id',
        component:NewsDetail,
        children:[
          {
            path:'downLoad',
            component:DownLoad
          }
        ]
      }]
    },
    {
      path:'/media',
      component:Media
    },
    {
      path:'/mine',
      component:Mine
    },
    {
      path:'/search',
      component:Search
    }
  ]
})
