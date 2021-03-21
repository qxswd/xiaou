import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const index = ()=>import("../pages/index")
const home = ()=>import("../pages/home")


export default new Router({
  routes: [
    {
      path: '/',
      name:"首页",
      component:index,
      redirect:"/home",
      children:[
        {
          path:'home',
          component:home
        },
        // {
        //   path:'cate',
        //   component:cate
        // },
        // {
        //   path:'cart',
        //   component:cart
        // },
        // {
        //   path:'mime',
        //   component:mime
        // }
      ]
    }
  ]
})
