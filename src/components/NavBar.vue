<template>
  <div class="col">
    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon><img src="../assets/logo2_80x60.png" alt=""></md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">Secure Your future</h2>


      <md-input-container class ="search">
        <md-icon>search</md-icon>
        <label>Search</label>
        <md-input type="tel"></md-input>
      </md-input-container>
      <div class="pos">
        <img src="../assets/France.png" alt="flag_france">
        <img src="../assets/en.png" alt="flag_londres">
      </div  >
      <md-button class="md-raised">Sign In</md-button>
      <router-link to="/login" class="md-raised md-primary">LogIn</router-link>
    </md-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style>
.search {
  margin-right: 100px;
  max-width: 350px;
}
  .col{
    color: #2E3951;
  }
.pos{
  padding-right: 15px;
}
</style>
