import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/manage',
      name: 'Manage',
      component: resolve => require(['../pages/manage/Manage'], resolve),
      children: [
        {
          path: 'main',
          name: 'MainPage',
          component: resolve => require(['../pages/manage/mainPage/MainPage'], resolve)
        },
        {
          path: 'charts',
          name: 'Charts',
          component: resolve => require(['../pages/manage/dataCharts/MyCharts'], resolve),
          children: [
            {
              path: 'pie',
              name: 'Pie',
              component: resolve => require(['../pages/manage/dataCharts/MyPie'], resolve)
            },
            {
              path: 'line',
              name: 'Line',
              component: resolve => require(['../pages/manage/dataCharts/MyLine'], resolve)
            },
            {
              path: 'bar',
              name: 'Bar',
              component: resolve => require(['../pages/manage/dataCharts/MyBar'], resolve)
            }
          ],
          redirect: {name: 'Pie'}
        },
        {
          path: 'functions',
          name: 'Functions',
          component: resolve => require(['../pages/manage/functionUnit/Functions'], resolve),
          children: [
            {
              path: 'loading',
              name: 'Loading',
              component: resolve => require(['../pages/manage/functionUnit/Loading'], resolve)
            },
            {
              path: 'ueditor',
              name: 'UEditor',
              component: resolve => require(['../pages/manage/functionUnit/UEditor'], resolve)
            },
            {
              path: 'video',
              name: 'Video',
              component: resolve => require(['../pages/manage/functionUnit/Video'], resolve)
            }
          ],
          redirect: {name: 'Loading'}
        },
        {
          path: 'infolists',
          name: 'InfoLists',
          component: resolve => require(['../pages/manage/infoLists/InfoLists'], resolve),
          children: [
            {
              path: 'list1',
              name: 'InfoList1',
              component: resolve => require(['../pages/manage/infoLists/InfoList1'], resolve)
            },
            {
              path: 'list1',
              name: 'InfoList2',
              component: resolve => require(['../pages/manage/infoLists/InfoList2'], resolve)
            },
            {
              path: 'list1',
              name: 'InfoList3',
              component: resolve => require(['../pages/manage/infoLists/InfoList3'], resolve)
            }
          ],
          redirect: {name: 'Loading'}
        }
      ],
      redirect: {name: 'MainPage'}
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['../pages/login/Login'], resolve)
    },
    {
      path: '/error',
      name: 'Error',
      component: resolve => require(['../pages/error/Error'], resolve)
    },
    {
      path: '/',
      redirect: to => {
        return '/login'
      }
    },
    {
      path: '',
      redirect: to => {
        return '/login'
      }
    },
    {
      path: '*',
      redirect: to => {
        return '/error'
      }
    }
  ]
})
