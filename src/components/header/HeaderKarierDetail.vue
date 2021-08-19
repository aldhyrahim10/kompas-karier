<template>
  <div class="header">
    <Navbar />
    <div class="header-title">
      <div class="content">
        <h1 class="title">{{karierList.name}}</h1>
        <p class="subtitle">{{karierList.category}} - {{karierList.divisi}}</p>
      </div>
      <div class="share">
        <a href="#" class="btn btn-share"><img src="../../assets/share.svg" alt=""> Bagikan</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

.btn-share{
  font-size: 18px;
  font-weight: 500;
  width: 150px;
  background-color: #fff;
}

.header{
  min-height: 550px;
  background-image: url(../../assets/header.jpg);
  background-size: cover;
}

.header-title{
  width: 60%;
  margin: auto;
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

  import jobData from "../../assets/data.json"
  
  export default {
    name:"HeaderDetail",
    components:{
      Navbar
    },
    data: function(){
      return{
        karierList: jobData[this.$route.params.id]
      };
    }   
  }
</script>