<template>
  <div id="app">
    <MessageFlash />
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>

<script>
  import MessageFlash from "./components/MessageFlash"

  export default {
    components: {
      MessageFlash
    },
    created: function () {
      this.$http.interceptors.response.use(undefined, function (err) {
        return new Promise(() => {
          if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            this.$store.dispatch('logout')
          }
          throw err
        })
      })
    }
  }
</script>
