<template>
  <div id="app">
    <HeaderComponent />
    <MessageFlashComponent />
    <router-view/>
  </div>
</template>

<script>
  import HeaderComponent from "./components/HeaderComponent"
  import MessageFlashComponent from "./components/MessageFlashComponent"

  export default {
    components: {
      HeaderComponent,
      MessageFlashComponent
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
