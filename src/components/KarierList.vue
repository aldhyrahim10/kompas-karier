<template>
  <div class="karier-list">
    <div class="karier-heading">
      <h2 class="title text-center">Daftar Karier</h2>
      <div class="line"></div>
      <p class="subtitle text-center">Cari dan Pilih Karier Impianmu</p>
    </div>
    <div class="row" style="margin-bottom: 50px;">
      <div v-for="karier in karierList" v-bind:key="karier.id" class="col-lg-3">
        <div class="card-karier">
          <div class="card">
            <div class="karier-description">
              <h3 class="karier-job">{{karier.name}}</h3>
              <p class="karier-location">PT Kompas Media Nusantara</p>
            </div>
            <div class="location">
              <img src="../assets/location.svg" alt="" />
              <p class="place">{{karier.location}}</p>
            </div>  
            <div class="category">
              <p class="category-name">{{karier.category}}</p>
            </div>
            <router-link :to="'/karier/detail/'+karier.id" class="btn btn-detail">Lihat Detail</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.line{
  margin-top: -20px !important;
  margin-bottom: 20px !important;
  margin: auto;
  background-color: #E28F17;
  width: 220px;
  height: 3px;
}

.karier-list{
  min-height: 700px;
  margin-top: 50px !important;
  width: 80%;
  margin: auto;
}

.card{
  border-radius: 20px;
  margin-bottom: 20px;
  box-shadow: 5px 8px 4px rgba(0, 0, 0, 0.25);
}

.karier-heading{
  margin-bottom: 40px;
}

.title{
  margin-top: 40px;
  margin-bottom: 20px;
  font-weight: bold;
}

.karier-description{
  margin-top: 50px;
}

.karier-job{
  margin-left: 20px;
  font-weight: bold;
  font-size: 24px;
}

.karier-location{
  margin-left: 20px;
  font-size: 18px;
}

.location{
  margin-left: 20px;
  display: inline-flex;

}

.place{
  margin-left: 10px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 16px;
}

.category{
  margin-left: 20px;  
}

.category-name{
  font-weight: bold;
  color: #5D98C7;
  text-align: center;
  background-color: #C2E0F8;
  width: 80px;
}

.btn-detail{
  margin-bottom: 50px !important;
  margin: auto;
  width: 90%;
  margin-top: 30px;
  border-radius: 10px;
  color: #fff;
  background-color: #E28F17;
}
</style>

<script>
  import jobData from "../assets/data.json"

  export default {
    name:"KarierList",
    data: function(){
      return{
        karierList: jobData,
      };
    }
  }
</script>