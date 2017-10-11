import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
// import Menu from '@/components/Menu';
import TestPage from '@/components/TestPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      title: 'Главная',
      component: Main,
    },
    {
      path: '/test',
      name: 'Autocomplete',
      title: 'Тестовая страница',
      component: TestPage,
    },
  ],
});
