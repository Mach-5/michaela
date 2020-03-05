<template>
  <header :class="{sticky: stickyHeader}" ref="header">
    <router-link to="/"><h1>michaela.</h1></router-link>
    <nav>
      <ul>
        <a href=""><li>About</li></a>
        <a href=""><li>Work</li></a>
        <a href=""><li>Contact</li></a>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      if (window.scrollY > this.$refs.header.offsetHeight) {
        this.stickyHeader = true;
      } else {
        this.stickyHeader = false;
      }
    },
  },
  data() {
    return {
      stickyHeader: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../variables.scss';

header {
  z-index: 100;
  opacity: 1;
  background-color: $dark-color;
  padding: 0 40px;
  height: $header-height;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: 0.2s;
  &.sticky {
    background-color: $light-color;
    height: 40px;
    opacity: 0.8;
    box-shadow: none;
    h1 {
      font-size: 1.5em;
      color: $dark-color;
    }
  }
}
h1 {
  transition: 0.2s;
  margin: 0;
  padding: 0;
}

a {
  color: $light-color;
  &:visited {
    color: $light-color;
  }
}

.sticky {
  a {
    color: $dark-color;
    &:visited {
      color: $dark-color;
    }
  }
}

nav ul {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}
nav ul li {
  list-style: none;
  margin: 0 20px;
}
</style>
