<template>
    <div class="dashboard">
        <div class="BlackBox">
            <div class="LoginRegisterAlternate">
                <button v-on:click="$router.push(`/`)" class="button">pQuiz</button>
                <a class="headerText">Hello, {{ name }}</a>
                <button class="button">EDIT USER INFO</button>
                <button v-on:click="this.logout" class="button">LOGOUT</button>
            </div>
            <div v-for="pQuiz in this.pQuizzesMadeByUser" v-bind:key="pQuiz.id">
                <DashboardItem
                    :pQuiz="pQuiz.id"
                />
            </div>
            <div class="LoginRegisterAlternate">
                <button v-on:click="$router.push('new_quiz')" class="button">CREATE NEW QUIZ</button>
                <!-- <button class="button" v-on:click="this.pQuizzes">GET pQUIZZES</button> -->
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import DashboardItem from '../components/DashboardItem'
export default {
    components: {
        DashboardItem
    },
    data: function() {
        return {
            name: 'name',
            pQuizzesMadeByUser: []
        }
    },
    methods: {
        getUserData: function () {
            this.name = firebase.auth().currentUser.displayName
        },
        logout: function () {
            firebase.auth().signOut().then(() => {
                $cookies.remove('email')
                $cookies.remove('password')
                this.$store.commit('enterWebsite')
            })
        },
        pQuizzes: function () {
            firebase.firestore().collection('pQuizzesIDs').where('creator', '==', firebase.auth().currentUser.uid).get().then(
                snapshot => {
                    this.pQuizzesMadeByUser = snapshot.docs
                }
            )
        }
    },
    mounted() {
        this.getUserData(),
        this.pQuizzes()
    }
}
</script>
