<template>
  <div id="app">
    <Header />
    <!-- <img src="./assets/logo.png"> -->
    <main>
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import './variables.scss';


body {
  margin: 0;
  background-color: #fcfcfc;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
main {
  margin-top: $header-height;
}
</style>
