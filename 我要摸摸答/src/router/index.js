import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '@/views/home'
import question from '@/views/question'
import result from '@/views/result'
import card from '@/views/card'
import last from '@/views/last'

Vue.use(Router)

export default new Router({
  routes: [
    {
       path: '/',
       redirect:{
      	 name:'home'
       }
    },
    {
       path:'/home',
       name:'home',
       component:home
    },
    {
       path:'/question/:id',
       name:'question',
       component:question
    },
    {
       path:'/result',
       name:'result',
       component:result
    },
    {
       path:'/card/:id',
       name:'card',
       component:card
    },
    {
       path:'/last/:id',
       name:'last',
       component:last
    }
  ]
})
