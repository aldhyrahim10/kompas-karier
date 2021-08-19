<template>
  <div class="form-search">
    <form action="#" class="form" method="POST">
      <div class="row">
        <div class="form-group col-lg-6">
          <input class="form-control" type="text" name="job" id="job" placeholder="Cari Karier">
        </div>
        <div class="form-group col-lg-5">
          <select class="form-control" name="" id="">
            <option value="">Semua Lokasi</option>
          </select>
        </div>
        <div class="form-group col-lg-1">
          <a class="btn btn-search" href="#"><img src="../assets/search.svg" alt=""></a>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>

.form-search{
  width: 70%;
  margin: auto;
  margin-top: 50px;
}

.row{
  margin: auto;
}

.form-control{
  border-radius: 14px;
  height: 40px;
  padding-left: 30px;
}

.btn-search{
  background-color: #E28F17 ;
}

</style>

<script>
  export default {
    name:"FormSearch"
  }
</script>

