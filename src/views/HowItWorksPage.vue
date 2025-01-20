<template>
  <h2 class="main-page__title" v-html="$t('global.how.title')" />
  <p class="main-page__text">
    {{$t('global.how.options.1')}}
  </p>
  <p class="main-page__text">
    {{$t('global.how.options.2')}}
  </p>
  <p class="main-page__text">
    {{$t('global.how.options.3')}}
  </p>
  <TheButton to="/" class="main-page__cta" variant="default">
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
    font-size: 76px;
    font-family: 'Oswald', sans-serif;
    line-height: 1;
    color: #fff;
    width: fit-content;
    margin-bottom: 48px;

    &:deep(.blue) {
      color: #0055A4 !important;
    }
    &:deep(.red) {
      color: #EF4135 !important;
    }

    @media (max-width: 478px) {
      font-size: 40px;
    }
  }

  &__text {
    margin-top: 14px;
    font-size: 18px;
    line-height: 1.2;
  }

  &__cta {
    margin-top: 24px;
  }
}
</style>
