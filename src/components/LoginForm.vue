<template>
    <div class="centered">
        <div class="LoginRegisterAlternate">
            <button v-on:click="$router.push(`/`)" class="button" >pQuiz</button>
            <button class="selectedButton">LOGIN</button>
            <button v-on:click="$router.push('register')" class="button">REGISTER</button>
        </div>
        <div class="BlackBox">
            <input type="text" v-model="email" name="email" placeholder="Email">
            <input type="password" v-model="password" name="password" placeholder="Password">
        </div>
        <div class="LoginRegisterAlternate">
            <button v-on:click="this.login" class="button">LOGIN</button>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data: function () {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        login: function () {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
                if (firebase.auth().currentUser) {
                    this.$cookies.config('7d','email',this.email,true)
                    this.$cookies.config('7d','password',this.password,true)
                    this.$store.commit('enterWebsite')
                }
            })
        }
    }
}
</script>
