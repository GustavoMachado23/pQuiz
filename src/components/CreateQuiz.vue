<template>
    <div class="dashboard">
        <div class="BlackBox">
            <div class="LoginRegisterAlternate">
                <button v-on:click="$router.push(`/`)" class="button">pQuiz</button>
                <a class="headerText">Hello, {{ this.name }}</a>
            </div>
            <input type="text" v-model="quizName" placeholder="Quiz name">
            <div v-for="question in questions" v-bind:key="question.id">
                <AddQuestion
                    :timeToSend="timeToSend"
                    :question="question"
                    @save="questionFromChild"
                />
            </div>
            <div class="DashboardItems">
                <button v-on:click="this.createQuestion" class="button">ADD QUESTION</button>
            </div>
            <div class="GreenBox">
                <button v-on:click="this.createQuiz" class="button">CREATE QUIZ</button>
                <button class="button">DELETE QUIZ</button>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import AddQuestion from '../components/AddQuestion'
export default {
    components: {
        AddQuestion
    },
    data: function() {
        return {
            name: '',
            quizName: '',
            questionQuantity: 0,
            questions: [
                {
                    id: 0
                }
            ],
            timeToSend: false
        }
    },
    methods: {
        getUserData: function () {
            this.name = firebase.auth().currentUser.displayName
        },
        createQuiz: function () {
            var pQuizID = 'pQuiz' + Math.floor((Math.random() * 10000000000) + 1)
            this.timeToSend = true
            firebase.firestore().collection(pQuizID).get().then(
                doc => {
                    if (!doc.exists) {
                        let dataQuizName = {
                            name : this.quizName,
                            creator : firebase.auth().currentUser.uid,
                            active : true,
                        }
                        firebase.firestore().collection(pQuizID).doc('name').set(dataQuizName)
                        for (var id = 0; id <= this.questionQuantity; id++) {
                            firebase.firestore().collection(pQuizID).doc('question'+id).set(this.questions[id])
                        }
                        firebase.firestore().collection('pQuizzesIDs').doc(pQuizID).set(dataQuizName)
                        this.$router.push(`/`)
                        console.log(pQuizID)
                        console.log(firebase.auth().currentUser)
                    } else {
                        return
                    }
                })
        },
        deleteQuiz: function () {
            var pQuizID = 'pQuiz' + Math.floor((Math.random() * 10000000000) + 1)
            this.timeToSend = true
            firebase.firestore().collection(pQuizID).get().then(
                doc => {
                    if (!doc.exists) {
                        let dataQuizName = {
                            name : this.quizName,
                            creator : firebase.auth().currentUser.uid,
                            active : false,
                        }
                        firebase.firestore().collection(pQuizID).doc('name').set(dataQuizName)
                        for (var id = 0; id <= this.questionQuantity; id++) {
                            firebase.firestore().collection(pQuizID).doc('question'+id).set(this.questions[id])
                        }
                        firebase.firestore().collection('pQuizzesIDs').doc(pQuizID).set(dataQuizName)
                        this.$router.push(`/`)
                        console.log(pQuizID)
                        console.log(firebase.auth().currentUser)
                    } else {
                        return
                    }
                })
        },
        createQuestion: function () {
            ++this.questionQuantity
            var dataToBePushed = {
                id: this.questionQuantity
            }
            this.questions.push(dataToBePushed)
        },
        questionFromChild: function (question) {
            this.questions[question.id] = question
        }
    },
    mounted() {
        this.getUserData()
    }
}
</script>
