<template>
  <footer>
      <div class="footer">
        <div class="para">
          <h1>Search Opportunities</h1> <br>
          <div class="icon">
            <i class="fa fa-facebook-square" aria-hidden="true"></i>
            Facebook
            </div>
         <div class="icon">
           <i class="fa fa-skype" aria-hidden="true"></i>
           Skype
          </div>
         <div class="icon">
           <i class="fa fa-twitter-square" aria-hidden="true"></i>
           Tweeter
          </div>
        </div>
        <div class="para">
          <h1>Ours Partners</h1> <br>
          <div class="icon">
            <i class="fa fa-facebook-square" aria-hidden="true"></i>
            Facebook
            </div>
          <div class="icon">
            <i class="fa fa-skype" aria-hidden="true"></i>
            Skype
           </div>
          <div class="icon">
            <i class="fa fa-twitter-square" aria-hidden="true"></i>
            Tweeter
           </div>
        </div>
        <div class="para">
          <h1>Contact us</h1>
          <div class="icon">
            <i class="fa fa-phone" aria-hidden="true"></i>
            +(237)698 371 543
            </div>
          <div class="icon">
            <i class="fa fa-mobile" aria-hidden="true"></i>
            +(237)674 554 133
            </div>
         <div class="icon">
           <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
           +(237)675 726 298/+(237)679 303 323
         </div>
        </div>
        <div class="para">
          <h1>Follow us</h1>
          <div class="icon">
            <i class="fa fa-facebook-square" aria-hidden="true"></i>
            Facebook
            </div>
          <div class="icon">
            <i class="fa fa-skype" aria-hidden="true"></i>
            Skype
           </div>
          <div class="icon">
            <i class="fa fa-twitter-square" aria-hidden="true"></i>
            Tweeter
           </div>
        </div>
      </div>

  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style>
  *{
    margin: 0px;
    padding: 0px;
    color: #fff;
  }

  footer{
    width: 100%;
    padding-bottom: 50px;
    background-color: #1A1A1A;
    text-align: center;
    display: block;
  }
  .para{
    display: inline-block;
    max-width: 20%;
    text-align: left;
    margin-top: 30px;
    font-size: 20px;
  }

  .para:not(:first-child) {
    margin-left: 2%;
  }
  .icon {
    margin-bottom: 5px;
  }
</style>
