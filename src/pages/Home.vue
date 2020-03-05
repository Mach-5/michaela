<template>
  <div>
    <div class='hero'>
      <h1>Michaela Lockett.</h1>
      <h4>design extraordinaire.</h4>
    </div>
    <ProjectList />
    <Contact />
  </div>
</template>

<script>
import ProjectList from '../components/ProjectList';
import Contact from '../components/Contact';

export default {
  name: 'Home',
  components: {
    ProjectList,
    Contact,
  },
};
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.hero {
  height: calc(100vh - #{$header-height});
  padding: 20px;
  align-items: baseline;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  background-color: $dark-color;
  h1 {
    font-size: 200px;
    line-height: 160px;
    margin: 60px auto 20px;
    color: $light-color;
  }
  h4 {
    color: $light-color;
    background-color: $bright-color;
    display: inline-block;
    padding: 10px 20px;
    border-radius: 20px;
  }
}
</style>
