<template>
    <div id="login">
        <h1>Bienvenue sur addLogo</h1>
        <form class="login-form" @submit.prevent="login">
            <h2>Connexion</h2>
            <div class="input-group">
                <label for="username"> Identifiant</label>
                <input type="text" id="username" name="username" placeholder="username" v-model="username">
            </div>
            <div class="input-group">
                <label for="password">Mot de passe</label>
                <input type="password" id="password" name="password" placeholder="password" v-model="password">
            </div>
            <button type="submit" class="btn-rounded">
                <svg class="status-icon">
                    <use xlink:href="@/assets/icons/sprite.svg#icon-arrow"></use>
                </svg>
            </button>
        </form>
    </div>
</template>

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