const Main = () => import('./views/Main/Main.vue')

const routes = [
  {
    path: '/login',
    hidden: true,
    name: 'Login',
    meta: { title: '系统登录' },
    component: () => import('./views/Login/Login.vue')
  },
  {
    path: '/',
    name: 'Index',
    hidden: false,
    meta: { title: '首页', icon: 'home' },
    component: Main,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        hidden: false,
        meta: { title: '首页', keepAlive: true },
        component: () => import('./views/Home/Home.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'User',
    hidden: false,
    component: Main,
    meta: { title: '用户管理', icon: 'team' },
    children: [
      {
        path: 'user',
        name: 'UserManage',
        hidden: false,
        meta: { title: '用户管理1', keepAlive: true },
        component: () => import('./views/User/User.vue')
      },
      {
        path: 'userType',
        name: 'UserType',
        hidden: false,
        meta: { title: '用户类型管理1', keepAlive: true },
        component: () => import('./views/User/UserType.vue')
      }
    ]
  },
  {
    path: '/account',
    name: 'Account',
    hidden: false,
    component: Main,
    meta: { title: '成员管理', icon: 'team' },
    children: [
      {
        path: 'user1',
        name: 'User1',
        hidden: false,
        meta: { title: '用户管理', keepAlive: true },
        component: () => import('./views/User/User.vue')
      },
      {
        path: 'userType1',
        name: 'UserType1',
        hidden: false,
        meta: { title: '用户类型管理', keepAlive: true },
        component: () => import('./views/User/UserType.vue')
      },
      {
        path: 'userTip',
        name: 'UserTip',
        hidden: false,
        meta: { title: '用户提示', keepAlive: true, hidden: true },
        component: () => import('./views/User/UserType.vue')
      }
    ]
  },
  {
    path: '/404',
    hidden: true,
    component: () => import(/* webpackChunkName: "fail" */ './views/Error/404.vue')
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

export default routes
