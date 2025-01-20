import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import HowItWorksPage from '@/views/HowItWorksPage.vue';
import SessionsQueuePage from '@/views/SessionsQueuePage.vue';
import WhyPage from '@/views/WhyPage.vue';
import {useBurger} from "@/composables/useBurger.ts";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/how-it-works',
      name: 'how',
      component: HowItWorksPage,
    },
    {
      path: '/current-sessions',
      name: 'current-sessions',
      component: SessionsQueuePage
    },
    {
      path: '/why',
      name: 'why',
      component: WhyPage
    }
  ],
})

router.beforeEach((to, from) => {
  const { openMobileMenu } = useBurger();
  openMobileMenu.value = false;
  return true
})

export default router
