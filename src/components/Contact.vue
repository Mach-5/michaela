<template>
  <div id="contact">
    <h2>Get in touch</h2>
    <p>
      If you are interested in getting in contact with me for a project, or to just say hello,
      send an email to <a href="mailto: michaela.lockett7@gmail.com">michaela.lockett7@gmail.com</a>
      or you can message me on LinkedIn.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style lang="scss" scoped>
#contact {
  background: blue;
  padding: 20px;
  color: #ffffff;
  & a {
    color: #ffffff;
  }
}
</style>
