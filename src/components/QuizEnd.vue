<template>
    <div class="centered">
        <div class="LoginRegisterAlternate">
            <button v-on:click="$router.push(`/`)" class="button">pQuiz</button>
            <a class="headerText">x Quiz</a>
        </div>
        <div class="BlackBox">
            <a class="noBackgroundText">Congratulations! You've got 0 questions right!</a>
            <p class="margin">
                <a class="noBackgroundText">High Scores:</a>
            </p>
            <p>
                <a class="blockText">Player - 0 points</a>
            </p>
        </div>
        <div class="LoginRegisterAlternate">
            <button class="button">SHARE</button>
            <button class="button">CREATE YOUR OWN QUIZ</button>
        </div>
    </div>
</template>