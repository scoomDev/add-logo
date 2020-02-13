<template>
    <div id="home" class="wrapper">
        <div class="container">
            <h2>Les projets</h2>
            <router-link :to="{ 'name': 'addProject' }" class="add-project">
              <svg class="icon">
                <use xlink:href="@/assets/icons/sprite.svg#icon-add"></use>
              </svg>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {}
    }
</script>
