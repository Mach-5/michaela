<template>
    <div>
        <h2>Projects</h2>

        <div>
            <ProjectSummary
                v-for="project in projects"
                v-bind:key="project.id"
                :id="project.id"
                :title="project.title"
                :shortDescription="project.shortDescription"
                :thumbnail="project.thumbnail"
                :categories="project.categories"
            />
        </div>
    </div>
</template>

<script>
import ProjectSummary from './ProjectSummary';
import projectData from '../data/projects';

export default {
  name: 'ProjectList',
  components: {
    ProjectSummary,
  },
  data() {
    return {
      projects: projectData,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
