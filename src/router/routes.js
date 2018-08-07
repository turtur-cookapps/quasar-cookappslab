export default [
  {
    path: '/',
    component: () => import('layouts/none'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/default-top'),
    children: [
      { path: 'login', component: () => import('pages/login') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/default-top'),
    children: [
      { path: 'main', component: () => import('pages/main') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/default-top'),
    children: [
      { path: 'user', component: () => import('pages/tabs/user') }
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
