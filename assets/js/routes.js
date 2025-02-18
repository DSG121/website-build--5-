
export const routes = [
  
  {
    path: "/",
    component: () => import('./pages/Page1.js')
  },
  {
    path: "/page-2",
    component: () => import('./pages/Page2.js')
  },
  {
    path: "/page-3",
    component: () => import('./pages/Page3.js')
  },
  {
    path: "/page-4",
    component: () => import('./pages/Page4.js')
  },
  {
    path: "/page-5",
    component: () => import('./pages/Page5.js')
  }
];