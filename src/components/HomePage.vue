<template>
  <div>
    <div class="logoB">
      <img src="../assets/logo2.png" alt="notreBoite" class="logo" >
    </div>
    <div id="bar" class="clearfix">
      <div id="menu">
        <ul class="clearfix">
          <li id="current"><a href="index.html">HOME</a></li>
          <li ><a href="index.html">EVENTS</a></li>
          <li><a href="index.html">FELLOWSHPS</a></li>
          <li><a href="index.html">PARTNERS</a></li>
          <li><a href="index.html">ABOUT US</a></li>
        </ul>
      </div>
    </div>
    <AppCarousel />
    <div class="barre">
      <md-button class="md-raised">Go to take your Luky!</md-button>
      <md-button class="md-raised md-warn">Opportunities</md-button>
    </div>

    <!--Component title-->
    <h5 class="text-center mt-3 mb-2 colo">Find WorK...</h5>

    <!--First row-->
    <div class="row allshape">

      <!--First column-->
      <div class="col-lg-4 col-md-12 shape">

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
                <h4 class="colo">Jonathan Doe</h4>
                <p>Web developer</p>
                <!--Triggering button-->
                <a class="rotate-btn" data-card="card-1"><i class="fa fa-repeat test-icon"></i> Click here to rotate</a>
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
                <li><a class="icons-sm git-ic"><i class="fa fa-github"></i></a></li>
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
      <!--/First column-->

      <!--Second column-->
      <div class="col-lg-4 col-md-6 ">

        <!--Rotating card-->
        <div class="card-wrapper">
          <div id="card-2" class="card-rotating effect__click ">

            <!--Front Side-->
            <div class="face front">

              <!-- Image-->
              <div class="card-up">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(7).jpg" class="img-fluid">
              </div>
              <!--Avatar-->
              <div class="avatar"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" class="rounded-circle img-responsive">
              </div>
              <!--Content-->
              <div class="card-block">
                <h4 class="colo">Marie Clark</h4>
                <p>Web designer</p>
                <!--Triggering button-->
                <a class="rotate-btn col" data-card="card-2"><i class="fa fa-repeat" aria-hidden="false"></i> Click here to rotate</a>
              </div>
            </div>
            <!--/.Front Side-->

            <!--Back Side-->
            <div class="face back">

              <!--Content-->
              <h4 class="col">About me</h4>
              <hr>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quae, dolores dicta. Blanditiis rem amet repellat, dolores nihil quae in mollitia asperiores ut rerum repellendus, voluptatum eum, officia laudantium quaerat?</p>
              <hr>
              <!--Social Icons-->
              <ul class="inline-ul col">
                <li><a class="icons-sm fb-ic"><i class="fa fa-facebook"></i></a></li>
                <li><a class="icons-sm tw-ic"><i class="fa fa-twitter"></i></a></li>
                <li><a class="icons-sm google-plus-ic"><i class="fa fa-google-plus"></i></a></li>
                <li><a class="icons-sm dribble-ic"><i class="fa fa-dribble"></i></a></li>
              </ul>
              <!--Triggering button-->
              <a class="rotate-btn col" data-card="card-2"><i class="fa fa-undo col"></i> Click here to rotate back</a>

            </div>
            <!--/.Back Side-->

          </div>
        </div>
        <!--/.Rotating card-->

      </div>
      <!--/Second column-->

      <!--Third column-->
      <div class="col-lg-4 col-md-6">

        <!--Rotating card-->
        <div class="card-wrapper">
          <div id="card-3" class="card-rotating effect__click shape">

            <!--Front Side-->
            <div class="face front">

              <!-- Image-->
              <div class="card-up">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg" class="img-fluid">
              </div>
              <!--Avatar-->
              <div class="avatar"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17).jpg" class="rounded-circle img-responsive">
              </div>
              <!--Content-->
              <div class="card-block">
                <h4 class="colo">Kate Smith</h4>
                <p>Photographer</p>
                <!--Triggering button-->
                <a class="rotate-btn" data-card="card-3"><i class="fa fa-repeat"></i> Click here to rotate</a>
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
                <li><a class="icons-sm pin-ic"><i class="fa fa-pinterest"></i></a></li>
                <li><a class="icons-sm ins-ic"><i class="fa fa-instagram"></i></a></li>
                <li><a class="icons-sm tw-ic"><i class="fa fa-twitter"></i></a></li>
              </ul>
              <!--Triggering button-->
              <a class="rotate-btn" data-card="card-3"><i class="fa fa-undo"></i> Click here to rotate back</a>

            </div>
            <!--/.Back Side-->

          </div>
        </div>
        <!--/.Rotating card-->

      </div>
      <!--/Third column-->

    </div>
    <!--/First row-->
    <div class="row allshape">

      <!--First column-->
      <div class="col-lg-4 col-md-12 shape">

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
                <h4 class="colo">Jonathan Doe</h4>
                <p>Web developer</p>
                <!--Triggering button-->
                <a class="rotate-btn" data-card="card-1"><i class="fa fa-repeat test-icon"></i> Click here to rotate</a>
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
                <li><a class="icons-sm git-ic"><i class="fa fa-github"></i></a></li>
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
      <!--/First column-->

      <!--Second column-->
      <div class="col-lg-4 col-md-6 ">

        <!--Rotating card-->
        <div class="card-wrapper">
          <div id="card-2" class="card-rotating effect__click ">

            <!--Front Side-->
            <div class="face front">

              <!-- Image-->
              <div class="card-up">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(7).jpg" class="img-fluid">
              </div>
              <!--Avatar-->
              <div class="avatar"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" class="rounded-circle img-responsive">
              </div>
              <!--Content-->
              <div class="card-block">
                <h4 class="colo">Marie Clark</h4>
                <p>Web designer</p>
                <!--Triggering button-->
                <a class="rotate-btn col" data-card="card-2"><i class="fa fa-repeat" aria-hidden="false"></i> Click here to rotate</a>
              </div>
            </div>
            <!--/.Front Side-->

            <!--Back Side-->
            <div class="face back">

              <!--Content-->
              <h4 class="col">About me</h4>
              <hr>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quae, dolores dicta. Blanditiis rem amet repellat, dolores nihil quae in mollitia asperiores ut rerum repellendus, voluptatum eum, officia laudantium quaerat?</p>
              <hr>
              <!--Social Icons-->
              <ul class="inline-ul col">
                <li><a class="icons-sm fb-ic"><i class="fa fa-facebook"></i></a></li>
                <li><a class="icons-sm tw-ic"><i class="fa fa-twitter"></i></a></li>
                <li><a class="icons-sm google-plus-ic"><i class="fa fa-google-plus"></i></a></li>
                <li><a class="icons-sm dribble-ic"><i class="fa fa-dribble"></i></a></li>
              </ul>
              <!--Triggering button-->
              <a class="rotate-btn col" data-card="card-2"><i class="fa fa-undo col"></i> Click here to rotate back</a>

            </div>
            <!--/.Back Side-->

          </div>
        </div>
        <!--/.Rotating card-->

      </div>
      <!--/Second column-->

      <!--Third column-->
      <div class="col-lg-4 col-md-6">

        <!--Rotating card-->
        <div class="card-wrapper">
          <div id="card-3" class="card-rotating effect__click shape">

            <!--Front Side-->
            <div class="face front">

              <!-- Image-->
              <div class="card-up">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg" class="img-fluid">
              </div>
              <!--Avatar-->
              <div class="avatar"><img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17).jpg" class="rounded-circle img-responsive">
              </div>
              <!--Content-->
              <div class="card-block">
                <h4 class="colo">Kate Smith</h4>
                <p>Photographer</p>
                <!--Triggering button-->
                <a class="rotate-btn" data-card="card-3"><i class="fa fa-repeat"></i> Click here to rotate</a>
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
                <li><a class="icons-sm pin-ic"><i class="fa fa-pinterest"></i></a></li>
                <li><a class="icons-sm ins-ic"><i class="fa fa-instagram"></i></a></li>
                <li><a class="icons-sm tw-ic"><i class="fa fa-twitter"></i></a></li>
              </ul>
              <!--Triggering button-->
              <a class="rotate-btn" data-card="card-3"><i class="fa fa-undo"></i> Click here to rotate back</a>

            </div>
            <!--/.Back Side-->

          </div>
        </div>
        <!--/.Rotating card-->

      </div>
      <!--/Third column-->

    </div>
    <!--/First row-->

  </div>
