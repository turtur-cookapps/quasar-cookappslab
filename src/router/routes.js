export default [
  {
    path: '/',
    component: () => import('layouts/default-top'),
    children: [
      { path: '', component: () => import('pages/index') },
      { path: 'main', component: () => import('pages/main') },
      { path: 'user', component: () => import('pages/tabs/user') },
      { path: 'group', component: () => import('pages/tabs/group') },
      { path: 'chart', component: () => import('pages/tabs/chart') }
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
