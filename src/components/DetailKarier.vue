<template>
  <div class="detail-karier">
    <div class="row">
      <div class="col-lg-6">
        <div class="deskripsi-karier">
          <div class="heading">
            <h2 class="title">Deskripsi Pekerjaan</h2>
            <div class="line"></div>
          </div>
          <div class="list-deskripsi">
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquid at hic accusantium eveniet magnam, suscipit error consectetur saepe incidunt voluptatum sit, aspernatur harum natus numquam ut quibusdam iusto repellat!</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam repellendus ipsum sint asperiores, obcaecati sapiente odio quidem voluptates eaque delectus fuga recusandae repellat quibusdam nostrum exercitationem ex alias consequatur a!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non suscipit, nisi perspiciatis minus voluptate molestiae quasi animi asperiores quas repellat iusto.</li>
            </ul>
          </div>
        </div>
        <div class="syarat-karier">
          <div class="heading">
            <h2 class="title">Persyaratan</h2>
            <div class="line-syarat"></div>
          </div>
          <div class="list-syarat">
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="detail-daftar">
          <div class="heading">
            <h2 class="title">Detail Pendaftaran</h2>
            <div class="line"></div>
          </div>
          <div class="card-detail">
            <div class="detail">
              <div class="group">
                <label for="">Tanggal Pendaftaran</label>
                <p>January 15, 2021 - Februari 20, 2021</p>
              </div>
              <div class="group">
                <label for="">Lokasi</label>
                <p>Jakarta Selatan</p>
              </div>
              <div class="group">
                <label for="">Departemen</label>
                <p>{{karierList.divisi}}</p>
              </div>
              <div class="group">
                <label for="">Perusahaan</label>
                <p>PT Kompas Media Nusantara</p>
              </div>
            </div>
          </div>
          <a href="#" class="btn btn-daftar">Daftar</a>
        </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>

.btn-daftar{
  color: #fff;
  width: 70%;
  margin: auto;
  background-color: #E28F17;
}

label{
  font-weight: bold;
}

.detail{
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 50px;
  padding-bottom: 50px;
}

.card-detail{
  width: max-content;
  border-radius: 20px;
  margin-bottom: 50px;
  box-shadow: 5px 8px 4px rgba(0, 0, 0, 0.25);
}

.detail-daftar{
  width: 80%;
  margin: auto;
}

.deskripsi-karier{
  margin-bottom: 30px;
}

li{
  margin-top: 10px;
}

.detail-karier{
  min-height: 700px;
  margin-top: 40px !important;
  width: 80%;
  margin: auto;
}

.title{
  font-weight: bold;
}

.line-syarat{
  margin-bottom: 20px !important;
  background-color: #E28F17;
  width: 200px;
  height: 3px;
}

.line{
  margin-bottom: 20px !important;
  background-color: #E28F17;
  width: 300px;
  height: 3px;
}

</style>

<script>
  import jobData from "../assets/data.json"

  export default {
    name: "DetailKarier", 
    data: function(){
      return{
        karierList: jobData[this.$route.params.id]
      };
    }   
  }
</script>