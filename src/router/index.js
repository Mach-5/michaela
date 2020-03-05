import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Project from '@/pages/Project';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/project/:id',
      name: 'Project',
      component: Project,
    },
  ],
});
