<template>
    <div class="centered">
        <div class="LoginRegisterAlternate">
            <button v-on:click="$router.push(`/`)" class="button">pQuiz</button>
            <a class="headerText">x Quiz</a>
        </div>
        <div class="BlackBox">
            <a class="noBackgroundText">Question</a>
            <p>
                <button class="quizAnswer">Answer</button>
            </p>
            <p>
                <button class="quizAnswer">Answer</button>
            </p>
        </div>
        <div class="LoginRegisterAlternate">
            <button class="button">NEXT</button>
        </div>
    </div>
</template>