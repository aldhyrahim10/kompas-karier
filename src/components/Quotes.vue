<template>
  <div class="quotes">
    <div class="quotes-content">
      <h3 class="content text-center">
        "Bekerja dalam bidang apapun sesungguhnya adalah interaksi,
        <br>
        kombinasi yang kreatif antara intelek dan hati"
      </h3>
    </div>
  </div>  
</template>

<style scoped>
.quotes{
  min-height: 500px;
  background-image: url(../assets/quotes.jpg);
  background-size: cover;
  margin-bottom: 50px;
}

.content{
  padding-top: 250px;
  color: #125F9F;
  font-size: 36px;
  font-weight: 600;
  font-style: italic;
}

</style>

<script>
  export default {
    name: "Quotes"
  }
</script>