<template>
  <md-toolbar>
    <md-button class="md-icon-button">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title" style="flex: 1">Vue Material</h2>

    <md-input-container class ="search">
      <md-icon>search</md-icon>
      <label>Phone</label>
      <md-input type="tel"></md-input>
    </md-input-container>

    <md-button class="md-raised">Sign In</md-button>
    <md-button class="md-raised md-warn">LogIn</md-button>
  </md-toolbar>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style>
.search {
  margin-right: 100px;
  max-width: 300px;
}
</style>
