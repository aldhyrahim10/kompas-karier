<template>
  <div class="karier">
    <HeaderKarier />
    <CardSearchKarier />
    <Breadcrumb />  
    <KarierList />
  </div>
</template>

<style scoped>

</style>

<script>
  import HeaderKarier from "@/components/header/HeaderKarier.vue"
  import CardSearchKarier from "@/components/CardSearchKarier.vue"
  import KarierList from "@/components/KarierList.vue"
  import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue"

  export default {
    name:"Karier",
    components:{
      HeaderKarier,
      CardSearchKarier,
      KarierList,
      Breadcrumb
    }
  }
</script>