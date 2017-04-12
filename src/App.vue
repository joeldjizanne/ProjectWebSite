<template>
  <div id="app">
    <NavBar />

    <router-view></router-view>

    <AppFooter />
  </div>
</template>

<script>

  import NavBar from './components/NavBar.vue'
  import AppFooter from './components/AppFooter.vue'
  import AppCarousel from './components/AppCarousel.vue'

export default {
  name: 'App',
  components: {
      NavBar,
      AppFooter,
    AppCarousel
  }
}
</script>
