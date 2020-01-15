<template>
    <div class="centered">
        <div>
            <img class="logo" src="@/assets/logo.png">
        </div>
        <div>
            <button v-on:click="$store.commit('enterWebsite')" class="button">ENTER</button>
            <button v-on:click="$store.commit('increment')" class="button">{{ this.$store.state.count }}</button>
        </div>
	</div>
</template>

<script>
export default {
    methods: {
        enter: function () {
            this.$router.push('login')
        }
    }
}
</script>
