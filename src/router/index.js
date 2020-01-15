import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import Home from '@/components/Home'
import Login from '@/components/LoginForm'
import Register from '@/components/RegisterForm'
import Dashboard from '@/components/Dashboard'
import NewQuiz from '@/components/CreateQuiz'
import EnterQuiz from '@/components/EnterQuiz'
import Quiz from '@/components/Quiz'
import QuizEnd from '@/components/QuizEnd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
        if (firebase.auth().currentUser) {
          next('/dashboard')
        } else {
          next()
        }
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (firebase.auth().currentUser) {
          next('/dashboard')
        } else {
          next()
        }
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      beforeEnter: (to, from, next) => {
        if (firebase.auth().currentUser) {
          next('/dashboard')
        } else {
          next()
        }
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      props: true,
      // beforeEnter: requireAuth
      beforeEnter: (to, from, next) => {
        if (!firebase.auth().currentUser) {
          next('/login')
        } else {
          next()
        }
      }
    },
    {
      path: '/new_quiz',
      name: 'CreateQuiz',
      component: NewQuiz,
      props: true,
      beforeEnter: (to, from, next) => {
        if (!firebase.auth().currentUser) {
          next('/login')
        } else {
          next()
        }
      }
    },
    {
      path: '/quiz/id',
      name: 'EnterQuiz',
      component: EnterQuiz
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz,
      props: true
    },
    {
      path: '/quiz_end',
      name: 'QuizEnd',
      component: QuizEnd
    },
  ],
  mode: 'history',
})
