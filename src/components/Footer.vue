<template>
  <footer>
    <p><small>© Michaela Lockett {{ new Date().getFullYear() }}</small></p>
    <ul>
      <a href=""><li>LinkedIn</li></a>
      <a href=""><li>Instagram</li></a>
      <a href=""><li>Behance</li></a>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
footer {
  background-color:peachpuff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
ul {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}
ul li {
  list-style: none;
  margin: 5px 20px;
}
</style>
