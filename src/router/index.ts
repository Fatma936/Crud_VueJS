import { createRouter, createWebHistory } from 'vue-router'
import ListUser from '../views/ListUser.vue'
import AddUser from '../views/Adduser.vue'
import UpdateUser from '../views/UpdateUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/listusr',
      name: 'list',
      component: ListUser
    },
    {
      path: '/addusr',
      name: 'add',
      component:AddUser,
      
    },
    {
      path: '/update/:id',
      name: 'updateUser',
      component:UpdateUser,
      
    },
    
  ]
})

export default router
