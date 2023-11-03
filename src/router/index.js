import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home.vue")
  },
  {
    path: '/about',
    name: 'About',
    component:  () => import("../views/About.vue")
  },
  {
    path: '/books',
    name: 'Books',
    component: () => import("../views/Books.vue")
  },
  {
    path: '/books/:id',
    name: 'BookDetails',
    component: () => import("../views/BookDetails.vue"),
    props: true
  },
  // redirect 
  {
    path: '/all-books',
    redirect: '/books'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
