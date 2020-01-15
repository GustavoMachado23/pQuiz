// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import App from './App'
import router from './router'

Vue.use(Vuex)

Vue.use(require('vue-cookies'))

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDinWyjM6S3p7AxQcIO1RZqqxtx-VayE4Q",
  authDomain: "pquiz-d1ce1.firebaseapp.com",
  databaseURL: "https://pquiz-d1ce1.firebaseio.com",
  projectId: "pquiz-d1ce1",
  storageBucket: "pquiz-d1ce1.appspot.com",
  messagingSenderId: "72258792426",
  appId: "1:72258792426:web:c3c0eaca0d53c4f44a2093",
  measurementId: "G-CT506YQRHN"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(() => {
  var user = firebase.auth().currentUser;
})

var store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    isLoggedIn: () => {
      return firebase.auth().currentUser
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    enterWebsite () {
      var user = firebase.auth().currentUser;
      if (user) {
        router.push('dashboard')
        console.log(user)
      } else {
        router.push('login')
      }
    },
    requireAuth () {
      if (!isLoggedIn) {
        next('/login')
      } else {
        next()
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  computed: {
    count () {
      return store.state.count
    }
  }
})
