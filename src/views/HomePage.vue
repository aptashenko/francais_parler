<template>
  <h2 class="main-page__title" v-html="$t('global.main_title')" />
  <p class="main-page__subtitle">
    {{$t('global.main_subtitle')}}
  </p>
  <TheButton class="main-page__cta" variant="default">
    {{$t('global.header.cta')}}
  </TheButton>
</template>
<script setup lang="ts">
import TheButton from "@/components/CtaButton/TheButton.vue";
</script>

<style lang="scss" scoped>
.main-page {
  &__title {
    font-weight: 400;
    font-size: 96px;
    font-family: 'Oswald', sans-serif;
    line-height: 1;
    color: #fff;
    width: fit-content;

    &:deep(.blue) {
      color: #0055A4 !important;
      display: block;
    }
    &:deep(.red) {
      color: #EF4135 !important;
      display: block;
    }

    @media (max-width: 478px) {
      font-size: 60px;
    }
  }

  &__subtitle {
    margin-top: 14px;
    font-size: 32px;
    line-height: 1.2;
  }

  &__cta {
    margin-top: 24px;
  }
}
</style>
