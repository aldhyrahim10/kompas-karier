<template>
  <div class="purpose">
    <div class="purpose-header">
      <h2 class="purpose-title text-center">Tujuan Kami</h2>
      <div class="line"></div>
    </div>
    <div class="row">
      <div class="content col-lg-7">
        <div class="heading-content">
          <h3 class="title">Bekerja Dengan Tujuan Baik</h3>
          <div class="description">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis beatae, ex laboriosam nisi vitae nulla illo nostrum ab at similique. Alias illo, atque inventore tempora facere repellat optio aperiam quo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam deleniti unde tempore ea voluptatibus labore. Hic numquam ipsa quae magni iusto laboriosam esse rerum, nisi exercitationem fugit consequuntur quisquam ea.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis beatae, ex laboriosam nisi vitae nulla illo nostrum ab at similique. Alias illo, atque inventore tempora facere repellat optio aperiam quo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam deleniti unde tempore ea voluptatibus labore. Hic numquam ipsa quae magni iusto laboriosam esse rerum, nisi exercitationem fugit consequuntur quisquam ea.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptatibus dolor, saepe harum quas ut temporibus eos quod, illo quos ea dolores, voluptas adipisci? Fugit quas dicta tempore suscipit minima.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-5">
        <img src="../assets/purpose.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.purpose{
  margin-top: 100px;
  min-height: 500px;
  margin-bottom: 100px;
}

.purpose-title{
  font-size: 30px;
  font-weight: bold;
}

.line{
  margin-left: 660px;
  background-color: #E28F17;
  width: 50px;
  height: 5px;
}

.row{
  width: 70%;
  margin: auto;
  margin-top: 70px;
  
}

.title{
  font-size: 24px;
  font-weight: bold;
}

.description{
  margin-top: 30px;
}
</style>

<script>
  export default {
    name:"Purpose"
  }
</script>