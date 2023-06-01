import { createRouter, createWebHashHistory } from 'vue-router'
import Base from '../components/Base.vue'
import Enseignants from '../components/Enseignants.vue'
import formations from '../components/formations.vue'
const routes = [
    // À compléter
    {
      path: '/',
      name : 'Base',
      component : Base
    }, 
    {
      path: '/enseignants',
      name : 'enseignants',
      component : Enseignants
    }, 
    {
      path: '/formations',
      name : 'formations',
      component : formations
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

export default router