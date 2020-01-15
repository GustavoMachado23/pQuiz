<template>
    <div class="centered">
        <div class="LoginRegisterAlternate">
            <button v-on:click="$router.push(`/`)" class="button">pQuiz</button>
            <button v-on:click="$router.push('login')" class="button">LOGIN</button>
            <button class="selectedButton">REGISTER</button>
        </div>
        <div class="BlackBox">
            <input type="text" v-model="username" placeholder="Username">
            <input type="text" v-model="email" name="email" placeholder="Email">
            <input type="text" v-model="confirmEmail" placeholder="Confirm your email">
            <input type="password" v-model="password" name="password" placeholder="Password">
            <input type="password" v-model="confirmPassword" placeholder="Confirm your password">
        </div>
        <div class="LoginRegisterAlternate">
            <button v-on:click="this.register" class="button">REGISTER</button>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data: function () {
        return {
            username: "",
            email: "",
            confirmEmail: "",
            password: "",
            confirmPassword: "",
        }
    },
    methods: {
        register: function () {
            var username = this.username
            if (this.email.toLowerCase() == this.confirmEmail.toLowerCase() && this.password == this.confirmPassword) {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function (user) {
                    if (firebase.auth().currentUser) {
                        this.$cookies.config('7d','email',this.email,true)
                        this.$cookies.config('7d','password',this.password,true)
                        this.$store.commit('enterWebsite')
                    }
                });
            } else if (this.email.toLowerCase() != this.confirmEmail.toLowerCase() && this.password != this.confirmPassword) {
                alert("I guess you typed in wrongly both your email and your password!")
            } else if (this.email.toLowerCase() == this.confirmEmail.toLowerCase()) {
                alert("I guess you typed the password you wanted wrongly in one of the boxes!")
            } else {
                alert("I guess you typed your email wrongly in one of the boxes!")
            }
        }
    }
}
</script>
