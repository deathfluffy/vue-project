import { createRouter, createWebHistory } from 'vue-router'

const GreetingPage = () => import('@/views/GreetingView.vue')
const HomePage = () => import('@/views/HomePageView.vue')
const AuthPage = () => import('@/views/AuthView.vue')
const LoginPage = () => import('@/views/LoginView.vue')
const RegisterPage = () => import('@/views/RegistrationView.vue')
const routes = [
  {
    path: '/',
    component: GreetingPage
  },
  {
    path: '/map',
    component: HomePage
  },
  {
    path: '/auth',
    component: AuthPage,
    redirect: '/auth/login',
    children: [
      { path: 'login', component: LoginPage },
      { path: 'registrastion', component: RegisterPage }
    ]
  }
]
export const router = createRouter({
  history: createWebHistory(),
  routes
})