</template>

<script>

  import AppCarousel from  './AppCarousel.vue'

export default {
  name: 'HomePage',
  mounted() {
    $.Velocity.RegisterUI("callout.twirl", {
      defaultDuration: 3000,
      calls: [
        [ { rotateZ: 1080 }, 0.50 ],
        [ { scaleX: 0.5 }, 0.25, { easing: "spring" } ],
        [ { scaleX: 1 }, 0.25, { easing: "spring" } ]
      ]
    });

    $("div").velocity("callout.twirl");
  },
  components: {
      AppCarousel
  }

}
</script>

<style>
  .logoB{
    text-align: center;
    margin: 0 auto;
    color: rgb(125, 125, 125);
    font-size: 0.85rem;
    margin-bottom: 17px;
  }
  .logo{
    width: 200px;
    height: 100px;
    text-align: center;
    margin: 0 auto;

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
    background-color: #7a7a7a;
    padding: 10px;
    font-size: 20px;
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

  p {
    color: black;
  }

  .barre{
   width: 100%;
    height: 50px;
    margin-bottom: 30px;
    background-color: #7a7a7a;
    padding-top: 15px;
    padding-left: 5px;
    margin-top: 15px;

  }

.col{
  background-color: #2E3951;
 }
  .colo{
    color: #7a7a7a;
  }
  .shape{
    border-radius: 2000%;

  }
  h5{
    text-align: center;
  }
  allshape{
    padding-left: 300px;

  }

  /*body {
    font-family: "Helvetica Neue", Helvetica;
    width: 90%;
    font-weight: 200;
    letter-spacing: 1px;
    margin: 25px auto 0 auto;
    background: rgb(234, 235, 235);
    color: rgb(25, 25, 25);
  }

  div, p {
    margin: 0 auto;
  }

  p {
    color: rgb(125, 125, 125);
    font-size: 0.85rem;
    text-align: center;
    margin-bottom: 17px;
  }

  div {
    width: 35%;
  }*/
  .md-raised{
    background-color: #3f4f7d;
    margin-bottom: 4px;
  }
</style>
