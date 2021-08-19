<template>
  <div class="detail">
    <HeaderDetail />
    <BreadcrumbDetail />
    <DetailKarier />
  </div>
</template>

<style scoped>

</style>

<script>
  import HeaderDetail from "@/components/header/HeaderKarierDetail.vue"
  import BreadcrumbDetail from "@/components/breadcrumb/BreadcrumbDetail.vue"
  import DetailKarier from "@/components/DetailKarier.vue"

  export default {
    name:"Detail",
    components:{
      HeaderDetail,
      BreadcrumbDetail,
      DetailKarier
    }
  }
</script>