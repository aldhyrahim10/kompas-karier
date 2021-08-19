<template>
  <div class="header">
    <Navbar/>
    <div class="header-title">
      <div class="text-center">
        <h1 class="title">Jadilah Bagian Dari Perubahan Indonesia</h1>
        <p class="subtitle">Bekerja dengan hati dan dedikasi bersama kami</p>
      </div>
    </div>
    <FormSearch/>
    <div class="text-center">
      <p class="text-or">Atau</p>
    </div>
    <center>
      <router-link to="/karier" class="btn btn-karier">Lihat Semua Karier</router-link>
    </center>
  </div>
</template>

<style scoped>
.header{
  min-height: 620px;
  background-image: url(../../assets/header.jpg);
  background-size: cover;
}

.title{
  margin-top: 120px;
  color: #fff;
  font-weight: bold;
}

.subtitle{
  color: #fff;
  font-size: 16px;
  margin-top: 20px;
}

.text-or{
  margin-top: 30px;
  color: #fff;
}

.btn-karier{
  background-color: #E28F17;
  color: #fff;
  width: 200px;
  border-radius: 15px;
  margin-bottom: 50px;
}

</style>

<script>
  import Navbar from '@/components/Navbar.vue'
  import FormSearch from '@/components/FormSearch.vue'

  export default {
    name:"HeaderHome",
    components:{
      Navbar,
      FormSearch
    }   
  }
</script>