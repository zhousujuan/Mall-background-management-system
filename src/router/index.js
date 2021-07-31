import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'


export const constantRoutes = [
  //登录
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  //404报错
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  //首页
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'el-icon-s-home' }
    }]
  },
  //商品管理模块
  {
    path: '/shop',
    component: Layout,
    redirect: '/shop',
    name: 'Shop',
    meta: { title: '商品管理', icon: 'el-icon-s-shop' },
    children: [
      {
        path: 'brand',
        name: 'Brand ',
        component: () => import('@/views/shop/brand'),
        meta: { title: '品牌管理'}
      },
      {
        path: 'sku',
        name: 'Sku',
        component: () => import('@/views/shop/sku'),
        meta: { title: 'sku管理' }
      },
      {
        path: 'spu',
        name: 'Spu',
        component: () => import('@/views/shop/spu'),
        meta: { title: 'spu管理' }
      }
    ]
  },

  //用户管理模块
  //商品管理模块
  {
    path: '/user',
    component: Layout,
    redirect: '/user',
    name: 'User',
    meta: { title: '用户管理', icon: 'el-icon-s-custom' },
    children: [
      {
        path: 'brand',
        name: 'Brand ',
        component: () => import('@/views/user/role'),
        meta: { title: '角色管理' }
      },
      {
        path: 'sku',
        name: 'Sku',
        component: () => import('@/views/user/userInfo'),
        meta: { title: '网站用户' }
      },
      {
        path: 'sku',
        name: 'Sku',
        component: () => import('@/views/user/adminInfo'),
        meta: { title: '后台管理员' }
      }
    ]
  },

  //菜单项
  {
    path: '/settings',
    component: Layout,
    redirect: '/settings/system',
    name: 'Settings',
    meta: {
      title: '设置',
      icon: 'el-icon-s-tools'
    },
    children: [
      {
        path: 'systemSettings',
        component: () => import('@/views/settings/system/index'), // Parent router-view
        name: 'SystemSettings',
        meta: { title: '系统设置' },
        children: [
          {
            path: 'webSettings',
            component: () => import('@/views/settings/system/web'),
            name: 'WebSettings',
            meta: { title: '网站设置' },
          },
          {
            path: 'emailServe',
            component: () => import('@/views/settings/system/email'),
            name: 'EmailServe',
            meta: { title: '邮件服务' }
          }
        ]
      },
      {
        path: 'mySettings',
        component: () => import('@/views/settings/mine/index'), // Parent router-view
        name: 'MySettings',
        meta: { title: '我的设置' },
        children: [
          {
            path: 'myInfoSettings',
            component: () => import('@/views/settings/mine/myInfo'),
            name: 'MyInfoSettings',
            meta: { title: '基本资料' },
          },
          {
            path: 'rePsw',
            component: () => import('@/views/settings/mine/rePsw'),
            name: 'RePsw',
            meta: { title: '修改密码' }
          }
        ]
      },
    ]
  },

  //第三方链接
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: '第三方链接', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
