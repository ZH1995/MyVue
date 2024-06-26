import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import FeedRecord from '../views/FeedRecord.vue';
import SleepRecord from '../views/SleepRecord.vue';

const routes = [
  {
    path: '/feed-record',
    name: 'FeedRecord',
    component: FeedRecord
  },
  {
    path: '/sleep-record',
    name: 'SleepRecord',
    component: SleepRecord
  },
  {
      path: '/',
      name: 'home',
      component: Home
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


