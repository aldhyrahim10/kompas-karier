<template>
  <div class="search-karier">
    <div class="card">
      <center>
        <form action="#" class="form" method="POST">
          <div class="row">
            <div class="form-group col-lg-5">
              <input class="form-control" type="text" name="jobs" id="jobs" placeholder="Cari Karier">
            </div>
            <div class="form-group col-lg-3">
              <select class="form-control" name="depatment" id="department">
                <option value="">Semua Department</option>
              </select>
            </div>
            <div class="form-group col-lg-3">
              <select class="form-control" name="lokasi" id="lokasi">
                <option value="">Semua Lokasi</option>
              </select>
            </div>
            <div class="form-group col-lg-1">
              <a class="btn btn-search" href="#"><img src="../assets/search.svg" alt=""></a>
            </div>
          </div>
        </form>
      </center>
    </div>
  </div>  
</template>

<style scoped>
.card{
  margin-top: -30px !important;
  width: 80%;
  height: min-content;
  margin: auto;
}

.form{
  width: 96%;
  margin-top: 15px;
  margin-bottom: 15px;
}

.form-control{
  border-radius: 10px;
}

.btn-search{
  margin-right: 15px;
  background-color: #E28F17 ;
}
</style>

<script>
  export default {
    name:"CardSearchKarier"
  }
</script>