<template>
  <div class="section-navbar">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link to="/">
          <img class="logo" src="../assets/logo_kompas.png" alt="">
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="#">Tujuan Kami</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/karier">Lowongan Kerja</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="#">Nilai-nilai Kompas</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="#">Keseharian Kami</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="#">Mengenal Kami</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nav-item{
  margin-top: 50px;
}

.nav-link{
  margin-top: 10px;
  color: #fff;
}


.logo{
  margin-right: 15px;
}
</style>

<script>
  export default {
    name:"Navbar"
  }
</script>

