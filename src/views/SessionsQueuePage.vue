<template>
  <h2 class="main-page__title" v-html="$t('global.sessions.title')" />
  <div class="main-page__session">
    <img src="@/assets/images/topics/topic-greetings.webp" />
    <div class="main-page__session-card">
      <h3 v-html="$t('global.sessions.travel.title')"/>
      <p v-html="$t('global.sessions.travel.level')"/>
      <p v-html="$t('global.sessions.travel.date', {date: '15/02/2025'})"/>
      <p v-html="$t('global.sessions.travel.cost', {cost: '100 €'})"/>
      <p v-html="$t('global.sessions.travel.duration')"/>
      <p v-html="$t('global.sessions.travel.description')"/>
    </div>
  </div>
  <TheButton to="/" class="main-page__cta">
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
    font-size: 64px;
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

  &__session {
    width: 100%;
    max-width: 650px;
    display: flex;
    align-items: flex-start;
    gap: 24px;

    & img {
      width: 45%;
      margin: 0 auto;
      display: block;
      flex-shrink: 0;

      @media (max-width: 478px) {
        width: 100%;
      }
    }

    @media (max-width: 478px) {
      flex-direction: column;
    }
  }

  &__session-card {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 9px;
  }

  &__cta {
    margin-top: 24px;
  }
}
</style>
