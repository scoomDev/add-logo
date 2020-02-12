<template>
  <div id="app">
    <MessageFlashComponent />
    <router-view/>
  </div>
</template>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: Gilroy, 'Gilroy', sans-serif;
    font-weight: 300;
    background-color: $col_bg;
  }

  h1 {
    font-weight: 800;
  }

  button {
    background-color: unset;
    border: unset;
  }
</style>

<script>
  import MessageFlashComponent from "./components/MessageFlashComponent"

  export default {
    components: {
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
