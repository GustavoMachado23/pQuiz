<template>
    <div class="BlackBoxQuestions">
        <a class="noBackgroundText">Question #{{(this.question.id + 1)}}</a>
        <input type="text" v-model="questionToBeAdded.question" placeholder="Question">
        <input type="text" v-model="questionToBeAdded.correctAnswer" placeholder="Correct Answer">
        <div v-for="(wrongAnswer, index) in questionToBeAdded.wrongAnswers" v-bind:key="index">
            <input type="text" v-model="questionToBeAdded.wrongAnswers[index]" :placeholder="placeholderIncorrectAnswer(index)">
        </div>
        <div class="GreenBox">
            <button v-on:click="addAnswer" class="button">ADD ANSWER</button>
            <button class="button">REMOVE ANSWER</button>
            <!-- <button v-on:click="saveQuestion" class="button">SAVE QUESTION</button> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        question: Object,
        timeToSend: Boolean
    },
    data: function () {
        return {
            wrongAnswers: this.question.wrongAnswers,
            questionToBeAdded: {
                question: '',
                correctAnswer: '',
                wrongAnswers: [
                    ''
                ],
                id: 0
            }
        }
    },
    methods: {
        addAnswer: function () {
            this.questionToBeAdded.wrongAnswers.push('')
        },
        // saveQuestion: function () {
        //     this.questionToBeAdded.id = this.question.id
        //     this.$emit('save', this.questionToBeAdded)
        // },
        placeholderIncorrectAnswer: function (index) {
            return 'Incorrect Answer #' + ++index
        }
    },
    watch: {
        timeToSend() {
            this.questionToBeAdded.id = this.question.id
            this.$emit('save', this.questionToBeAdded)
        }
    }
}
</script>
