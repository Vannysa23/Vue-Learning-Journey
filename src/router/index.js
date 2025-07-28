import { createRouter, createWebHistory } from 'vue-router'
import BlogList from '../views/BlogList.vue'
import BlogDetail from '../views/BlogDetail.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import Contact from '../views/Contact.vue'


const routes = [
    { path: '/', component: BlogList },
    { path: '/blog/:slug', component: BlogDetail, props: true},
    // what is that :slug? why we use props true right here
    { path: '/admin', component: Admin, meta: { requireAuth: true } },
    // meta is like middleware?
    { path: '/login', component: Login },
    { path: '/logout', component: Login, meta: { removeAuth: true} },
    { path: '/contact', component: Contact, props: true}
]

const router = createRouter({
    history: createWebHistory(),
    routes

    // what does this new object of createRouter do
})

let isAuthenticated = false

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('auth') === 'true'
    if(isAuthenticated) {
        to.meta.requireAuth = false
    }
    if (to.meta.requireAuth && !isAuthenticated) {
        // i need a breakdown explanation of this line of code
        next('/login')
    } else {
        next()
    }
})

export default router