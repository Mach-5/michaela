<template>
    <div>
        <div>
        </div>
        <div>
            <h2>{{title}}</h2>
            <ul>
                <li v-for="category in categories" v-bind:key="category">
                    {{category}}
                </li>
            </ul>
            <img :src="thumbnail" />
            <p>{{shortDescription}}</p>
            <img v-for="image in images" v-bind:key="image.id" :src="image.path" :alt="image.alt">
        </div>
    </div>
</template>

<script>
import projectData from '../data/projects';

export default {
  name: 'Project',
  data() {
    return {
      title: '',
      shortDescription: '',
      thumbnail: '',
      categories: '',
      images: '',
    };
  },
  mounted() {
    const project = projectData.find(item => item.id === this.$route.params.id);

    if (project) {
      this.title = project.title;
      this.shortDescription = project.shortDescription;
      this.thumbnail = project.thumbnail;
      this.categories = project.categories;
      this.images = project.images;
    } else {
      this.$router.push({ name: 'Home' });
    }
  },
};
</script>

<style lang="scss" scoped>
img {
  max-width: 90vw;
  margin: 15px auto;
}
ul {
  padding: 0;
  display: flex;
  justify-content: center;
}
li {
  list-style: none;
  background-color: #c98c3c;
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
  margin-right: 8px;
  font-size: 0.8em;
}
</style>
