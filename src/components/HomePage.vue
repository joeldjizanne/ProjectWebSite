<template>
  <div>
    <div class="logoB">
      <img src="../assets/logo2.png" alt="notreBoite" class="logo">
    </div>
    <div id="bar" class="clearfix">
      <div id="menu">
        <ul class="clearfix">
          <li id="current"><a href="index.html">Home</a></li>
          <li ><a href="index.html">Archives</a></li>
          <li><a href="index.html">Profile</a></li>
          <li><a href="index.html">Followers</a></li>
          <li><a href="index.html">Support</a></li>
        </ul>
      </div>
    </div>
    <AppCarousel />
    <div class="barre" />

    <!--Rotating card-->
    <div class="card-wrapper">
      <div id="card-1" class="card-rotating effect__click">

        <!--Front Side-->
        <div class="face front">

          <!-- Image-->
          <div class="card-up">
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%2859%29.jpg" class="img-fluid">
          </div>
          <!--Avatar-->
          <div class="avatar"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%289%29.jpg" class="rounded-circle img-responsive">
          </div>
          <!--Content-->
          <div class="card-block">
            <h4>Jonathan Doe</h4>
            <p>Web developer</p>
            <!--Triggering button-->
            <a class="rotate-btn" data-card="card-1"><i class="fa fa-repeat"></i> Click here to rotate</a>
          </div>
        </div>
        <!--/.Front Side-->

        <!--Back Side-->
        <div class="face back">

          <!--Content-->
          <h4>About me</h4>
          <hr>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quae, dolores dicta. Blanditiis rem amet repellat, dolores nihil quae in mollitia asperiores ut rerum repellendus, voluptatum eum, officia laudantium quaerat?</p>
          <hr>
          <!--Social Icons-->
          <ul class="inline-ul">
            <li><a class="icons-sm fb-ic"><i class="fa fa-facebook"></i></a></li>
            <li><a class="icons-sm tw-ic"><i class="fa fa-twitter"></i></a></li>
            <li><a class="icons-sm gplus-ic"><i class="fa fa-google-plus"></i></a></li>
            <li><a class="icons-sm li-ic"><i class="fa fa-linkedin"></i></a></li>
          </ul>
          <!--Triggering button-->
          <a class="rotate-btn" data-card="card-1"><i class="fa fa-undo"></i> Click here to rotate back</a>

        </div>
        <!--/.Back Side-->

      </div>
    </div>
    <!--/.Rotating card-->

  </div>
</template>

<script>

  import AppCarousel from  './AppCarousel.vue'

export default {
  name: 'HomePage',
  components: {
      AppCarousel
  }
}
</script>

<style>
  .logoB{
    text-align: center;
  }
  .logo{
    width: 200px;
    height: 100px;
    text-align: center;
  }

  .clearfix:before, .clearfix:after {
    content: " ";
    display: table;
  }

  .clearfix:after {
    clear: both;
  }

  .clearfix {
    *zoom: 1;
  }

  #bar {
    background-color: black;
    padding: 10px;
  }

  #menu {
    float: left;
  }

  #menu ul {
    display: inline;
    list-style-type: none;
    padding:0;
    margin:0;
  }

  #menu ul li {
    list-style-type: none;
    float:left;
    padding: 0 10px;
  }

  #menu ul li a {
    color: white;
    text-decoration: none;
  }

  .people {
    display: inline-block;
    margin-bottom: 20px;
    max-width: 20%;
    margin-right: 1%;
    margin-left: 1%;
    padding-bottom: 10px;
  }

  .people-image {
    border-radius: 30%;
    margin-bottom: 20px;
  }

  p {
    color: black;
  }

  .barre{
   width: 100%;
    height: 50px;
    margin-bottom: 30px;
    background-color: black;
  }
  .container{
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
  }
</style>
