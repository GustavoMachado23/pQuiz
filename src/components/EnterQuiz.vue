<template>
    <div class="centered">
        <div class="LoginRegisterAlternate">
            <button v-on:click="$router.push(`/`)" class="button">pQuiz</button>
            <a class="headerText">x Quiz</a>
        </div>
        <div class="BlackBox">
            <input type="text" id="username" name="username" placeholder="What's your name?">
        </div>
        <div class="LoginRegisterAlternate">
            <button class="button">ENTER QUIZ</button>
        </div>
    </div>
</template>