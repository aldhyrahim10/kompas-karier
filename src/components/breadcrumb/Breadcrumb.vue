<template>
  <div class="breadcrumb-section">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><img class="icon" src="../../assets/home.svg" alt=""></li>
        <li class="breadcrumb-item"><a class="item active" href="#">Karier</a></li>
      </ol>
    </nav>
  </div>  
</template>

<style scoped>
.breadcrumb-section{
  margin-top: 20px !important;
  width: 80%;
  margin: auto;
  background-color: #f3f2f2;
}

.breadcrumb{
  margin-left: 20px;
}

.breadcrumb-item{
  margin-top: 10px;
  margin-bottom: 10px;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
}

.item {
  text-decoration: none;
  color: #c4c4c4;
  font-weight: bold;
}

.item.active{
  text-decoration: none;
  color: #E28F17;
  font-weight: bold;
}

.icon{
  margin-top:-5px;
}
</style>

<script>
  export default {
    name: "Breadcrumb"
  }
</script>