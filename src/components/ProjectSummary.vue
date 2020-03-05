<template>
  <div ref="projectWrapper" class="project-wrapper">
    <div :class="['project-image', { animate: animateFadeIn }]">
      <img :src="thumbnail" />
    </div>
    <div :class="['project-details', { animate: animateFadeIn }]">
      <ul>
        <li v-for="category in categories" v-bind:key="category">
          {{category}}
        </li>
      </ul>
      <router-link :to="{ name: 'Project', params: { id }}"><h3>{{title}}</h3></router-link>
      <p>{{shortDescription}}</p>
      <router-link :to="{ name: 'Project', params: { id }}"><p>View project ></p></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectSummary',
  props: {
    id: String,
    title: String,
    shortDescription: String,
    thumbnail: String,
    categories: Array,
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
    this.checkVisibility();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      if (!this.debouncingScrollEvent) {
        this.checkVisibility();
        this.debouncingScrollEvent = true;
        setTimeout(() => {
          this.debouncingScrollEvent = false;
        }, 300);
      }
    },
    checkVisibility() {
      if (window.scrollY + window.innerHeight > this.$refs.projectWrapper.offsetTop) {
        this.animateFadeIn = true;
        window.removeEventListener('scroll', this.onScroll);
      }
    },
  },
  data() {
    return {
      debouncingScrollEvent: false,
      animateFadeIn: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.project-wrapper {
  width: 90vw;
  margin: 40px auto 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  &:nth-child(odd) .project-details {
    margin-left: -15%;
    margin-right: 0;
  }
  &:nth-child(even) .project-details {
    margin-left: 0;
    margin-right: -15%;
  }
}

.project-image {
  width: 70%;
  opacity: 0;
}

.project-details {
  opacity: 0;
  width: 32%;
  background-color: #ffffff;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: all .1s ease-in-out;
  transform: translateY(0%);
  &:hover {
    box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(-1%);
  }
}

img {
  max-width: 100%;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
}

ul {
  margin: -35px 0 30px;
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

@keyframes slideFadeRight {
  0% {
    opacity: 0;
    transform: translateX(-70%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}

@keyframes slideFadeLeft {
  0% {
    opacity: 0;
    transform: translateX(70%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}

.project-wrapper:nth-child(odd) .project-details,
.project-wrapper:nth-child(even) .project-image {
  &.animate{
    animation-name: slideFadeLeft;
    animation-duration: 1s;
    opacity: 1;
  }
}

.project-wrapper:nth-child(even) .project-details,
.project-wrapper:nth-child(odd) .project-image {
  &.animate{
    animation-name: slideFadeRight;
    animation-duration: 1s;
    opacity: 1;
  }
}
</style>
