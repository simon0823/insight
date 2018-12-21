import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import news from '@/components/News'
import business from '@/components/Business'
import life from '@/components/Life'
import enterSports from '@/components/EnterSports'
import photo from '@/components/Photo'
import people from '@/components/People'

import notFound from '@/components/errorPage/notFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/business',
      name: 'business',
      component: business
    },
    {
      path: '/life',
      name: 'life',
      component: life
    },
    {
      path: '/enterSports',
      name: 'enterSports',
      component: enterSports
    },
    {
      path: '/photo',
      name: 'photo',
      component: photo
    },
    {
      path: '/people',
      name: 'people',
      component: people
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      name: 'notFound',
      component: notFound
    }
  ]
})
