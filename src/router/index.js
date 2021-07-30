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
        component: () => import('@/views/user/info'),
        meta: { title: '信息管理' }
      }
    ]
  },


  //案例项
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '案例', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '表格', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '树型表', icon: 'tree' }
      }
    ]
  },

  //表单项
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '表单', icon: 'form' }
      }
    ]
  },

  //菜单项
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '菜单项',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: '菜单1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: '菜单1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: '菜单1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: '菜单1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: '菜单1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: '菜单1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: '菜单2' }
      }
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
