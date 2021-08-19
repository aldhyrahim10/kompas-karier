<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HeaderHome />
    <Purpose />
    <Quotes />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderHome from "@/components/header/HeaderHome.vue"
import Purpose from "@/components/Purpose.vue"
import Quotes from "@/components/Quotes.vue"

export default {
  name: 'Home',
  components: {
    HeaderHome,
    Purpose,
    Quotes
  }
}
</script>
