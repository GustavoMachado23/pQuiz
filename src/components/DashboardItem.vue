<template>
    <div v-show="pQuizActive">
        <div v-show="!pQuizDeleted" class="DashboardItems">
            <div class="dashboardItem">
                <p class="DashboardItems">
                    <a class="dashboardText">{{ pQuizName }} Quiz</a>
                </p>
                <p class="DashboardItems">
                    <button class="button">Share</button>
                    <button class="button">Results</button>
                    <button v-on:click="deletepQuiz" class="button">Delete</button>
                    <!-- <button v-on:click="startDeleteTimer" class="button">Delete Timer</button> -->
                </p>
            </div>
        </div>
        <div v-show="pQuizDeleted" class="UndoQuizDelete">
            <p>
                <a class="undoText">Quiz deleted!</a>
            </p>
            <p>
                <button v-on:click="undopQuizDeletion" class="undoButton">UNDO {{ undoTimer }}</button>
            </p>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    props: {
        pQuiz: String
    },
    data: function () {
        return {
            pQuizName: '',
            pQuizActive: true,
            pQuizDeleted: false,
            end: 0,
            dateNow: 0
        }
    },
    created () {
        setInterval(this.getDateNow, 500)
        // if (Math.floor(((this.end - this.dateNow)/1000)) < 1) {
        //     if (this.pQuizDeleted) {
        //         this.pQuizAfterUndo = false
        //     }
        // }
    },
    // mounted () {
    //     this.$options.interval = setInterval(this.getDateNow, 1000)
    // },
    // beforeDestroy () {
    //     clearInterval(this.$options.interval)
    // },
    methods: {
        getpQuizName: function () {
            firebase.firestore().collection(this.pQuiz).doc('name').get().then(
                doc => {
                    this.pQuizName = doc.data().name
                    this.pQuizActive = doc.data().active
                }
            )
        },
        deletepQuiz: function () {
            this.pQuizDeleted = true
            // var date = new Date()
            this.end = (this.dateNow+10999)
            // setTimeout(() => {this.startDeleteTimer()}, 10000)
            firebase.firestore().collection(this.pQuiz).doc('name').update({active: false})
        },
        undopQuizDeletion: function () {
            this.pQuizDeleted = false
            firebase.firestore().collection(this.pQuiz).doc('name').update({active: true})
        },
        startDeleteTimer: function () {
            if (this.pQuizDeleted) {
                this.pQuizActive = false
            }
            // var date = new Date()
            // this.end = (date.getTime()+10000)
            // console.log(end)
        },
        getDateNow: function () {
            let date = new Date()
            this.dateNow = date.getTime()
        }
    },
    computed: {
        undoTimer () {
            if (Math.floor(((this.end - this.dateNow)/1000)) < 1) {
                if (this.pQuizDeleted) {
                    this.pQuizActive = false
                }
            }
            return Math.floor(((this.end - this.dateNow)/1000))
        }
    },
    mounted() {
        this.getpQuizName()
        // setInterval(function () {this.dateNow = new Date().getTime()},1000)
        // setTimeout(this.getDateNow,1000)
        // this.dateNow = new Date().getTime()
        // if (Math.floor(((this.end - this.dateNow)/1000)) < 1) {
        //     if (this.pQuizDeleted) {
        //         this.pQuizAfterUndo = false
        //     }
        // }
    }
}
</script>
