<template>
    <div id="login">
        <h2>Viens !<br>Connecte toi !</h2>
        <form class="login-form" @submit.prevent="login">
            <div>
                <input type="text" placeholder="username" v-model="username" @focus="resetErrors">
            </div>
            <div>
                <input type="password" placeholder="password" v-model="password" @focus="resetErrors">
            </div>
            <div>
                <button type="submit">Ça va ! J'arrive !</button>
            </div>
        </form>
        <div class="register-link">
            <router-link v-if="!isLoggedIn" to="/register">J'ai pas de compte gros !</router-link>
        </div>
    </div>
</template>

<style lang="scss">

</style>

<script>
    export default {
        data() {
            return {
                username: "",
                password: "",
                isLoggedIn: this.$store.getters.isLoggedIn,
            }
        },
        methods: {
            resetErrors() {
                this.errors = {}
            },
            login() {
                const username = this.username
                const password = this.password
                if(username && password) {
                    this.$store.dispatch('login', {username, password})
                        .then(() => this.$router.push('/'))
                } else {
                    this.$store.commit('add_message', {
                        state: "error",
                        content: "Les champs ne sont pas remplis"
                    })
                }
            }
        }
    }
</script>