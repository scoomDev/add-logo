<template>
    <div id="addProject" class="wrapper">
        <div class="container">
            <h2>Nouveau projet</h2>
            <div class="workplace">
                <div class="workplace-form">
                    <div class="input-group">
                        <label for="name">Nom du projet</label>
                        <input type="text" id="name" name="name" v-model="projectName">
                    </div>

                    <div class="input-group">
                        <label for="logo">Logo</label>
                        <input type="file" id="logo" name="logo" @change="processFile($event)">
                    </div>
                </div>
                <picture>
                    <img :src="logo" alt="">
                </picture>
            </div>
            <button class="create-btn">créer</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'addProject',
        data() {
            return {
                projectName: '',
                logo: ''
            }
        },
        methods: {
            processFile(evt) {
                const reader = new FileReader()
                const file = evt.target.files[0]

                if (file && /\.(svg)$/i.test(file.name)) {
                    reader.addEventListener('load', () => {
                        this.logo = reader.result
                    }, false)

                    reader.readAsDataURL(file)
                } else {
                    this.$store.commit('add_message', {
                        state: "warning",
                        content: "Veuillez importer uniquement un fichier \".svg\""
                    })
                }

            }
        }
    }
</script>