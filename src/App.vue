<script setup lang="ts">
import { RouterView } from 'vue-router';
import {setLanguage} from "@/utils/language-manager.ts";
import TheHeader from "@/components/TheHeader/TheHeader.vue";
import HomeView from "@/layouts/HomeView.vue";

setLanguage()
</script>

<template>
  <TheHeader />
  <HomeView />
</template>

<style lang="scss" scoped>

</style>
