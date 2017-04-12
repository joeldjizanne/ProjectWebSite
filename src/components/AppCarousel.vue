<template>
  <div id="example">
    <carousel-3d autoplay :controls-visible="true" :clickable="false" space="400" display="10">
      <slide :index="0">
        <span class="title">You know</span>
        <figure>
          <img src="https://placehold.it/360x270">
          <figcaption class="elt">
            The sky is the limit only for those who aren't afraid to fly!
            The sky is the limit only for those who aren't afraid to fly!
          </figcaption>
        </figure>
      </slide>
      <slide :index="1">
        <span class="title">You know</span>
        <figure>
          <img src="https://placehold.it/360x270">
          <figcaption class="elt">
            The sky is the limit only for those who aren't afraid to fly!
            The sky is the limit only for those who aren't afraid to fly!
          </figcaption>
        </figure>
      </slide>
      <slide :index="2">
        <span class="title">You know</span>
        <figure>
          <img src="https://placehold.it/360x270">
          <figcaption class="elt">
            The sky is the limit only for those who aren't afraid to fly!
            The sky is the limit only for those who aren't afraid to fly!
          </figcaption>
        </figure>
      </slide>
      <slide :index="3">
        <span class="title">You know</span>
        <figure>
          <img src="https://placehold.it/360x270">
          <figcaption class="elt">
            The sky is the limit only for those who aren't afraid to fly!
            The sky is the limit only for those who aren't afraid to fly!
          </figcaption>
        </figure>
      </slide>
      <slide :index="4">
        <span class="title">You know</span>
        <figure>
          <img src="https://placehold.it/360x270">
          <figcaption class="elt">
            The sky is the limit only for those who aren't afraid to fly!
            The sky is the limit only for those who aren't afraid to fly!
          </figcaption>
        </figure>      </slide>
      <slide :index="5">
        <span class="title">You know</span>
        <figure>
          <img src="https://placehold.it/360x270">
          <figcaption class="elt">
            The sky is the limit only for those who aren't afraid to fly!
            The sky is the limit only for those who aren't afraid to fly!
          </figcaption>
        </figure>
      </slide>
      <slide :index="6">
        <span class="title">You know</span>
        <figure>
          <img src="https://placehold.it/360x270">
          <figcaption class="elt">
            The sky is the limit only for those who aren't afraid to fly!
            The sky is the limit only for those who aren't afraid to fly!
          </figcaption>
        </figure>
      </slide>
      <slide :index="7">
        <span class="title">You know</span>
        <figure>
          <img src="https://placehold.it/360x270">
          <figcaption class="elt">
            The sky is the limit only for those who aren't afraid to fly!
            The sky is the limit only for those who aren't afraid to fly!
          </figcaption>
        </figure>
      </slide>
      <slide :index="8">
        <span class="title">You know</span>
        <figure>
          <img src="https://placehold.it/360x270">
          <figcaption class="elt">
            The sky is the limit only for those who aren't afraid to fly!
            The sky is the limit only for those who aren't afraid to fly!
          </figcaption>
        </figure>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>

  import { Carousel3d, Slide } from 'vue-carousel-3d';

  export default{
    name: 'AppCarousel',
    components: {
      Carousel3d,
      Slide
    }
  }
</script>

<style>
  .carousel-3d-container figure {
    margin:0;
  }

  .carousel-3d-container figcaption {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    bottom: 0;
    position: absolute;
    bottom: 0;
    padding: 15px;
    font-size: 12px;
    min-width: 100%;
    box-sizing: border-box;
  }

  .title{
   margin-left: 150px;
    margin-bottom: 0px;
  }
</style>
