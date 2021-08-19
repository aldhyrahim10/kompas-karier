<template>
  <div class="header">
    <Navbar />
    <div class="header-title">
      <div class="text-center">
        <h1 class="title">Temukan Karir Impianmu</h1>
        <p class="subtitle">Mulai berkarir dan temukan tujuanmu bersama Harian Kompas</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header{
  min-height: 550px;
  background-image: url(../../assets/header.jpg);
  background-size: cover;
}

.title{
  font-size: 36px;
  margin-top: 120px;
  color: #fff;
  font-weight: bold;
}

.subtitle{
  color: #fff;
  font-size: 18px;
  margin-top: 20px;
}
</style>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: "HeaderKarier",
    components:{
      Navbar
    }
  }
</script>